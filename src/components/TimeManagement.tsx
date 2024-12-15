import React from 'react';
import TimeEnd from '@/components/TimeEnd';
import TimeStart from "@/components/TimeStart";
const TimeManagement: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-4 sm:p-2">
      <TimeStart />
      <TimeEnd />
    </div>
  );
};

export default TimeManagement;
