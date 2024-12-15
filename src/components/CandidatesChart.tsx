"use client";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CandidatesChart = () => {
  const [candidates, setCandidates] = useState<string[]>([]);
  const [votes, setVotes] = useState<number[]>([]);
  const [totalVotes, setTotalVotes] = useState<number>(0);
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [fontSize, setFontSize] = useState(14);

  const fetchCandidatesData = async () => {
    try {
      const candidatesRef = collection(db, "candidates");
      const snapshot = await getDocs(candidatesRef);

      const candidateNames: string[] = [];
      const candidateVotes: number[] = [];
      const candidatePhotos: string[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data();
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

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 768 ? 8 : 12);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchCandidatesData();
    fetchTotalVotes();
  }, []);

  const votePercentages = votes.map((vote) =>
    totalVotes > 0 ? ((vote / totalVotes) * 100).toFixed(2) : "0.00"
  );

  const colors = ["#4c9aff", "#ff4d4d", "#ffc107", "#28a745", "#6f42c1", "#fd7e14"];

  const data = {
    labels: candidates,
    datasets: [
      {
        label: "نسبة الأصوات (%)",
        data: votePercentages,
        backgroundColor: colors,
        borderRadius: 5,
        hoverBackgroundColor: "#e0e0e0",
      },
    ],
  };

  // Define the chart options with proper typing
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            const index = context.dataIndex;
            return `${candidates[index]}: ${votePercentages[index]}%`;
          },
        },
      },
      title: {
        display: true,
        text: "نتائج المرشحين",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        position: "right", // Align Y-axis labels to the right
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
      x: {
        ticks: {
          font: { size: fontSize },
        },
      },
    },
  };

  return (
    <div dir="rtl" className="flex flex-col items-center justify-center w-full p-6">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-6xl">
        {candidates.length > 0 ? (
          <>
            {/* Image Section */}
            <div className="mb-8 flex flex-row-reverse justify-between items-center w-full max-w-6xl flex-wrap">
              {photoUrls.map((url, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                  style={{
                    flex: "1",
                    margin: "0 8px",
                  }}
                >
                  <img
                    src={url}
                    alt={candidates[index]}
                    className="rounded-full shadow-md"
                    style={{
                      width: window.innerWidth < 768 ? "50px" : "60px",
                      height: window.innerWidth < 768 ? "50px" : "60px",
                      objectFit: "cover",
                      border: `4px solid ${colors[index % colors.length]}`,
                      borderRadius: "50%",
                      transition: "border-color 0.3s ease",
                    }}
                  />
                  <p className="mt-2 text-sm font-medium text-gray-600">
                    {`${votePercentages[index]}%`}
                  </p>
                  {window.innerWidth >= 768 && (
                    <p className="text-xs text-gray-500">{candidates[index]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Bar Chart */}
            <Bar data={data} options={options} />
          </>
        ) : (
          <p className="text-center text-gray-500">جارٍ تحميل البيانات...</p>
        )}
      </div>
    </div>
  );
};
export default CandidatesChart;
