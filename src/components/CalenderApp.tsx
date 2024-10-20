import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CalenderApp({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: any;
  setSelectedDate: any;
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  // Get the first day (Sunday) of the current week
  const startOfWeek = (date: any) => {
    const day = date.getDay(); // Day of the week (0-6)
    const diff = date.getDate() - day; // Calculate how far back to go to reach Sunday
    return new Date(date.setDate(diff));
  };

  // Function to get all days of the current week
  const getWeekDays = (date: any) => {
    const start = startOfWeek(date);
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      weekDays.push(day);
    }
    return weekDays;
  };

  // Week days array for the current week
  const weekDays = getWeekDays(new Date(currentDate));

  // Function to handle next week
  const handleNextWeek = () => {
    setCurrentDate((prevDate: any) => {
      const nextWeek = new Date(prevDate);
      nextWeek.setDate(prevDate.getDate() + 7); // Move to the next week
      return nextWeek;
    });
  };

  // Function to handle previous week
  const handlePrevWeek = () => {
    setCurrentDate((prevDate: any) => {
      const prevWeek = new Date(prevDate);
      prevWeek.setDate(prevDate.getDate() - 7); // Move to the previous week
      return prevWeek;
    });
  };
  const handleDateClick = (day: any) => {
    setSelectedDate(day);
  };

  return (
    <div>
      {/* Display current month and year */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img
            className="h-5 w-5"
            src="/images/calendar.svg"
            alt="calendar icon"
          />
          <p className="font-poppins text-xs font-semibold">
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handlePrevWeek}>
            <IoIosArrowBack className="h-4 w-4" />
          </button>
          <button onClick={handleNextWeek}>
            <IoIosArrowForward className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Display days of the week */}
      <div className="flex mt-4 text-gray-400 font-semibold font-poppins text-xs">
        {weekDays.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(day)}
            className={`flex py-1 rounded px-1.5 flex-col gap-1 items-center hover:bg-orange-500 hover:text-white 
              ${
                day.toDateString() === selectedDate.toDateString()
                  ? "bg-orange-500 text-white"
                  : ""
              }`}
          >
            <p>
              {day.toLocaleString("default", { weekday: "long" }).slice(0, 3)}
            </p>
            <p>{day.getDate()}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CalenderApp;
