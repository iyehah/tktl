import React from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase"; 

const CandidatesResetVotes = () => {
  const resetVotes = async () => {
    try {
      const candidatesCollection = collection(db, "candidates");
      const querySnapshot = await getDocs(candidatesCollection);

      const updatePromises = querySnapshot.docs.map(async (candidateDoc) => {
        const candidateRef = doc(db, "candidates", candidateDoc.id);
        await updateDoc(candidateRef, {
          Votes: 0,  // Resetting the Votes field to 0
        });
      });

      await Promise.all(updatePromises);

      alert("تمت إعادة تعيين الأصوات لجميع المرشحين إلى 0.");
    } catch (error) {
      console.error("خطأ أثناء إعادة تعيين الأصوات:", error);
      alert("حدث خطأ أثناء إعادة تعيين الأصوات. الرجاء المحاولة مرة أخرى.");
    }
  };

  return (
    <button 
      onClick={resetVotes} 
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      إعادة تعيين الأصوات لجميع المرشحين
    </button>
  );
};

export default CandidatesResetVotes;
