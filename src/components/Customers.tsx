import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoCheckboxOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import ItemWithMenu from "./ItemWithMenu";
import useFetch from "../hooks/useFetch";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
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
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedCustomers, setSelectedCustomers] = useState<any>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);
  const [activeItemId, setActiveItemId] = useState<any>(null);
  const [filterAppointments, setFilterAppointments] = useState<any>([]);
  const numbers = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, refetch }: { data: ICustomer[]; refetch: any } = useFetch(
    `${import.meta.env.VITE_API_URL}/customers/${user.userId}`
  );
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
  useEffect(() => {
    setFilterAppointments(
      data.slice((currentPage - 1) * numbers, numbers * currentPage)
    );
    console.log(filterAppointments);
  }, [data, currentPage]);
  const handlePrev = () => {
    setCurrentPage((prev) => (prev -= 1));
  };
  const handleNext = () => {
    setCurrentPage((prev) => (prev += 1));
    console.log(currentPage);
  };
  const toggleMenu = (id:string) => {
   setActiveItemId(id);
   setIsMenuOpen((prev:any) => !prev)
  }
  const handleCheckboxChange = (event: any) => {
    const { value, checked } = event.target;

    if (checked) {
      // Add to the selectedPayments array if checked
      setSelectedCustomers([...selectedCustomers, value]);
    } else {
      // Remove from the selectedPayments array if unchecked
      setSelectedCustomers(
        selectedCustomers.filter((item: any) => item !== value)
      );
    }

    console.log(selectedCustomers);
  };
  const handleSelectAllChange = (event: any) => {
    const { checked } = event.target;
    setSelectAll(checked);

    if (checked) {
      // If "Select All" is checked, add all payment types to selectedPayments
      setSelectedCustomers(data.map((el) => el.customerId));
    } else {
      // If "Select All" is unchecked, clear all selected payments
      setSelectedCustomers([]);
    }
  };
  const handleDelete = async (id:string) => {
    const result = await axios.delete(
      `${import.meta.env.VITE_API_URL}/customers/${id}`
    );
    if(result.data) {
      setIsMenuOpen((prev: any) => !prev);
      refetch();
      setSuccessMessage("Customer successfully deleted!");
    }
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-poppins font-semibold">Customers</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition"
        >
          <span>Add Customer</span>
          <AiOutlinePlus />
        </button>
      </div>
      {successMessage && (
        <div className="bg-green-500 text-white py-2 px-4 rounded my-2">
          {successMessage}
        </div>
      )}
      <div className="mt-3 font-medium text-sm">
        <button className="flex items-center bg-[#f6f8f8] border-gray-200 border px-5 py-1 rounded">
          <span>Filter</span>
          <IoIosArrowForward />
        </button>
      </div>
      <div className="my-4 relative">
        <table className="w-full">
          <thead className="text-xs font-medium font-poppins">
            <tr>
              <th className="px-2">
                <input
                  className="h-3 w-3"
                  checked={selectAll}
                  type="checkbox"
                  onChange={handleSelectAllChange}
                ></input>
              </th>
              <th className="font-semibold py-3 pl-3 text-left w-[6rem]">
                Photo
              </th>
              <th className="font-semibold py-3 pl-3 text-left">First Name</th>
              <th className="font-semibold py-3 pl-3 text-left">Last Name</th>
              <th className="font-semibold py-3 pl-3 text-left">Mobile</th>
              <th className="font-semibold py-3 pl-3 text-left">Email</th>
              <th className="font-semibold py-3 pl-3 text-left">Loyalty</th>
              <th className="font-semibold py-3 pl-3 text-left"></th>
            </tr>
          </thead>
          <tbody className="text-xs font-medium font-poppins bg-white">
            {data &&
              data.map((customer: ICustomer) => (
                <tr
                  key={customer.customerId}
                  className={`${
                    selectedCustomers.includes(customer.customerId)
                      ? "bg-slate-100"
                      : "bg-white"
                  } border-b-4 border-[#fbfcfc]`}
                >
                  <td className="text-center">
                    <input
                      className="h-3 w-3 px-2"
                      type="checkbox"
                      value={customer.customerId}
                      checked={selectedCustomers.includes(customer.customerId)}
                      onChange={handleCheckboxChange}
                    ></input>
                  </td>
                  <td className="pl-3 py-3">
                    <img
                      className="h-9 w-9 rounded-full"
                      src={
                        customer.profilePicture ||
                        "https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png"
                      }
                    ></img>
                  </td>
                  <td className="pl-3 py-3">{customer.firstName}</td>
                  <td className="pl-3 py-3">{customer.lastName}</td>
                  <td className="pl-3 py-3">{customer.phoneNumber}</td>
                  <td className="pl-3 py-3">{customer.email}</td>
                  <td className="pl-3 py-3 z-10">
                    {customer.isLoyalCustomer ? (
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                        </svg>
                        <span className="text-green-600 font-medium">
                          Loyal
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-red-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13H7v-2h10v2z"></path>
                        </svg>
                        <span className="text-red-600 font-medium">
                          Not Loyal
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="relative">
                    <button
                      onClick={() => toggleMenu(customer.customerId)}
                      className="text-gray-600 hover:text-gray-900 p-2 rounded-full focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>
                    {isMenuOpen && customer.customerId === activeItemId && (
                      <div className="absolute right-6 z-10">
                        <ItemWithMenu
                          itemId={customer.customerId}
                          handleDelete={(id: any) => handleDelete(id)}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {selectedCustomers.length > 0 && (
          <div className="rounded-lg bg-white font-poppins text-sm absolute right-1/2 bottom-1 translate-x-1/2 border px-2 py-1 flex gap-2">
            <div className="flex border-r pr-5 py-1 items-center gap-1">
              <IoCheckboxOutline className="h-5 w-5 text-orange-500" />
              <p>{`${selectedCustomers.length} Items`}</p>
            </div>
            <button className="hover:bg-gray-200 flex gap-1 items-center rounded-md px-2">
              <AiOutlineDelete className="h-4 w-4" />
              <span>Remove</span>
            </button>
          </div>
        )}
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
            { length: Math.ceil(data.length / numbers) },
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
          disabled={currentPage * numbers >= data.length}
          onClick={handleNext}
          className="bg-white flex items-center gap-1 px-2 py-1 border rounded-md"
        >
          <span>Next</span>
          <IoIosArrowForward />
        </button>
      </div>
      <CustomerForm
        showForm={showForm}
        setShowForm={setShowForm}
        refetch={refetch}
      />
    </div>
  );
}

export default Customers