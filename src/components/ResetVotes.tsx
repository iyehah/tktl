import React from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase"; 

const ResetVotes = () => {
  const resetVotes = async () => {
    try {
      // Resetting candidate votes and voters
      const candidatesCollection = collection(db, "candidates");
      const candidateSnapshot = await getDocs(candidatesCollection);
      const candidateUpdatePromises = candidateSnapshot.docs.map(async (candidateDoc) => {
        const candidateRef = doc(db, "candidates", candidateDoc.id);
        await updateDoc(candidateRef, {
          Votes: 0, // Resetting the Votes field to 0
          voters: [], // Resetting the voters field to an empty array
        });
      });

      await Promise.all(candidateUpdatePromises);

      // Resetting user voting status
      const usersCollection = collection(db, "users");
      const userSnapshot = await getDocs(usersCollection);
      const userUpdatePromises = userSnapshot.docs.map(async (userDoc) => {
        const userRef = doc(db, "users", userDoc.id);
        await updateDoc(userRef, {
          Voted: false, // Resetting the Voted field to false
          Candidate: "", // Resetting the Candidate field to an empty string
        });
      });

      await Promise.all(userUpdatePromises);

      alert("تمت إعادة تعيين الأصوات وقائمة المصوتين لجميع المرشحين وحالة التصويت واختيار المرشح لجميع المستخدمين.");
    } catch (error) {
      console.error("خطأ أثناء إعادة تعيين الأصوات أو المصوتين:", error);
      alert("حدث خطأ أثناء إعادة التعيين. الرجاء المحاولة مرة أخرى.");
    }
  };

  return (
    <button 
      onClick={resetVotes} 
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
        إعادة تعيين الأصوات
    </button>
  );
};

export default ResetVotes;
