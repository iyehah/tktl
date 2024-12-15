"use client";

import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import UserManagement from '@/components/UserManagement';
import TimeManagement from '@/components/TimeManagement';
import HeaderAdmin from "@/components/HeaderAdmin";

const Dashboard: React.FC = () => {
  const [tabAdminValue, setTabAdminValue] = useState("time"); // Default to "time" tab
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/dashboard-login");
    });

    return () => unsubscribe();
  }, [router]);

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setTabAdminValue(tab);
    // Save the active tab to localStorage
    localStorage.setItem("activeTab", tab);
  };

  useEffect(() => {
    // Retrieve the active tab from localStorage when the component mounts
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setTabAdminValue(savedTab);
    }
  }, []);

  return (
    <>
      <HeaderAdmin />
      <div dir="rtl" className="flex flex-col items-center justify-center w-full">
        <div className="bg-white p-6 rounded shadow-lg w-full">
          <div className="flex border-b border-gray-300 mb-4">
            <button
              className={`py-2 px-4 ${tabAdminValue === "time" ? "bg-green-500 text-white" : "text-black-500"}`}
              onClick={() => handleTabChange("time")}
            >
              إدارة الوقت
            </button>
            <button
              className={`py-2 px-4 ${tabAdminValue === "user" ? "bg-green-500 text-white" : "text-black-500"}`}
              onClick={() => handleTabChange("user")}
            >
              إدارة المستخدمين
            </button>
          </div>

          {/* Conditionally render the content based on the active tab */}
          {tabAdminValue === "time" ? <TimeManagement /> : <UserManagement />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;