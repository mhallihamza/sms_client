import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaAsterisk } from "react-icons/fa6";
interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  profilePicture?: string;
  address?: string;
  isLoyalCustomer?: boolean;
  notes?: string
}
const CustomerForm = ({ showForm, setShowForm }: { showForm: boolean, setShowForm: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [customer, setCustomer] = useState<ICustomer>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    profilePicture: '',
    address: '',
    isLoyalCustomer: false,
    notes: ''
  });
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data }: { data:ICustomer[] } = await axios('http://localhost:3000/customers/87c0e3a7-ad94-470b-bc89-e65b9ff34c7e');
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(customers);
  const handleChange = (e: any) => {
    setCustomer(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
  const handleClick = () => {
    console.log(customer)
  }

  return (
    <div className={`relative ${showForm ? "" : "hidden"} z-50`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <div className="pointer-events-auto w-screen max-w-lg">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex items-start justify-between border-gray-50 px-3 py-3 border-b-2">
                  <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">New Customer</h2>
                  <div className="flex items-center">
                    <button onClick={(prev) => setShowForm(!prev)} type="button" className="text-gray-400 hover:text-gray-500">
                      <svg className="h-7 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto lg:px-3 py-6 sm:px-6">
                  <form className='font-normal font-poppins'>
                    <div className='grid grid-cols-2 gap-x-3 gap-y-6'>
                      <div className="flex flex-col gap-1">
                        <label className='inline-flex items-center' htmlFor='firstName'>first Name<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <input className='py-2 border border-gray-300 rounded focus:outline-none' required type='text' name='firstName' id='firstName' value={customer.firstName} onChange={handleChange}></input>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label className='inline-flex items-center' htmlFor='lastName'>last Name<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <input className='py-2 border border-gray-300 rounded focus:outline-none' required type='text' name='lastName' id='lastName' value={customer.lastName} onChange={handleChange}></input>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label className='inline-flex items-center' htmlFor='email'>Email<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <input className='py-2 border border-gray-300 rounded focus:outline-none' required type='text' name='email' id='email' value={customer.email}></input>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className='inline-flex items-center' htmlFor='phoneNumber'>Phone<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <input className='py-2 border border-gray-300 rounded focus:outline-none' required name='phoneNumber' id='phoneNumber' value={customer.phoneNumber} onChange={handleChange} type='text'></input>
                      </div>
                      <div className='col-span-2 flex flex-col gap-1'>
                        <label className='inline-flex items-center' htmlFor='address'>Address</label>
                        <input className='py-2 border border-gray-300 rounded focus:outline-none' required type='text' name='address' id='address' value={customer.address}></input>
                      </div>
                      <div className="col-span-2 flex flex-col gap-1">
                        <label htmlFor='notes'>Note</label>
                        <textarea
                          id="notes"
                          name="notes"
                          onChange={handleChange}
                          rows={4}
                          className="border border-gray-300 rounded-md p-2 focus:outline-none"
                          placeholder="Write your notes here..."
                        ></textarea>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='flex justify-end p-3 border-t-2 border-gray-50 shadow-xl text-xs font-poppins'>
                  <div className='flex gap-1'>
                    <button onClick={(prev) => setShowForm(!prev)} className='text-gray-500 rounded-sm border bg-gray-100 px-4 p-3'>CANCEL</button>
                    <button onClick={handleClick} className='text-white rounded-sm bg-orange-400 hover:bg-orange-500 px-4 py-3'>SAVE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;