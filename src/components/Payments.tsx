import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AppointmentForm from "./AppointmentForm";
function Appointments() {
    const [showForm, setShowForm] = useState<boolean>(false);
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="font-poppins font-semibold">Customers Payments</h1>
                <button onClick={() => setShowForm(true)} className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition">
                    <span>Add Payment</span>
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
                            <th className="font-semibold py-3 pl-3 text-left">INVOICE ID</th>
                            <th className="font-semibold py-3 pl-3 text-left">DATE</th>
                            <th className="font-semibold py-3 pl-3 text-left">CUSTOMER</th>
                            <th className="font-semibold py-3 pl-3 text-left">PAYMENT METHOD</th>
                            <th className="font-semibold py-3 pl-3 text-left">AMOUNT</th>
                            <th className="font-semibold py-3 pl-3 text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="text-xs font-medium font-poppins bg-white">
                        <tr className='border-b-4 border-[#fbfcfc]'>
                            <td className='text-center'>
                                <input type='checkbox'></input>
                            </td>
                            <td className="pl-3 py-3">ID: 39635</td>
                            <td className="pl-3 py-3">11 Feb 2024</td>
                            <td className="pl-3 py-3">Kristin Watson</td>
                            <td className="pl-3 py-3">Card</td>
                            <td className="pl-3 py-3">dhs 200</td>
                            <td>
                                <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='px-2 text-center'>
                                <input type='checkbox'></input>
                            </td>
                            <td className="pl-3 py-3">ID: 22739</td>
                            <td className="pl-3 py-3">12 Feb 2024</td>
                            <td className="pl-3 py-3">Cody Fisher</td>
                            <td className="pl-3 py-3">Card</td>
                            <td className="pl-3 py-3">dhs 200</td>
                            <td>
                                <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <AppointmentForm showForm={showForm} setShowForm={setShowForm} />
        </div>
    )
}

export default Appointments