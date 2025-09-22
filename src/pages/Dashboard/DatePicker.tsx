import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

const DateSelector: React.FC = () => {
  // selectedDateTime is a Date or null
  const [selectedDateTime, setSelectedDateTime] = useState<Date>(
    setHours(setMinutes(new Date(), 0), 9)
  );

  // restricts past times
  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className="p-4">
      <DatePicker
        selected={selectedDateTime}
        onChange={(date: Date | null) => {
          if (date) setSelectedDateTime(date);
        }}
        showTimeSelect
        filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
        className="border p-2 rounded"
      />
    </div>
  );
};

export default DateSelector;
