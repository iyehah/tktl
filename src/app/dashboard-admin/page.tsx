"use client";

import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import HeaderAdmin from "@/components/HeaderAdmin";
import UsersResetVotes from "@/components/usersResetVotes";
import CandidatesResetVotes from "@/components/CandidatesResetVotes";

interface User {
  id: string;
  Number: number;
  Password: string;
  Voted: boolean;
  Active: boolean; // Champ actif
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchNumber, setSearchNumber] = useState("");
  const [showPasswords, setShowPasswords] = useState(false); // Afficher/masquer les mots de passe
  const [activeFilter, setActiveFilter] = useState<"all" | "active" | "inactive">("all"); // Filtre actif/inactif
  const [message, setMessage] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/dashboard-login");
    });

    return () => unsubscribe();
  }, [router]);

  // Récupérer les utilisateurs depuis Firestore
  const fetchUsers = async () => {
    try {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const usersList = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as User[];
      setUsers(usersList);

      // console.log("Users fetched:", usersList);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Activer/désactiver un utilisateur
  const toggleActiveStatus = async (id: string, currentStatus: boolean) => {
    try {
      const userDoc = doc(db, "users", id);
      await updateDoc(userDoc, { Active: !currentStatus });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, Active: !currentStatus } : user
        )
      );
      setMessage(`تم تغيير حالة الحساب بنجاح!`);
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error("Error updating active status:", error);
    }
  };

  // Supprimer un utilisateur
  const handleDeleteUser = async (id: string) => {
    if (window.confirm("هل أنت متأكد أنك تريد حذف هذا المستخدم؟")) {
      try {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        setMessage("تم حذف المستخدم بنجاح!");
        setTimeout(() => setMessage(null), 3000);
      } catch (error) {
        console.error("Error deleting user:", error);
        setMessage("حدث خطأ أثناء حذف المستخدم.");
        setTimeout(() => setMessage(null), 3000);
      }
    }
  };

  // Filtrer les utilisateurs
  const filteredUsers = users.filter((user) => {
    const matchesNumber = user.Number.toString().includes(searchNumber);
    const matchesActive =
      activeFilter === "all" ||
      (activeFilter === "active" && user.Active) ||
      (activeFilter === "inactive" && !user.Active);
    return matchesNumber && matchesActive;
  });

  return (
    <>
      <HeaderAdmin />
      <div className="p-6 bg-gray-100" dir="rtl">
        <h1 className="text-2xl font-bold mb-4">لوحة التحكم</h1>

        {/* Message temporaire */}
        {message && (
          <div className="bg-green-200 text-green-800 p-2 rounded mb-4">
            {message}
          </div>
        )}

        {/* Barre de recherche et filtre */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="ابحث بالرقم"
            value={searchNumber}
            onChange={(e) => setSearchNumber(e.target.value)}
            className="border p-2 rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-50 focus:border-green-200"
          />
          <select
            id="activeFilter"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value as "all" | "active" | "inactive")}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-50 focus:border-green-200"
          >
            <option value="all">جميع المستخدمين</option>
            <option value="active">المستخدمون النشطون</option>
            <option value="inactive">المستخدمون غير النشطين</option>
          </select>
          <UsersResetVotes/>
          <CandidatesResetVotes/>
          
        </div>

        {/* Nombre total d'utilisateurs */}
        <div className="mb-4">
          <p className="text-gray-600">
            إجمالي المستخدمين: <strong>{users.length}</strong> | نتائج البحث:{" "}
            <strong>{filteredUsers.length}</strong>
          </p>
        </div>

        {/* Tableau des utilisateurs */}
        <table className="table-auto w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="border px-1 py-2">الرقم</th>
              <th className="border px-1 py-2">كلمة المرور</th>
              <th className="border px-1 py-2">هل صوت؟</th>
              <th className="border px-1 py-2">الحالة</th>
              <th className="border px-1 py-2">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="border px-1 py-2">{user.Number}</td>
                <td className="border px-1 py-2">
                  {showPasswords ? user.Password : "•".repeat(user.Password.length)}
                </td>
                <td className="border px-1 py-2">{user.Voted ? "نعم" : "لا"}</td>
                <td className="border px-1 py-2">{user.Active ? "نشط" : "غير نشط"}</td>
                <td className="border flex px-1 py-2">
                  <button
                    onClick={() => toggleActiveStatus(user.id, user.Active)}
                    className={`px-2 py-1 rounded ${
                      user.Active
                        ? "bg-yellow-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {user.Active ? "تعطيل" : "تفعيل"}
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded mr-1"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
