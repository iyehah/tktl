"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CandidateChartProps {
  candidates: string[];
  votePercentages: string[];
  fontSize: number;
}

const CandidateChart = ({ candidates, votePercentages, fontSize }: CandidateChartProps) => {
  const colors = ["#28a745","#ffc107","#ff4d4d","#4c9aff", "#6f42c1", "#fd7e14"];

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
        position: "right", 
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

  return <Bar data={data} options={options} />;
};
export default CandidateChart;
