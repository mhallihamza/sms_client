import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
function DaySchedule() {
  const times = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];
  const colors = [
    { bg: "#faf2ef", border: "#f97316" },
    { bg: "#eef7f6", border: "#22c7b0" },
    { bg: "#f0f3fa", border: "#3b82f6" },
    { bg: "#faf8ee", border: "#f9d030" },
  ];
  console.log((new Date()).toISOString().slice(0,10));
  //filter(el => el.appointmentDate === (new Date()).toISOString.split("T"))
  const user = useSelector((state: any) => state.user);
  const { data: appointments }: { data: any[] } = useFetch(
    `http://localhost:3000/appointments/details/${user.userId}`
  );
  const newAppointments = appointments
    .filter((el:any) => el.appointmentDate === (new Date()).toISOString().slice(0,10))
  const staff = newAppointments.reduce((acc, el) => {
    const staffId = el.staff.staffId;

    // Check if staff with the same ID already exists in the accumulated array
    if (!acc.some((staff: any) => staff.staffId === staffId)) {
      acc.push({
        ...el.staff,
      });
    }

    return acc;
  }, []);
  const staff_colors = staff.map((el:any, index:any) => ({
    ...el, color: colors[index], 
  }))
  const getEventStyle = (start: any, end: any) => {
    const startHour =
      parseInt(start.split(":")[0]) + parseInt(start.split(":")[1]);
    const endHour = startHour + end/60;
    const top = (startHour - 8) * 2.5; // Each hour slot has a height of 2rem
    const height = (endHour - startHour) * 2.5;

    return { top: `${top}rem`, height: `${height}rem` };
  };
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-poppins font-semibold text-md">Day Schedule</h1>
      <div className="flex items-center justify-between">
        <p className="font-poppins font-normal text-gray-400 text-sm">
          Appointment booking chart
        </p>
        <div className="flex items-center gap-2">
          <button>
            <IoIosArrowBack className="h-4 w-4" />
          </button>
          <button>
            <IoIosArrowForward className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="bg-white border rounded-lg p-4">
        <div className="flex gap-3 font-poppins text-[10px]">
          <div className="flex gap-1 items-center">
            <div className="h-3 w-3 border bg-gray-300 rounded-full"></div>
            <div>Availablity</div>
          </div>
          {staff_colors.map((el: any) => (
            <div key={el.staffId} className="flex gap-1 items-center">
              <div
                className="h-3 w-3 border rounded-full"
                style={{ backgroundColor: el.color.border }}
              ></div>
              <div>{el.firstName}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <div className="flex flex-col text-xs text-gray-400">
            {times.map((el) => (
              <div className="h-10" key={el}>
                {el}
              </div>
            ))}
          </div>
          <div className="flex border border-dashed border-gray-100 flex-grow gap-1">
            {staff_colors.map((el: any) => (
              <div className="relative flex-grow" key={el.staffId}>
                <div className="absolute w-full h-full z-0">
                  {Array.from({ length: 24 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-[1.25rem] w-full border-b border-gray-100"
                    />
                  ))}
                </div>
                {newAppointments
                  .filter(
                    (appointment) => appointment.staff.staffId === el.staffId
                  )
                  .map((event) => (
                    <div
                      key={event.appointmentId}
                      className="absolute bg-opacity-100 border-[2px] left-0 right-0 bg-red-200 rounded-md flex items-center text-xs px-2"
                      style={{
                        ...getEventStyle(
                          event.startTime,
                          event.treatment.duration
                        ),
                        borderColor: el.color.border,
                        backgroundColor: el.color.bg, // Color matches the staff color
                      }}
                    >
                      {event.treatment.name}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaySchedule;
