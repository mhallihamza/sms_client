import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import CustomerForm from "./CustomerForm";
interface ICustomer {
  customerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  profilePicture?: string;
  address?: string;
  isLoyalCustomer?: boolean;
  notes?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date
}
function Customers() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const user = useSelector((state:any) => state.user);
  const {data}: {data: ICustomer[]} = useFetch(`http://localhost:3000/customers/${user.userId}`)
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
        <h1 className="font-poppins font-semibold">Customers</h1>
        <button onClick={() => setShowForm(true)} className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition">
          <span>Add Customer</span>
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
              <th className="font-semibold py-3 pl-3 text-left w-[6rem]">Photo</th>
              <th className="font-semibold py-3 pl-3 text-left">First Name</th>
              <th className="font-semibold py-3 pl-3 text-left">Last Name</th>
              <th className="font-semibold py-3 pl-3 text-left">Mobile</th>
              <th className="font-semibold py-3 pl-3 text-left">Email</th>
              <th className="font-semibold py-3 pl-3 text-left">Loyalty</th>
              <th className="font-semibold py-3 pl-3 text-left"></th>
            </tr>
          </thead>
          <tbody className="text-xs font-medium font-poppins bg-white">
            {data && data.map((customer: ICustomer) => (
              <tr key={customer.customerId} className="border-b-4 border-[#fbfcfc]">
                <td className='text-center'>
                  <input className="h-3 w-3 px-2" type='checkbox'></input>
                </td>
                <td className="pl-3 py-3">
                  <img className="h-9 w-9 rounded-full" src={customer.profilePicture}></img>
                </td>
                <td className="pl-3 py-3">{customer.firstName}</td>
                <td className="pl-3 py-3">{customer.lastName}</td>
                <td className="pl-3 py-3">{customer.phoneNumber}</td>
                <td className="pl-3 py-3">{customer.email}</td>
                <td className="pl-3 py-3">
                  {
                    customer.isLoyalCustomer ? 
                    <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                    </svg>
                    <span className="text-green-600 font-medium">Loyal</span>
                  </div>
                  :
                  <div className="flex items-center">
                  <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13H7v-2h10v2z"></path>
                  </svg>
                  <span className="text-red-600 font-medium">Not Loyal</span>
                </div>
                  }
                  
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
      <CustomerForm showForm={showForm} setShowForm={setShowForm} />
    </div>
  )
}

export default Customers