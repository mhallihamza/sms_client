import { useState } from "react";
import CalendarComponent from "./CalenderApp"
import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
function UpcomingAppointments() {
  const  user  = useSelector((state:any) => state.user);
    const [selectedDate, setSelectedDate] = useState(new Date());
  let { data: appointments }: { data: any[] } = useFetch(
    `${import.meta.env.VITE_API_URL}/appointments/details/${user.userId}`
  );
  const { data: treatments }: { data: any[] } = useFetch(
    `${import.meta.env.VITE_API_URL}/treatments/${user.userId}`
  );
  appointments = appointments.filter(
    (appointment) =>
      appointment.appointmentDate === selectedDate.toISOString().split("T")[0]
  );
  return (
    <div className="text-black">
      <div className="p-4 border-b border-gray-100">
        <h1 className="font-poppins font-semibold text-sm">
          Upcoming Appointments
        </h1>
      </div>
      <div className="p-4 border-b border-gray-100">
        <CalendarComponent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-2">
          {appointments &&
            appointments.map((appointment) => (
              <div
                key={appointment.appointmentId}
                className="border rounded-xl bg-white px-2 py-2 flex gap-2"
              >
                <img
                  className="h-14 w-12 rounded-lg"
                  src={appointment.customer.profilePicture}
                ></img>
                <div className="flex flex-col gap-1">
                  <h1 className="font-poppins font-semibold text-sm">{`${appointment.customer.firstName} ${appointment.customer.lastName}`}</h1>
                  <p className="text-xs font-medium font-poppins text-gray-400">
                    {
                      treatments.find(
                        (el) => el.treatmentId === appointment.treatmentId
                      )?.name
                    }
                  </p>
                  <div className="text-xs font-medium font-poppins text-gray-400">
                    10:00 - 11:00
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingAppointments