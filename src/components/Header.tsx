"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import LoginForm from "@/components/LoginForm";
import Profile from "@/components/Profile";
import { CgLogIn,CgUser ,CgUserList,CgLogOut } from "react-icons/cg";
const Header = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userVoted, setUserVoted] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();

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

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setUserId(null);
    setUserVoted(false);
    router.push("/");
    window.location.reload();
  };

  const toggleLoginForm = () => setShowLoginForm((prev) => !prev);
  const toggleProfile = () => setShowProfile((prev) => !prev);

  return (
    <header className="w-full bg-gray-50 text-black p-2 flex justify-between items-center" dir="rtl">
      <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
        <img src="/logo.png" alt="الشعار" className="w-16 h-16 ml-4" />
        <h1 className="text-2xl text-black font-bold">التكــتل الشبابي</h1>
      </div>
      <div className="flex items-center justify-between"> 
        {userId ? (
          <>
            <button
              onClick={toggleProfile}
              className="bg-green-500 px-4 py-2 ml-1 rounded text-white hover:bg-green-600 transition duration-300"
            >
              {showProfile ? <CgUser size={22}/> : <CgUserList size={22}/>}
            </button>
            {showProfile && <Profile userId={userId} setShowProfile={setShowProfile} />}
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition duration-300"
            >
              <CgLogOut size={22}/>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={toggleLoginForm}
              className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 transition duration-300"
            >
              <CgLogIn size={22}/>
            </button>
            {showLoginForm && <LoginForm onClose={toggleLoginForm} />}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
