import React from 'react';
import TimeEnd from '@/components/TimeEnd';
import TimeStart from "@/components/TimeStart";
const TimeManagement: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-2">
      <TimeStart/>
      <TimeEnd/>
    </div>
  );
};

export default TimeManagement;
