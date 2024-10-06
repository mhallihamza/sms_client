import { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import AppointmentForm from "./AppointmentForm";

function Appointments() {
  const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-poppins font-semibold">Appointments</h1>
          <button onClick={() => setShowForm(true)} className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition">
            <span>Add Appointment</span>
            <AiOutlinePlus />
          </button>
        </div>
        <div className="my-4">
          <table className="w-full">
            <thead className="text-xs font-medium font-poppins">
              <tr>
                <th className='px-2'>
                  <input type='checkbox'></input>
                </th>
                <th className="font-semibold py-3 pl-3 text-left">Id</th>
                <th className="font-semibold py-3 pl-3 text-left">Date</th>
                <th className="font-semibold py-3 pl-3 text-left">Customer</th>
                <th className="font-semibold py-3 pl-3 text-left">Staff</th>
                <th className="font-semibold py-3 pl-3 text-left">Service</th>
                <th className="font-semibold py-3 pl-3 text-left w-28">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-xs font-medium font-poppins">
              <tr className='bg-white border-b-4 border-[#fbfcfc]'>
                <td className='px-2'>
                  <input type='checkbox'></input>
                </td>
                <td className="pl-3 py-3">343</td>
                <td className="pl-3 py-3">Feb 11, 07:00 am</td>
                <td className="pl-3 py-3">
                  <div className="flex gap-3">
                    <img className="h-8 w-8 rounded-full" src="https://t4.ftcdn.net/jpg/05/80/60/33/360_F_580603305_ysEbDBvHCKM9TyzEINHyW614NWLdTe0b.jpg"></img>
                    <div>
                      <div>Randy Torff</div>
                      <div className="text-gray-400">randytorff@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td className="pl-3 py-3">
                  <div className="flex gap-3 items-center">
                    <img className="h-8 w-8 rounded-full" src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"></img>
                    <div>Wilson George</div>
                  </div>
                </td>
                <td className="pl-3 py-3">Oral hygiene</td>
                <td className="px-3 py-3">
                  <div className="bg-green-300 text-green-700 rounded-xl text-center">Accepted</div>
                </td>
                <td>
                <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </button>
                </td>
              </tr>
              <tr className='bg-white border-b-4 border-[#fbfcfc]'>
                <td className='px-2'>
                  <input type='checkbox'></input>
                </td>
                <td className="pl-3 py-3">344</td>
                <td className="pl-3 py-3">Feb 11, 08:15 am</td>
                <td className="pl-3 py-3">
                  <div className="flex gap-3">
                    <img className="h-8 w-8 rounded-full" src="https://www.elitesingles.com.au/wp-content/uploads/sites/77/2020/06/profileprotectionsnap-350x264.jpg"></img>
                    <div>
                      <div>Ahmad Vetrovs</div>
                      <div className="text-gray-400">ahmadvetrovs@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td className="pl-3 py-3">
                  <div className="flex gap-3 items-center">
                    <img className="h-8 w-8 rounded-full" src="https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc"></img>
                    <div>Livia Korsgaard</div>
                  </div>
                </td>
                <td className="pl-3 py-3">Maternity</td>
                <td className="px-3 py-3">
                  <div className="bg-orange-100 text-orange-500 rounded-xl text-center">Pending</div>
                </td>
                <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AppointmentForm showForm={showForm} setShowForm={setShowForm} />
    </div>
  )
}

export default Appointments