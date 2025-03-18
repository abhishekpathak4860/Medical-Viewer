import React, { useState, useEffect } from "react";

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getMinutes() !== currentDate.getMinutes()) {
        setCurrentDate(now);
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, [currentDate]);

  return (
    <div className="text-center font-bold mt-4">
      {currentDate.toLocaleString("en-US", { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit",
        hour12: true 
      })}
    </div>
  );
};

export default DateComponent;
