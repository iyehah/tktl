"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";

const DashboardLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("يرجى إدخال البريد الإلكتروني وكلمة المرور.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      localStorage.setItem("userId", user.uid);
      console.log("تم تسجيل دخول المستخدم:", user);
      router.push("/dashboard-admin");
    } catch (err: any) {
      console.error("خطأ أثناء تسجيل الدخول:", err);
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo" className="w-24 h-24" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول إلى لوحة التحكم</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-200"
            required
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-200"
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            تسجيل الدخول
          </button>
        </form>
        <div className="mt-4 text-center">
          <button onClick={() => router.push("/")} className="text-gray-600 hover:underline">
            العودة إلى الصفحة الرئيسية
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardLogin;
