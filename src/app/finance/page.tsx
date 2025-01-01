"use client";

import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import FinanceManagement from "@/components/FinanceManagement";
import HeaderAdmin from "@/components/HeaderAdmin";

const Finance: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/dashboard-login");
    });

    return () => unsubscribe();
  }, [router]);


  useEffect(() => {
    // Retrieve the active tab from localStorage when the component mounts
    const savedTab = localStorage.getItem("activeTab");
  }, []);

  return (
    <>
      <HeaderAdmin />
      <FinanceManagement />
    </>
  );
};

export default Finance;