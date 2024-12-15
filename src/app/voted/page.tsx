"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, collection, getDocs, updateDoc, query, orderBy } from "firebase/firestore";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { getFunctions, httpsCallable } from "firebase/functions";

interface Candidate {
  id: string;
  Name: string;
  Votes: number;
  Description: string;
  photoUrl: string;
}

const VotedPage = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [userVoted, setUserVoted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [totalVotes, setTotalVotes] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch candidates ordered by votes (descending)
        const candidatesRef = collection(db, "candidates");
        const candidatesQuery = query(candidatesRef, orderBy("Votes", "desc"));
        const snapshot = await getDocs(candidatesQuery);
        const fetchedCandidates = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Candidate[];
        setCandidates(fetchedCandidates);

        // Calculate total votes
        const totalVotes = fetchedCandidates.reduce((total, candidate) => total + candidate.Votes, 0);
        setTotalVotes(totalVotes);

        // Fetch start and end times
        const startDocRef = doc(db, "settings", "start");
        const startDoc = await getDoc(startDocRef);
        const endDocRef = doc(db, "settings", "end");
        const endDoc = await getDoc(endDocRef);

        if (startDoc.exists() && endDoc.exists()) {
          setStartTime(startDoc.data().start.toDate());
          setEndTime(endDoc.data().end.toDate());
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    const checkUserStatus = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        router.push("/"); // Redirect if not logged in
        return;
      }
      try {
        const userDoc = doc(db, "users", userId);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists() && userSnapshot.data().Voted) {
          setUserVoted(true); // Update state if the user has already voted
        }
      } catch (err) {
        console.error("Error checking user status:", err);
      }
    };

    fetchData();
    checkUserStatus();
  }, [router]);

  const handleVote = async () => {
    if (!selectedCandidate) {
      alert("Please select a candidate to vote for.");
      return;
    }

    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please log in to vote!");
      router.push("/");
      return;
    }

    if (userVoted) {
      alert("You have already voted.");
      return;
    }

    try {
      const functions = getFunctions();
      const handleVoteFunction = httpsCallable(functions, 'handleVote');

      // Call the Cloud Function
      const result = await handleVoteFunction({ userId, selectedCandidate });
      const data = result.data as { success: boolean };
      if (data.success) {
        alert("Your vote has been recorded successfully. Thank you for participating!");
      } else {
        console.error("Error during voting:", result);
      }
      // localStorage.setItem("selectedCandidate", selectedCandidate);
      // router.push("/send");
    } catch (err) {
      console.error("Error during voting:", err);
      alert("An error occurred. Please try again.");
    }
  };

  const getCurrentStatus = () => {
    const now = new Date();
    if (startTime && now < startTime) return "beforeStart";
    if (startTime && endTime && now >= startTime && now < endTime) return "voting";
    if (endTime && now >= endTime) return "afterEnd";
    return "loading";
  };

  const calculatePercentage = (votes: number) => {
    if (totalVotes === 0) return 0;
    return ((votes / totalVotes) * 100).toFixed(2);
  };

  const status = getCurrentStatus();

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4" dir="rtl">
        <h1 className="text-4xl font-bold mb-6 text-center">المرشحون</h1>
        <div className="w-full max-w-3xl">
          {status === "beforeStart" && (
            <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg text-center mb-2">
              <p>التصويت لم يبدأ بعد. سيبدأ : {startTime?.toLocaleString()}</p>
            </div>
          )}

          {status === "afterEnd" && (
            <div className="bg-red-100 text-red-800 p-4 rounded-lg text-center mb-4">
              <p>التصويت انتهى. انتهى : {endTime?.toLocaleString()}</p>
            </div>
          )}
          {userVoted && (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center mb-4">
              <p>تم تسجيل تصويتك بنجاح! شكراً لمشاركتك.</p>
            </div>
          )}

          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <img
                  src={candidate.photoUrl}
                  alt={candidate.Name}
                  className="w-16 h-16 rounded-full object-cover ml-4"
                />
                <div className="text-right ml-4">
                  <h2 className="text-xl text-black font-bold">{candidate.Name}</h2>
                  <p className="text-sm text-gray-600">{candidate.Description}</p>
                  <div className="flex items-center justify-start">
                    <p className="text-sm text-black font-medium mr-3 p-1 bg-yellow-200">
                      الأصوات: {candidate.Votes}
                    </p>
                    <p className="text-sm text-black font-medium mr-3 p-1 bg-green-200">
                      النسبة: %{calculatePercentage(candidate.Votes)}
                    </p>
                  </div>
                </div>
              </div>

              {!userVoted && status === "voting" && (
                <button
                  onClick={() => setSelectedCandidate(candidate.id)}
                  className={`px-4 py-2 ${selectedCandidate === candidate.id ? "bg-green-500" : "bg-red-500"
                    } text-white rounded hover:bg-yellow-500 transition`}
                >
                  {selectedCandidate === candidate.id ? "تم الإختيار" : "اختيار"}
                </button>
              )}
            </div>
          ))}
        </div>

        {!userVoted && selectedCandidate && status === "voting" && (
          <button
            onClick={handleVote}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            تأكيد التصويت
          </button>
        )}
      </div>
    </>
  );
};

export default VotedPage;
