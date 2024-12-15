"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import CandidateChart from "./CandidateChart";
import CandidateImages from "./CandidateImages";

const CandidatesChart = () => {
  const [candidates, setCandidates] = useState<string[]>([]);
  const [votes, setVotes] = useState<number[]>([]);
  const [totalVotes, setTotalVotes] = useState<number>(0);
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [fontSize, setFontSize] = useState(14);
  const [activeTab, setActiveTab] = useState("images"); // Default to "images" tab

  // Fetch candidate data from Firebase
  const fetchCandidatesData = async () => {
    try {
      const candidatesRef = collection(db, "candidates");
      const snapshot = await getDocs(candidatesRef);
      const candidateNames: string[] = [];
      const candidateVotes: number[] = [];
      const candidatePhotos: string[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data();
        // console.log("Candidates data fetched:", data);

        candidateNames.push(data.Name);
        candidateVotes.push(data.Votes);
        candidatePhotos.push(data.photoUrl);
      });

      setCandidates(candidateNames);
      setVotes(candidateVotes);
      setPhotoUrls(candidatePhotos);
    } catch (error) {
      console.error("Error fetching candidates data:", error);
    }
  };

  // Fetch total votes from Firebase
  const fetchTotalVotes = async () => {
    try {
      const usersRef = collection(db, "users");
      const votedQuery = query(usersRef, where("Voted", "==", true));
      const snapshot = await getDocs(votedQuery);

      setTotalVotes(snapshot.size);
    } catch (error) {
      console.error("Error fetching total votes:", error);
    }
  };

  // Handle resizing of font size
  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 768 ? 8 : 12);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchCandidatesData();
    fetchTotalVotes();

    // Check localStorage for the last active tab
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Save the active tab to localStorage
    localStorage.setItem("activeTab", tab);
  };

  // Calculate vote percentages
  const votePercentages = votes.map((vote) =>
    totalVotes > 0 ? ((vote / totalVotes) * 100).toFixed(2) : "0.00"
  );

  return (
    <div dir="rtl" className="flex flex-col items-center justify-center w-full p-6">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-6xl">
        <div className="flex border-b border-gray-300 mb-4">

          <button
            className={`py-2 px-4 ${activeTab === "images" ? "bg-green-500 text-white" : "text-black-500"}`}
            onClick={() => handleTabChange("images")}
          >
            بدون الرسم البياني
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "chart" ? "bg-green-500 text-white" : "text-black-500"}`}
            onClick={() => handleTabChange("chart")}
          >
            مع الرسم البياني
          </button>
        </div>

        {activeTab === "chart" ? (
          <CandidateChart
            candidates={candidates}
            votePercentages={votePercentages}
            fontSize={fontSize}
          />
        ) : (
          <CandidateImages candidates={candidates} votePercentages={votePercentages} photoUrls={photoUrls} />
        )}
      </div>
    </div>
  );
};
export default CandidatesChart;
