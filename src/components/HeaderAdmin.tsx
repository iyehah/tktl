"use client";

import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

function HeaderAdmin() {
  const router = useRouter();

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      alert("تم تسجيل الخروج بنجاح!");
      router.push("/dashboard-login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out: ", error);
      alert("حدث خطأ أثناء تسجيل الخروج!");
    }
  };

  return (
    <header className="w-full bg-gray-50 text-black p-2 flex justify-between items-center"dir="rtl">
       <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
        <img src="/logo.png" alt="الشعار" className="w-16 h-16 ml-4" />
        <h1 className="text-2xl text-black font-bold">التكــتل الشبابي</h1>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        تسجيل الخروج
      </button>
    </header>
  );
}

export default HeaderAdmin;
