import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import { useSelector } from 'react-redux';
import ItemWithMenu from "./ItemWithMenu";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import AppointmentForm from "./AppointmentForm";
import axios from 'axios';

function Appointments() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const user = useSelector((state:any) => state.user);
  const [successMessage, setSuccessMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);
  const [activeItemId, setActiveItemId] = useState<any>(null);
  const [filterAppointments, setFilterAppointments] = useState<any>([]);
  const numbers = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  function formatTime(time:any) {
    return time.split(':').slice(0, 2).join(':');
  }
  const {data:appointments, refetch}: {data: any[], refetch: any} = useFetch(`http://localhost:3000/appointments/details/${user.userId}`)
  const {data:staff}: {data: any[]} = useFetch(`http://localhost:3000/staff/${user.userId}`)
  const {data:services}: {data: any[]} = useFetch(`http://localhost:3000/services/${user.userId}`)
  useEffect(() => {
    if (showForm) {
      // Disable scrolling on the body when the form is shown
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling on the body when the form is hidden
      document.body.style.overflow = "auto";
    }

    // Clean up when the component is unmounted or when showForm changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);
  useEffect(() => {
    setFilterAppointments(appointments.slice((currentPage-1)*numbers, numbers*currentPage));
    console.log(filterAppointments);
  }, [appointments, currentPage]);
  const handlePrev = () => {
   setCurrentPage(prev => prev -= 1)
  }
  const handleNext = () => {
    setCurrentPage(prev => prev += 1)
    console.log(currentPage)
  }
  const toggleMenu = (id: string) => {
    setActiveItemId(id);
    setIsMenuOpen((prev: any) => !prev);
  };
  const handleDelete = async (id:string) => {
    const result = await axios.delete(`http://localhost:3000/appointments/${id}`);
    if(result.data) {
      setIsMenuOpen((prev: any) => !prev);
      refetch();
      setSuccessMessage("Appointment successfully deleted!");
    }
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-poppins font-semibold">Appointments</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition"
          >
            <span>Add Appointment</span>
            <AiOutlinePlus />
          </button>
        </div>
        {successMessage && (
          <div className="bg-green-500 text-white py-2 px-4 rounded my-2">
            {successMessage}
          </div>
        )}
        <div className="my-4">
          <table className="w-full">
            <thead className="text-xs font-medium font-poppins">
              <tr>
                <th className="px-2">
                  <input type="checkbox"></input>
                </th>
                <th className="font-semibold py-3 pl-3 text-left">Date</th>
                <th className="font-semibold py-3 pl-3 text-left">Customer</th>
                <th className="font-semibold py-3 pl-3 text-left">Staff</th>
                <th className="font-semibold py-3 pl-3 text-left">Service</th>
                <th className="font-semibold py-3 pl-3 text-left w-28">
                  Status
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-xs font-medium font-poppins">
              {filterAppointments &&
                filterAppointments.map((appointment: any) => (
                  <tr
                    key={appointment.appointmentId}
                    className="bg-white border-b-4 border-[#fbfcfc]"
                  >
                    <td className="px-2">
                      <input type="checkbox"></input>
                    </td>
                    <td className="pl-3 py-3">{`${
                      months[new Date(appointment.appointmentDate).getMonth()]
                    } ${new Date(
                      appointment.appointmentDate
                    ).getDate()}, ${formatTime(appointment.startTime)} am`}</td>
                    <td className="pl-3 py-3">
                      <div className="flex gap-3">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={appointment.customer.profilePicture}
                        ></img>
                        <div>
                          <div>{`${appointment.customer.firstName} ${appointment.customer.lastName}`}</div>
                          <div className="text-gray-400">
                            {appointment.customer.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="pl-3 py-3">
                      <div className="flex gap-3 items-center">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={
                            staff.find(
                              (el) => el.staffId === appointment.staffId
                            )?.profilePicture
                          }
                        ></img>
                        <div>{`${
                          staff.find((el) => el.staffId === appointment.staffId)
                            ?.firstName
                        } ${
                          staff.find((el) => el.staffId === appointment.staffId)
                            ?.lastName
                        }`}</div>
                      </div>
                    </td>
                    <td className="pl-3 py-3">
                      {
                        services.find(
                          (el) => el.serviceId === appointment.serviceId
                        )?.name
                      }
                    </td>
                    <td className="px-3 py-3">
                      <div
                        className={`${
                          appointment.status === "confirmed"
                            ? "bg-green-300 text-green-700"
                            : appointment.status === "pending"
                            ? "bg-orange-100 text-orange-500"
                            : appointment.status === "completed"
                            ? "bg-blue-300 text-blue-700"
                            : "bg-red-300 text-red-700"
                        }  rounded-xl text-center`}
                      >
                        {appointment.status}
                      </div>
                    </td>
                    <td className="relative">
                      <button
                        onClick={() => toggleMenu(appointment.appointmentId)}
                        className="text-gray-600 hover:text-gray-900 p-2 rounded-full focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </button>
                      {isMenuOpen &&
                        appointment.appointmentId === activeItemId && (
                          <div className="absolute right-6 z-50">
                            <ItemWithMenu
                              item={appointment}
                              handleDelete={(id: any) => handleDelete(id)}
                            />
                          </div>
                        )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between font-poppins text-sm">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="bg-white flex items-center gap-1 px-2 py-1 border rounded-md"
          >
            <IoIosArrowBack />
            <span>Previous</span>
          </button>
          <div className="flex items-center gap-2">
            {Array.from(
              { length: Math.ceil(appointments.length / numbers) },
              (_, index) => index + 1
            ).map((el) => (
              <button
                className={`${
                  currentPage === el ? "bg-gray-300" : "bg-white"
                } w-8 py-1 rounded-md border`}
                onClick={() => setCurrentPage(el)}
              >
                {el}
              </button>
            ))}
          </div>
          <button
            disabled={currentPage * numbers >= appointments.length}
            onClick={handleNext}
            className="bg-white flex items-center gap-1 px-2 py-1 border rounded-md"
          >
            <span>Next</span>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <AppointmentForm
        showForm={showForm}
        setShowForm={setShowForm}
        refetch={refetch}
      />
    </div>
  );
}

export default Appointments