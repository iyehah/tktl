import React from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase"; 

const UsersResetVotes = () => {
  const resetVotes = async () => {
    try {
      const usersCollection = collection(db, "users");
      const querySnapshot = await getDocs(usersCollection);

      const updatePromises = querySnapshot.docs.map(async (userDoc) => {
        const userRef = doc(db, "users", userDoc.id);
        await updateDoc(userRef, {
          Voted: false,
        });
      });

      await Promise.all(updatePromises);

      alert("تمت إعادة تعيين حالة التصويت لجميع المستخدمين إلى لا.");
    } catch (error) {
      console.error("خطأ أثناء إعادة التعيين:", error);
      alert("حدث خطأ أثناء إعادة التعيين. الرجاء المحاولة مرة أخرى.");
    }
  };

  return (
    <button onClick={resetVotes} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
      إعادة تعيين التصويت للجميع
    </button>
  );
};

export default UsersResetVotes;
