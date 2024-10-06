import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import StaffForm from "./StaffForm";
import useFetch from "../hooks/useFetch";
export interface IStaff {
    staffId: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    profilePicture?: string;
    position: string;
    gender: 'Male' | 'Female' | 'Other';
    isAvailable: boolean;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  }
function Staff() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const user = useSelector((state:any) => state.user) as any
  const {data, refetch}: {data: IStaff[], refetch : any} = useFetch(`http://localhost:3000/staff/${user.userId}`);
  console.log(data);
  useEffect(() => {
    if (showForm) {
      // Disable scrolling on the body when the form is shown
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling on the body when the form is hidden
      document.body.style.overflow = 'auto';
    }

    // Clean up when the component is unmounted or when showForm changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showForm]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-poppins font-semibold">Staffs</h1>
        <button onClick={() => setShowForm(true)} className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition">
          <span>Add Staff</span>
          <AiOutlinePlus />
        </button>
      </div>
      <div className="mt-3 font-medium text-sm">
        <button className="flex items-center bg-[#f6f8f8] border-gray-200 border px-5 py-1 rounded">
          <span>Filter</span><IoIosArrowForward />
        </button>
      </div>
      <div className="my-4">
        <table className="w-full">
          <thead className="text-xs font-medium font-poppins">
            <tr>
              <th className='px-2'>
                  <input className="h-3 w-3" type='checkbox'></input>
              </th>
              <th className="font-semibold py-3 pl-3 text-left">Photo</th>
              <th className="font-semibold py-3 pl-3 text-left">First Name</th>
              <th className="font-semibold py-3 pl-3 text-left">Last Name</th>
              <th className="font-semibold py-3 pl-3 text-left">Mobile</th>
              <th className="font-semibold py-3 pl-3 text-left">Email</th>
              <th className="font-semibold py-3 pl-3 text-left">Position</th>
              <th className="font-semibold py-3 pl-3 text-left">Status</th>
              <th className="font-semibold py-3 pl-3 text-left"></th>
            </tr>
          </thead>
          <tbody className="text-xs font-medium font-poppins bg-white">
            { data && data.map(el => (
              <tr key={el.staffId} className="border-b-4 border-[#fbfcfc]">
                <td className='text-center'>
                  <input className="h-3 w-3 px-2" type='checkbox'></input>
                </td>
                <td className="pl-3 py-3">
                  <img className="h-9 w-9 rounded-full" src={el.profilePicture}></img>
                </td>
                <td className="pl-3 py-3">{el.firstName}</td>
                <td className="pl-3 py-3">{el.lastName}</td>
                <td className="pl-3 py-3">{el.phoneNumber}</td>
                <td className="pl-3 py-3">{el.email}</td>
                <td className="pl-3 py-3">{el.position}</td>
                <td className="pl-3 py-3">
                  <div className={` text-center px-1 rounded-md ${el.isAvailable ? 'bg-green-400' : 'bg-red-400'}`}>
                     {el.isAvailable ? "Available" : "Unavailable"}
                  </div>
                </td>
                <td>
                <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <StaffForm showForm={showForm} setShowForm={setShowForm} refetch = {refetch}/>
    </div>
  )
}

export default Staff