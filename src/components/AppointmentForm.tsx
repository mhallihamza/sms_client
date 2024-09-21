import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosArrowDown } from "react-icons/io";
import dayjs, { Dayjs } from 'dayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaAsterisk } from "react-icons/fa6";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const theme = createTheme({
  components: {
    // Customize the DatePicker's toolbar
    // Customize the DatePicker input
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#d1d5db', // Default border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#d1d5db', // Border color on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#d1d5db', // Border color when focused
            borderWidth: '1px'
          },
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          height: '2.7rem'
        },
        input: {
          padding: '10px 14px',
        },
      },
    },
  },
});
interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  profilePicture?: string;
  address?: string;
  isLoyalCustomer?: boolean;
  notes?: string,
  createdAt: string,
  updatedAt: string

}
const AppointmentForm = ({ showForm, setShowForm }: { showForm: boolean, setShowForm: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [appointment, setAppointment] = useState({
    clientId: '',
    staffId: '',
    appointmentDate: '',
    appointmentTime: '',
    serviceId: '',
    notes: '',
    status: 'pending',
    price: '',
    paymentMethod: '',
    paymentCompleted: false,
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
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const handleChange = (e: any) => {
    setAppointment(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
  const handleClick = () => {
    console.log(value);
    if(value) appointment.appointmentDate = value.toISOString();
    console.log(appointment)
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
                  <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">New Appointment</h2>
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
                      <div className="col-span-2 flex flex-col gap-1">
                        <label className='inline-flex items-center' htmlFor='clientId'>Customer<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <div className="relative">
                          <select
                            onChange={handleChange} defaultValue='' required
                            name='clientId' id='clientId'
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-300 rounded pl-3 pr-8 py-2.5 transition duration-300 ease focus:outline-none shadow-sm appearance-none cursor-pointer">
                            <option hidden>Choose a customer</option>
                            {
                              customers && customers?.map((el:any) => (
                                <option key={el.customerId} value={el.customerId}>{`${el.firstName} ${el.lastName}`}</option>
                              ))
                            }
                          </select>
                          <IoIosArrowDown className='h-4 w-4 ml-1 absolute top-3.5 right-2.5 text-slate-700'/>
                        </div>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label className='inline-flex items-center' htmlFor='serviceId'>Service<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <div className="relative">
                          <select
                            onChange={handleChange} defaultValue=''  required
                            name='serviceId' id='serviceId'
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-300 rounded pl-3 pr-8 py-2.5 transition duration-300 ease focus:outline-none shadow-sm appearance-none cursor-pointer">
                            <option hidden>Choose a service</option>
                            <option value="brazil">Brazil</option>
                            <option value="bucharest">Bucharest</option>
                            <option value="london">London</option>
                            <option value="washington">Washington</option>
                          </select>
                          <IoIosArrowDown className='h-4 w-4 ml-1 absolute top-3.5 right-2.5 text-slate-700'/>
                        </div>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label className='inline-flex items-center' htmlFor='staffId'>Staff<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <div className="relative">
                          <select
                            onChange={handleChange} defaultValue='' required
                            name='staffId' id='staffId'
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-300 rounded pl-3 pr-8 py-2.5 transition duration-300 ease focus:outline-none shadow-sm appearance-none cursor-pointer">
                            <option hidden>Choose a staff</option>
                            <option value="brazil">Brazil</option>
                            <option value="bucharest">Bucharest</option>
                            <option value="london">London</option>
                            <option value="washington">Washington</option>
                          </select>
                          <IoIosArrowDown className='h-4 w-4 ml-1 absolute top-3.5 right-2.5 text-slate-700'/>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className='inline-flex items-center' htmlFor='appointmentDate'>Date<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <ThemeProvider theme={theme}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              name='appointmentDate'
                              value={value}
                              onChange={(newValue) => setValue(newValue)}
                            />
                          </LocalizationProvider>
                        </ThemeProvider>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className='inline-flex items-center' htmlFor='appointmentTime'>Time<span><FaAsterisk className='ml-1 h-2 w-2 text-red-500 mb-1' /></span></label>
                        <input required name='appointmentTime' id='appointmentTime' value={appointment.appointmentTime} onChange={handleChange} type='time' className='border border-gray-300 focus:outline-none rounded-[4px] py-2 px-2'></input>
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

export default AppointmentForm;