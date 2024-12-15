"use client";

import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const TimeEnd: React.FC = () => {
  const [dateEnd, setDateEnd] = useState("");
  const [message, setMessage] = useState<{ text: string; type: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateEnd(e.target.value);
  };

  const handleDateUpdate = async () => {
    try {
      const endDocRef = doc(db, "settings", "end");
      await updateDoc(endDocRef, { end: new Date(dateEnd) });
      setMessage({ text: "تم تحديث تاريخ النهاية بنجاح!", type: "success" });
    } catch (error) {
      console.error("Error updating end date:", error);
      setMessage({ text: "حدث خطأ أثناء تحديث تاريخ النهاية.", type: "error" });
    }
  };

  return (
      <div className="bg-white p-6 rounded w-96 text-right">
        <h1 className="text-2xl font-bold mb-4 text-center">تاريخ نهاية التصويت</h1>

        {message && (
          <div className={`p-2 mb-2 rounded-lg text-center ${message.type === "success" ? "bg-green-100 text-green-800 border border-green-400" : "bg-red-100 text-red-800 border border-red-400"}`}>{message.text}</div>
        )}

        <div className="mb-4">
          <input
            type="datetime-local"
            name="DateEnd"
            placeholder="تاريخ النهاية"
            value={dateEnd}
            onChange={handleInputChange}
            className="w-full border p-2 rounded text-right focus:outline-none focus:ring-2 focus:ring-green-200"
          />
          <button
            onClick={handleDateUpdate}
            className="w-full bg-green-500 text-white p-2 rounded mt-2 hover:bg-green-600"
          >
            تحديث التاريخ
          </button>
        </div>
      </div>
  );
};

export default TimeEnd;
