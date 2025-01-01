"use client";
import React, { useState, useEffect, use } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  Timestamp,
  addDoc,
  sum,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import PrintData from "@/components/PrintData";
import { IoMdClose } from "react-icons/io";

interface User {
  id: string;
  Number: number;
  Name: string;
  Password: string;
  Voted: boolean;
  Active: boolean; // Champ actif
  Contributed: boolean; // to check if the user has contributed
  ContributedAmmount: number; // to store the total amount contributed
  Contributions: Contribution[];
}

interface Contribution {
  id?: string;
  Amount: number;
  Date: Timestamp;
  UserID: string;
}

const FinanceManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchNumber, setSearchNumber] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "contributed" | "not">("all");
  const [message, setMessage] = useState<string | null>(null);
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);

  // Récupérer les utilisateurs depuis Firestore
  const fetchContributions = async () => {
    try {
      const contributionsSnapshot = await getDocs(collection(db, "contributions"));
      const contributionsList = contributionsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Contribution[];
      setContributions(contributionsList);
      let sumContributions = 0;
      contributionsList.forEach((contribution) => {
        if (contribution.Amount && !isNaN(contribution.Amount) && contribution.Amount > 0)
          sumContributions += contribution.Amount;
      });
      setTotalContributions(sumContributions);
    } catch (error) {
      console.error("Error fetching contributions:", error);
    }
  };
  const fetchUsers = async () => {
    try {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const usersList = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as User[];
      setUsers(usersList);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchContributions();
  }, []);

  function handleSetMessage(message: string) {
    setMessage(message);
    setTimeout(() => setMessage(null), 5000);
  }

  // Filtrer les utilisateurs
  const filteredUsers = users.filter((user) => {
    const matchesNumber = user.Number.toString().includes(searchNumber);
    const matchesContributed =
      activeFilter === "all" ||
      (activeFilter === "contributed" && user.Contributed) ||
      (activeFilter === "not" && !user.Contributed);
    return matchesNumber && matchesContributed;
  });

  return (
    <>
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
            onChange={(e) => setActiveFilter(e.target.value as "all" | "contributed" | "not")}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-50 focus:border-green-200"
          >
            <option value="all">جميع المستخدمين</option>
            <option value="contributed">المستخدمون المساهمين</option>
            <option value="not">المستخدمون غير المساهمين</option>
          </select>
        </div>

        {/* Nombre total d'utilisateurs */}
        <div className="mb-4">
          <p className="text-gray-600 inline-block">
            إجمالي المستخدمين: <span className="font-bold">{users.length}</span> | نتائج البحث:{" "}
            <span className="font-bold">{filteredUsers.length}</span>
          </p>
          <p className="text-gray-600 inline-block mr-4">
            إجمالي المساهمات: <span className="font-bold">{totalContributions}</span> أوقية جديدة
          </p>
        </div>

        {/* Tableau des utilisateurs */}
        <table id="users-table" className="table-auto w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="border px-1 py-2 text-right">الإسم الكامل</th>
              <th className="border px-1 py-2">الرقم</th>
              <th className="border px-1 py-2">هل ساهم</th>
              <th className="border px-1 py-2">قائمة المساهمات</th>
              <th className="border px-1 py-2">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers
              // .sort((a, b) => (a.Voted === b.Voted ? 0 : a.Voted ? 1 : -1))
              .map((user) => (
                <tr key={user.id}>
                  <td className="border px-1 py-2 text-right">{user.Name}</td>
                  <td className="border px-1 py-2">{user.Number}</td>
                  <td className="border px-1 py-2">{user.Contributed ? "نعم" : "لا"}</td>
                  <td className="border px-1 py-2">{user.Contributed ?
                    <ul className="list-none p-0">
                      {
                        contributions
                          .filter(e => e.UserID === user.id)
                          .sort((a, b) => {
                            // Compare the Date timestamps directly
                            if (a.Date.toMillis() > b.Date.toMillis()) {
                              return -1; // a comes before b (descending order)
                            } else if (a.Date.toMillis() < b.Date.toMillis()) {
                              return 1; // b comes before a
                            } else {
                              return 0; // a and b have the same timestamp
                            }
                          })
                          .map((contribution) => (
                            <li className="flex justify-between items-center px-2" key={contribution.id}>
                              <span> <span className="font-bold">المبـلـغ :</span> {contribution.Amount} <span>أوقية جديدة</span></span>
                              <span> <span className="font-bold">التـاريـخ :</span> {
                                // contribution.Date.toDate().toLocaleTimeString()
                                contribution.Date.toDate().toLocaleString('en-US', {
                                  year: 'numeric',
                                  month: 'numeric',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: 'numeric',
                                  hour12: false,
                                }).replace(',', '')
                              }</span>
                            </li>
                          ))
                      }
                    </ul>
                    : "لم يساهم بعد"}</td>
                  <td className="border flex px-1 py-2">
                    <AddContributionButton userId={user.id} setMessage={handleSetMessage} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <PrintData tableId="users-table" />
    </>
  );
};

const AddContributionButton = ({ userId, setMessage }: { userId: string, setMessage: any }) => {
  const [amount, setAmount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value));
  };

  async function addContribution() {
    console.log('Adding contribution...', userId, amount);
    try {
      // Get a reference to the contributions collection
      const contributionsCollection = collection(db, 'contributions');

      // Create a new contribution object
      const newContribution: Contribution = {
        Amount: amount,
        Date: serverTimestamp() as Timestamp,
        UserID: userId,
      };

      // Add the new contribution to Firestore
      const docRef = await addDoc(contributionsCollection, newContribution);
      console.log('Contribution added with ID:', docRef.id);

      // Update the user document to set Contributed to true
      const userDoc = doc(db, "users", userId);
      // Get the user document
      const userSnap = await getDoc(userDoc);
      // Check if the user document exists and if Contributed is not already true
      if (userSnap.exists() && !userSnap.data().Contributed) {
        await updateDoc(userDoc, { Contributed: true });
      }

      // Close the popup and reset the amount
      setShowPopup(false);
      setAmount(0);
      // Show a success message
      setMessage("تمت إضافة المساهمة بنجاح");
    } catch (error) {
      console.error('Error adding contribution:', error);
      setMessage("حدث خطأ أثناء إضافة المساهمة");
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowPopup(true)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
      >إضاقة مساهمة</button>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" dir="rtl">
          <div className="bg-gray-100 text-black rounded-md shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-100"
              onClick={() => setShowPopup(false)}
            >
              <IoMdClose />
            </button>
            <h2 className="text-xl bg-green-500 p-1 text-white font-bold rounded-t-md mb-4 text-center">إضافة مساهمة</h2>
            <div className="flex justify-evenly items-center w-full p-6">
              <label className="block text-gray-700 font-bold mb-2 ml-2" htmlFor="amount">
                المبلغ:
              </label>
              <input
                type="text"
                id="amount"
                className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-7"
                onChange={handleInputChange}
                placeholder="أدخل المبلغ هنا..."
              />
              <span className="text-gray-500 sm:text-sm">أوقية جديدة</span>
            </div>
            <div className="flex justify-evenly p-4">
              <button
                onClick={addContribution}
                className="bg-green-500 py-1 px-4 text-white rounded hover:bg-green-600 transition duration-300"
              >إضافة المساهمة</button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-red-500 py-1 px-4 text-white rounded hover:bg-red-600 transition duration-300"
              >إلغاء</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default FinanceManagement;
