"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { IoMdClose } from "react-icons/io";

interface ProfileProps {
  userId: string;
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>; // Prop to control modal visibility
}

const Profile: React.FC<ProfileProps> = ({ userId, setShowProfile }) => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userID, setUserID] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userDoc = doc(db, "users", userId);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setUserInfo(userData);

          // Fetch users.json and find the name corresponding to the number
          const response = await fetch("/users.json");
          const users = await response.json();
          const user = users.find((u: { number: string }) => u.number === String(userData.Number));
          setUserName(user?.name || "!غير معروف");
          setUserID(user?.id || "!غير معروف");
        } else {
          console.error("No such user!");
        }
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    };

    fetchUserInfo();
  }, [userId]);

  const handleClose = () => {
    setShowProfile(false); // Close the profile modal when the close button is clicked
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" dir="rtl">
      <div className="bg-gray-100 text-black rounded-md shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-2xl text-gray-100"
        >
          <IoMdClose/>
        </button>

        <h2 className="text-xl bg-green-500 p-1 text-white font-bold rounded-t-md mb-4 text-center">معلومات المنتسب</h2>

        {!userInfo ? (
          <div className="text-center text-gray-600">جاري التحميل...</div>
        ) : (
          <div className="text-sm p-6">
            <p className="mb-2 border-b pb-2 flex justify-between items-center">
              <span className="font-semibold">معرف الحساب:</span> {userId}
            </p>
            <p className="mb-2 border-b pb-2 flex justify-between items-center">
              <span className="font-semibold">اسم المنتسب:</span> {userName}
            </p>
            <p className="mb-2 border-b pb-2 flex justify-between items-center">
              <span className="font-semibold">رقم التعريف :</span> {userID}
            </p>
            <p className="mb-2 border-b pb-2 flex justify-between items-center">
              <span className="font-semibold">رقم الهاتف:</span> {userInfo.Number}
            </p>
            <p className="mb-2 border-b pb-2 flex justify-between items-center">
              <span className="font-semibold">هل صوت؟ :</span> {userInfo.Voted ? "نعم" : "لا"}
            </p>
            <p className="mb-2 border-b pb-2 flex justify-between items-center">
              <span className="font-semibold"> حالة الحساب:</span> {userInfo.Active ? "نشط" : "غير نشط"}
            </p>
            {userInfo.Voted && (
              <p className="mb-2 border-b pb-2 flex justify-between items-center">
                <span className="font-semibold">صوت للمرشح :</span> {userInfo.Candidate}
              </p>
            )}
            <button
              onClick={() => window.location.reload()} // Simulates a close/back button
              className="mt-4 w-full text-gray-600 hover:underline"
            >
              تحديث
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
