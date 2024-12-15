"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";

const SendVotePage = () => {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    const handleVotingProcess = async () => {
      try {
        // Retrieve the selected candidate from localStorage
        const selectedCandidate = localStorage.getItem("selectedCandidate");
        const userId = localStorage.getItem("userId");

        if (!selectedCandidate || !userId) {
          setMessage("لم يتم تحديد مرشح أو لم يتم تسجيل الدخول.");
          setMessageType("error");
          setTimeout(() => router.push("/"), 2000); // Redirect after 2 seconds
          return;
        }

        // Get the candidate data
        const candidateRef = doc(db, "candidates", selectedCandidate);
        const candidateSnapshot = await getDocs(collection(db, "candidates"));
        const candidateData = candidateSnapshot.docs.find((doc) => doc.id === selectedCandidate)?.data();

        if (candidateData) {
          // Increment the candidate votes
          await updateDoc(candidateRef, {
            Votes: candidateData.Votes + 1,
          });

          // Update the user status as voted
          const userRef = doc(db, "users", userId);
          await updateDoc(userRef, {
            Voted: true,
          });

          setMessage("تم تسجيل تصويتك بنجاح!");
          setMessageType("success");

          // Clear the selected candidate from localStorage after voting
          localStorage.removeItem("selectedCandidate");

          // Redirect to home page after 2 seconds
          setTimeout(() => {
            router.push("/");
          }, 2000);
        } else {
          setMessage("خطأ: لم يتم العثور على البيانات.");
          setMessageType("error");
        }
      } catch (error) {
        console.error("Error during voting:", error);
        setMessage("حدث خطأ أثناء التصويت. يرجى المحاولة مرة أخرى.");
        setMessageType("error");
        setTimeout(() => router.push("/"), 1000); // Redirect on error
      }
    };

    handleVotingProcess();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="text-center">
        {message && (
          <div
            className={`${
              messageType === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
            } p-4 rounded-lg mb-4`}
          >
            <p className="text-lg">{message}</p>
          </div>
        )}
        {messageType === "success" ? (
          <h1 className="text-3xl font-bold mb-4">تم تسجيل تصويتك بنجاح!</h1>
        ) : (
          <h1 className="text-3xl font-bold mb-4">حدث خطأ أثناء التصويت!</h1>
        )}
        <p className="text-lg">...سوف يتم تحويلك إلى الصفحة الرئيسية</p>
      </div>
    </div>
  );
};
export default SendVotePage;
