"use client";

import React, { useState, useEffect } from "react";
import { collection, doc, getDoc ,addDoc,getDocs,where,query} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { FiEye, FiEyeOff } from "react-icons/fi"; 

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    Number: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle for Password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle for Confirm Password visibility
  const router = useRouter();

  const [message, setMessage] = useState<{ text: string; type: string } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkRegistrationPeriod = async () => {
      try {
        // Fetch start and end documents
        const disabledDocRef = doc(db, "settings", "disabled"); // Replace "settings" with your collection name
        const endDocRef = doc(db, "settings", "end");

        const [disabledSnap, endSnap] = await Promise.all([
          getDoc(disabledDocRef),
          getDoc(endDocRef),
        ]);

        if (disabledSnap.exists() && endSnap.exists()) {
          const startTimestamp = disabledSnap.data().disabled.toDate();
          const disabledTimestamp = disabledSnap.data().disabled.toDate().toLocaleString(); 
          const endTimestamp = endSnap.data().end.toDate();
          const today = new Date();
          if (today < startTimestamp && today < endTimestamp) {
            setMessage({ text: ` ينتهي التسجيل عند: ${disabledTimestamp}`, type: "warning" });
          }
          if (today >= startTimestamp && today <= endTimestamp) {
            setIsDisabled(true);
            setMessage({ text: "التسجيل مغلق حالياً.", type: "warning" });
          }
        } else {
          console.error("Start or End document not found.");
        }
      } catch (error) {
        console.error("Error checking registration period:", error);
      }
    };

    checkRegistrationPeriod();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isNumberUnique = async (number: string) => {
    try {
      const q = query(collection(db, "users"), where("Number", "==", parseInt(number, 10)));
      const querySnapshot = await getDocs(q);
      return querySnapshot.empty; // Retourne vrai si le numéro est unique
    } catch (error) {
      console.error("Erreur lors de la vérification de l'unicité du numéro :", error);
      return false;
    }
  };

  const handleSubmit = async () => {
    if (isDisabled) return;

    const { Number, Password, ConfirmPassword } = formData;

    // Validate fields
    if (!Number || !Password || !ConfirmPassword) {
      setMessage({ text: "يرجى ملء جميع الحقول!", type: "error" });
      return;
    }

    if (Number.length < 8) {
      setMessage({ text: "يجب أن يحتوي الرقم على 8 أرقام على الأقل!", type: "error" });
      return;
    }

    if (Password.length < 6) {
      setMessage({ text: "يجب أن تحتوي كلمة المرور على 6 (أحرف أو أرقام) على الأقل!", type: "error" });
      return;
    }

    if (Password !== ConfirmPassword) {
      setMessage({ text: "كلمات المرور غير متطابقة!", type: "error" });
      return;
    }

    setLoading(true);

    try {
      const isUnique = await isNumberUnique(Number);

      if (!isUnique) {
        setMessage({ text: "هذا الرقم مسجل بالفعل!", type: "warning" });
        setLoading(false);
        return;
      }

      // Ajouter l'utilisateur dans Firestore
      await addDoc(collection(db, "users"), {
        Number: parseInt(Number, 10), // Assurez-vous que le numéro est un entier
        Password,
        Voted: false,
        Active: false,
      });

      setMessage({ text: "تم التسجيل بنجاح!", type: "success" });
      setFormData({
        Number: "",
        Password: "",
        ConfirmPassword: "",
      });

      setTimeout(() => router.push("/"), 2000); // Redirige après 2 secondes

    } catch (error) {
      console.error("حدث خطأ أثناء التسجيل:", error);
      setMessage({ text: "حدث خطأ أثناء التسجيل.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100" dir="rtl">
      <div className="bg-white p-6 rounded shadow-lg w-96 text-right">
        {/* Logo */}
        <div className="flex justify-center mb-4" onClick={() => router.push("/")}>
          <img src="/logo.png" alt="Logo" className="h-24 cursor-pointer" />
        </div>

        <h1 className="text-2xl font-bold mb-4 text-center">تسجيل</h1>

        {/* Messages */}
        {message && (
          <div
            className={`p-2 mb-2 rounded-lg text-center ${
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

        {/* Number Input */}
        <div className="mb-4">
          <input
            type="number"
            name="Number"
            placeholder="الرقم"
            value={formData.Number}
            onChange={handleInputChange}
            className="w-full border p-2 rounded text-right focus:outline-none focus:ring-2 focus:ring-green-200"
            disabled={isDisabled}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="Password"
            placeholder="كلمة المرور"
            value={formData.Password}
            onChange={handleInputChange}
            className="w-full border p-2 rounded text-right focus:outline-none focus:ring-2 focus:ring-green-200"
            disabled={isDisabled}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4 relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="ConfirmPassword"
            placeholder="تأكيد كلمة المرور"
            value={formData.ConfirmPassword}
            onChange={handleInputChange}
            className="w-full border p-2 rounded text-right focus:outline-none focus:ring-2 focus:ring-green-200"
            disabled={isDisabled}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
          >
            {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          disabled={loading || isDisabled}
        >
          {loading ? "جاري التحميل..." : "تسجيل"}
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
