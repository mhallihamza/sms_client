import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
function Calendar() {
  const user = useSelector((state: any) => state.user);
  const { data: appointments }: { data: any[] } = useFetch(
    `${import.meta.env.VITE_API_URL}/appointments/details/${user.userId}`
  );
  const staff = appointments.reduce((acc, el) => {
    const staffId = el.staff.staffId;

    // Check if staff with the same ID already exists in the accumulated array
    if (!acc.some((staff: any) => staff.staffId === staffId)) {
      acc.push({
        ...el.staff
      });
    }

    return acc;
  }, []);
  const hours = Array.from({ length: 13 }, (_, i) => `${i + 9}:00`); // ['08:00', '09:00', ..., '20:00']
  function calculateEndTime(startTime:any, duration:any) {
    // Parse the start time
    const [startHours, startMinutes] = startTime.split(":").map(Number);

    // Convert duration to hours and minutes
    const durationHours = Math.floor(duration / 60);
    const durationMinutes = duration % 60;

    // Calculate total hours and minutes
    let endHours = startHours + durationHours;
    let endMinutes = startMinutes + durationMinutes;

    // Handle overflow for minutes
    if (endMinutes >= 60) {
      endMinutes -= 60;
      endHours += 1;
    }

    // Format end time as hh:mm
    return `${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(
      2,
      "0"
    )}`;
  }

  const getEventStyle = (start: any, end: any) => {
    const startHour =
      parseInt(start.split(":")[0]) + parseInt(start.split(":")[1]);
    const endHour = startHour + end / 60;
    const top = (startHour - 8) * 4; // Each hour slot has a height of 4rem
    const height = (endHour - startHour) * 4;

    return { top: `${top}rem`, height: `${height}rem` };
  };

  return (
    <div>
      <h1 className="font-poppins font-semibold mt-1 mb-3">Calendar</h1>
      <div className="flex mb-3">
        <div className="w-10"></div>
        <div className="flex flex-grow">
          {staff.map((el:any) => (
            <div
              key={el.firstName}
              className="flex flex-grow flex-col items-center text-sm font-ubuntu font-medium gap-1"
            >
              <img
                className="w-16 h-16 rounded-full"
                src={el.profilePicture}
                alt={el.firstName}
              />
              <h2>
                <i>{el.firstName}</i>
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="w-10"></div>
        <div className="flex flex-grow">
          {staff.map((_:any, index:number) => (
            <div
              className={`h-5 flex flex-grow border-l-2 ${
                staff.length - 1 === index && "border-r-2"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-10">
          {hours.map((hour) => (
            <div key={hour} className={`relative h-16`}>
              <span className="absolute font-bold right-1 -top-2 text-xs">
                {hour}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-grow">
          {staff.map((el:any, index:number) => (
            <div
              key={el.fullName}
              className={`relative flex flex-col flex-grow border-l-2 ${
                index == staff.length - 1 && "border-r-2"
              }`}
            >
              {hours.map((hour, index) => (
                <div
                  key={hour}
                  className={`h-16 border-t-2 ${
                    index == hours.length - 1 && "border-b-2"
                  }`}
                >
                  <div className="h-1/2 border-b-2 border-gray-100">

                  </div>
                </div>
              ))}
              {appointments.filter(el => el.appointmentDate === (new Date()).toISOString().split("T")[0])
                .filter((event) => event.staffId === el.staffId)
                .map((event) => (
                  <div
                    key={event.appointmentId}
                    className={`absolute text-black font-medium text-xs w-full rounded-lg p-1`}
                    style={{
                      ...getEventStyle(
                        event.startTime,
                        event.treatment.duration
                      ),
                      backgroundColor:
                        event.status === "confirmed"
                          ? "#6cd6cd"
                          : event.status === "pending"
                          ? "#ffbe69"
                          : event.status === "completed"
                          ? "#a6dff8"
                          : "#ff9dbc",
                    }}
                  >
                    <div>
                      {event.startTime.split(":").slice(0, 2).join(":") +
                        "-" +
                        calculateEndTime(
                          event.startTime,
                          event.treatment.duration
                        )}
                    </div>
                    <div className="font-bold">
                      {event.customer.firstName + " " + event.customer.lastName}
                    </div>
                    <div>{event.treatment.name}</div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;