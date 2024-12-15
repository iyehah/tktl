"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore"; // Use getDoc for fetching individual documents
import Header from "@/components/Header";
import CandidatesChart from "@/components/result"; // استيراد مخطط المرشحين
import CandidateImages from "@/components/CandidateImages";

export default function Home() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [TotalActives, setTotalActives] = useState(0);
  const [totalNonVotes, setTotalNonVotes] = useState(0); 
  const [startTime, setStartTime] = useState<Date | null>(null); // Start time
  const [endTime, setEndTime] = useState<Date | null>(null); // End time
  const [remainingTime, setRemainingTime] = useState<string>(""); 
  const [statusMessage, setStatusMessage] = useState<string>(""); 
  const [startFormattedTime, setStartFormattedTime] = useState<string>(""); // Start time in hh:mm:ss format
  const [startFormattedDate, setStartFormattedDate] = useState<string>(""); // Start date in MM/DD format
  const [userId, setUserId] = useState<string | null>(null);
  const [userVoted, setUserVoted] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const checkUserStatus = async () => {
      const storedUserId = localStorage.getItem("userId");
      if (!storedUserId) {
        setUserId(null);
        return;
      }
      setUserId(storedUserId);

      try {
        const userDoc = doc(db, "users", storedUserId);
        const userSnapshot = await getDoc(userDoc);
        const userData = userSnapshot.data();

        if (userData?.Voted) {
          setUserVoted(true);
        }
      } catch (err) {
        console.error("Error fetching user status:", err);
      }
    };

    checkUserStatus();
  }, []);

  const fetchStats = async () => {
    try {
      const usersRef = collection(db, "users");
      const snapshot = await getDocs(usersRef);

      const total = snapshot.size;
      const votes = snapshot.docs.filter((doc) => doc.data().Voted === true).length;
      const actives = snapshot.docs.filter((doc) => doc.data().Active === true).length;
      const nonVotes = total - votes;

      setTotalUsers(total);
      setTotalActives(actives);
      setTotalVotes(votes);
      setTotalNonVotes(nonVotes); 
    } catch (err) {
      console.error("خطأ أثناء جلب الإحصائيات:", err);
    }
  };

  const fetchSettings = async () => {
    try {
      const startDocRef = doc(db, "settings", "start");
      const startDoc = await getDoc(startDocRef);

      const endDocRef = doc(db, "settings", "end");
      const endDoc = await getDoc(endDocRef);

      if (startDoc.exists() && endDoc.exists()) {
        const start = startDoc.data().start.toDate();
        const end = endDoc.data().end.toDate();
        setStartTime(start);
        setEndTime(end);

        const hours = start.getHours().toString().padStart(2, '0');
        const minutes = start.getMinutes().toString().padStart(2, '0');
        const seconds = start.getSeconds().toString().padStart(2, '0');
        setStartFormattedTime(`${hours}:${minutes}:${seconds}`);

        const month = (start.getMonth() + 1).toString().padStart(2, '0');
        const day = start.getDate().toString().padStart(2, '0');
        setStartFormattedDate(`/${month}-${day}`);
      } else {
        console.error("Start or end document does not exist in the settings collection");
      }
    } catch (err) {
      console.error("خطأ أثناء جلب الإعدادات:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchStats();
      await fetchSettings();
      setLoading(false); // Set loading to false once data is fetched
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (startTime && endTime) {
      const interval = setInterval(() => {
        const now = new Date();

        if (now < startTime) {
          setStatusMessage("التصويت لم يبدأ بعد");
          setRemainingTime("");
        } else if (now >= startTime && now < endTime) {
          const timeLeft = endTime.getTime() - now.getTime();
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

          setStatusMessage("التصويت جاري");
          setRemainingTime(`${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`);
        } else {
          setStatusMessage("انتهت فترة التصويت");
          setRemainingTime("");
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startTime, endTime]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <img src="/logo.png" alt="Loading..." className="h-32 w-32 mb-4 animate-opacity" />
        <p className="text-lg text-black">...جاري تحميل البيانات</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 relative" dir="rtl">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-4xl text-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl text-black font-bold">إجمالي المسجلين</h2>
            <p className="text-2xl text-black">{totalUsers}</p>
          </div>
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl text-black font-bold">إجمالي الحسابات المُفعَّلة</h2>
            <p className="text-2xl text-black">{TotalActives}</p>
          </div>

          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl text-black font-bold">إجمالي الأصوات</h2>
            <p className="text-2xl text-black">{totalVotes}</p>
          </div>

          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl text-black font-bold">إجمالي غير المصوتين</h2>
            <p className="text-2xl text-black">{totalNonVotes}</p>
          </div>

          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl text-black font-bold">موعد بدء التصويت</h2>
            <p className="text-xs text-black">{statusMessage}</p>
            {remainingTime && <p className="text-lg text-black">{remainingTime}</p>}
          </div>
        </div>

        <div className="mt-8 w-full text-black max-w-4xl">
          <CandidatesChart />
        </div>
        {userId ? (
          <a
            href="/voted"
            className="fixed bottom-6 right-6 px-4 py-2 bg-green-500 text-white rounded flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300 z-50"
          >
            المرشحون
          </a>
        ) : ""}
      </div>
    </>
  );
}
