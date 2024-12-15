const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.handleVote = functions.https.onCall(async (data, context) => {
  // Get voterId and candidateId from the function call data
  const { voterId, candidateId } = data;
  console.log('Vote received:', voterId, candidateId);
  try {
    // --- 1. Check if the user has already voted ---
    const voterRef = doc(db, 'users', voterId);
    const voterDoc = await voterRef.get();

    if (!voterDoc.exists()) {
      console.error('Voter not found:', voterId);
      throw new Error('Voter not found.');
    }

    if (voterDoc.data().hasVoted) {
      console.error('User has already voted:', voterId);
      throw new Error('User has already voted.');
    }

    // --- 2. Add the vote to the queue ---
    const queueRef = doc(db, 'voteQueue', 'votes'); // 'voteQueue' is the collection, 'votes' is the document
    await runTransaction(db, async (transaction) => {
      const queueDoc = await transaction.get(queueRef);
      const queue = queueDoc.exists() ? queueDoc.data().queue : [];
      transaction.update(queueRef, { queue: [...queue, { voterId, candidateId }] });
      console.log('Vote added to queue:', voterId, candidateId);
      console.info('Vote added to queue:', voterId, candidateId);
    });

    // --- 3. Mark the user as having voted ---
    await voterRef.update({ Voted: true });

    return { success: true };

  } catch (error) {
    console.error('Error handling vote:', error);
    throw new functions.https.HttpsError('internal', error.message);
  }
});


exports.processVoteQueue = functions.firestore
  .document('voteQueue/votes')
  .onUpdate(async (change, context) => {
    const newQueue = change.after.data().queue;
    console.log('Processing vote queue:', newQueue);
    
    for (const vote of newQueue) {
      try {
        const { voterId, candidateId } = vote;

        // --- 1. Update candidate's vote count ---
        const candidateRef = doc(db, 'candidates', candidateId);
        await runTransaction(db, async (transaction) => {
          const candidateDoc = await transaction.get(candidateRef);
          const currentVotes = candidateDoc.exists() ? candidateDoc.data().votes : 0;
          transaction.update(candidateRef, { votes: currentVotes + 1 });
        });

        // --- 2. Remove the processed vote from the queue ---
        await db.doc('voteQueue/votes').update({
          queue: admin.firestore.FieldValue.arrayRemove(vote),
        });

      } catch (error) {
        console.error('Error processing vote:', error);
      }
    }
  });