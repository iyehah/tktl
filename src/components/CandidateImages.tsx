"use client";

interface CandidateImagesProps {
  candidates: string[];
  votePercentages: string[];
  photoUrls: string[];
}

const CandidateImages = ({ candidates, votePercentages, photoUrls }: CandidateImagesProps) => {
  const colors = ["#28a745","#ffc107","#ff4d4d","#4c9aff", "#6f42c1", "#fd7e14"];

  return (
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
  );
};
export default CandidateImages;
