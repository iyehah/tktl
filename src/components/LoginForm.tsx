"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importing eye icons

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: LoginFormProps) => {
  const [number, setNumber] = useState(""); // Phone number input field
  const [password, setPassword] = useState(""); // Password input field
  const [message, setMessage] = useState<{ text: string; type: string } | null>(null); // Message state
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    // Input validation
    if (!number || !password) {
      setMessage({ text: "يرجى إدخال رقم الهاتف وكلمة المرور.", type: "error" });
      return;
    }

    try {
      const usersRef = collection(db, "users");

      // Querying Firestore to find user by phone number and password
      const q = query(
        usersRef,
        where("Number", "==", Number(number)), // Directly use string comparison for phone numbers
        where("Password", "==", password)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();

        // Check if the account is active
        if (!userData.Active) {
          setMessage({ text: "حسابك غير نشط. يرجى التواصل مع مسؤول الإنتساب .", type: "warning" });
          return;
        }

        // Store user ID in localStorage
        const userId = querySnapshot.docs[0].id;
        localStorage.setItem("userId", userId);

        setMessage({ text: "تم تسجيل الدخول بنجاح!", type: "success" });

        setTimeout(() => {
          router.push("/voted"); // Redirect on successful login
        }, 1000); // Redirect after 2 seconds
      } else {
        setMessage({ text: "رقم الهاتف أو كلمة المرور غير صحيحة.", type: "error" });
      }
    } catch (err: any) {
      console.error("خطأ أثناء تسجيل الدخول:", err);
      setMessage({ text: "حدث خطأ. يرجى المحاولة مرة أخرى.", type: "error" });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" dir="rtl">
      <div className="bg-gray-100 text-black p-6 rounded shadow-lg w-full max-w-md relative">
        <h2 className="text-xl font-bold mb-4 text-center">تسجيل الدخول</h2>

        {/* Message */}
        {message && (
          <div
            className={`p-2 mb-4 text-center rounded ${
              message.type === "success"
                ? "bg-green-100 text-green-800 border border-green-400"
                : message.type === "warning"
                ? "bg-yellow-100 text-yellow-800 border border-yellow-400"
                : "bg-red-100 text-red-800 border border-red-400"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Login Form */}
        <form className="text-black" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="رقم الهاتف"
            value={number}
            onChange={(e) => setNumber(e.target.value)} // Always retrieve as a string
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-50 focus:border-green-200"
            required
          />
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-50 focus:border-green-200"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />} {/* Show eye icon */}
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            تسجيل الدخول
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 w-full text-gray-600 hover:underline"
        >
          إلغاء
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
