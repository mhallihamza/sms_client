import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { IoIosArrowDown } from "react-icons/io";
import { FaAsterisk } from "react-icons/fa6";
interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: 'Male' | 'Female' | 'Other';
  profilePicture?: string;
  address?: string;
  isLoyalCustomer: boolean;
  userId: string;
  notes?: string;
}
const CustomerForm = ({ showForm, setShowForm, refetch }: { showForm: boolean, setShowForm: React.Dispatch<React.SetStateAction<boolean>>, refetch: any }) => {
  const [customer, setCustomer] = useState<ICustomer>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    profilePicture: '',
    gender: 'Other',
    address: '',
    isLoyalCustomer: false,
    notes: '',
    userId: ''
  });
  const [file, setFile] = useState<any>(null);
  const user = useSelector((state:any) => state.user) as any;
  const [formValid, setFormValid] = useState(false);
  const checkFormValidity = () => {
    const { firstName, lastName, email, phoneNumber } = customer;
    // Check if all required fields are filled
    if (firstName && lastName && email && phoneNumber ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };
  const handleChange = (e: any) => {
    console.log(e.target.name)
    if(e.target.name === "isLoyalCustomer") {
      setCustomer(prev => ({
        ...prev, [e.target.name]: Boolean(e.target.value === "True")
      }))
    }
    else {
    setCustomer(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
   checkFormValidity();
  }
  const handleClick = async () => {
     
     try {

       if(file) {
        const data = new FormData();
        data.append("file",file)
        data.append("upload_preset","upload")
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/djlbs3tzf/image/upload",data);
        
        const {url} = uploadRes.data;

        customer.profilePicture =  url;
       }

        const result = await axios.post("http://localhost:3000/customers",{
          firstName: customer.firstName,
          lastName: customer.lastName,
          email: customer.email,
          phoneNumber:  customer.phoneNumber,
          address: customer.address || null,
          profilePicture: customer.profilePicture || null,
          isLoyalCustomer: customer.isLoyalCustomer,
          gender: customer.gender,
          notes: customer.notes || null,
          userId: user.userId
        })
        if(result) refetch()
        console.log(result);
     }
     catch(err){
      console.log(err)
     }
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
                    <div className="flex col-span-2 flex-col items-center gap-2">
                        { file && 
                          <img className='h-20 w-20 rounded-full' src={file ? URL.createObjectURL(file) : ""}></img>
                        }
                        <label>
                          <input type="file" accept="image/*" onChange={(e) => e.target.files && setFile(e.target.files[0])} hidden />
                          <div className="flex w-28 h-9 px-2 flex-col bg-blue-500 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">Choose Image</div>
                        </label>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className='inline-flex items-center' htmlFor='firstName'>first Name<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <input className='py-2 px-3 border border-gray-300 rounded focus:outline-none' required type='text' name='firstName' id='firstName' value={customer.firstName} onChange={handleChange}></input>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label className='inline-flex items-center' htmlFor='lastName'>last Name<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <input className='py-2 px-3 border border-gray-300 rounded focus:outline-none' required type='text' name='lastName' id='lastName' value={customer.lastName} onChange={handleChange}></input>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label className='inline-flex items-center' htmlFor='email'>Email<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <input className='py-2 px-3 border border-gray-300 rounded focus:outline-none' required type='text' name='email' id='email' value={customer.email} onChange={handleChange}></input>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className='inline-flex items-center' htmlFor='phoneNumber'>Phone<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <input className='py-2 px-3 border border-gray-300 rounded focus:outline-none' required name='phoneNumber' id='phoneNumber' value={customer.phoneNumber} onChange={handleChange} type='text'></input>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label className='inline-flex items-center' htmlFor='position'>Loyality<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <div className="relative">
                          <select
                            onChange={handleChange} defaultValue='' required
                            name='isLoyalCustomer' id='isLoyalCustomer'
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-300 rounded pl-3 pr-8 py-2.5 transition duration-300 ease focus:outline-none shadow-sm appearance-none cursor-pointer">
                            <option hidden>Loyality</option>
                            <option value="True">Loyal</option>
                            <option value="False">Not Loyal</option>
                          </select>
                          <IoIosArrowDown className='h-4 w-4 ml-1 absolute top-3.5 right-2.5 text-slate-700' />
                        </div>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label className='inline-flex items-center' htmlFor='gender'>Gender<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <div className="relative">
                          <select
                            onChange={handleChange} defaultValue='' required
                            name='gender' id='gender'
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-300 rounded pl-3 pr-8 py-2.5 transition duration-300 ease focus:outline-none shadow-sm appearance-none cursor-pointer">
                            <option hidden>Gender</option>
                            <option value="Male">Men</option>
                            <option value="Female">Women</option>
                          </select>
                          <IoIosArrowDown className='h-4 w-4 ml-1 absolute top-3.5 right-2.5 text-slate-700' />
                        </div>
                      </div>
                      <div className='flex flex-col col-span-2 gap-1'>
                        <label className='inline-flex items-center' htmlFor='address'>Address<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <input className='py-2 px-3 border border-gray-300 rounded focus:outline-none' required type='text' name='address' id='address' value={customer.address} onChange={handleChange}></input>
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
                    <button disabled={!formValid} onClick={handleClick} className='text-white rounded-sm bg-orange-400 hover:bg-orange-500 px-4 py-3'>SAVE</button>
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