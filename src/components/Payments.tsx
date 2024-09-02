import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineTrash } from 'react-icons/hi2';
import { FiEdit2 } from 'react-icons/fi';

function Appointments() {
    return (
        <div>
            <div className="flex justify-between items-center text-lg">
                <h1>Customers Payments</h1>
                <button className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition">
                    <span>Add Service</span>
                    <AiOutlinePlus />
                </button>
            </div>
            <div className="border border-gray-200 rounded-lg my-4">
                <table className="w-full">
                    <thead className="text-xs font-medium font-poppins">
                        <tr>
                            <th className="font-semibold py-3 pl-3 text-left">INVOICE ID</th>
                            <th className="font-semibold py-3 pl-3 text-left">DATE</th>
                            <th className="font-semibold py-3 pl-3 text-left">CUSTOMER</th>
                            <th className="font-semibold py-3 pl-3 text-left">PAYMENT METHOD</th>
                            <th className="font-semibold py-3 pl-3 text-left">AMOUNT</th>
                            <th className="font-semibold py-3 pl-3 text-left w-28">ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs font-medium font-poppins">
                        <tr>
                            <td className="pl-3 py-3">ID: 39635</td>
                            <td className="pl-3 py-3">11 Feb 2024</td>
                            <td className="pl-3 py-3">Kristin Watson</td>
                            <td className="pl-3 py-3">Card</td>
                            <td className="pl-3 py-3">dhs 200</td>
                            <td className="px-3 py-3 flex justify-center gap-5">
                                <button>
                                    <FiEdit2 className='text-orange-400 h-5 w-5' />
                                </button>
                                <button>
                                    <HiOutlineTrash className='text-orange-400 h-5 w-5' />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="pl-3 py-3">ID: 22739</td>
                            <td className="pl-3 py-3">12 Feb 2024</td>
                            <td className="pl-3 py-3">Cody Fisher</td>
                            <td className="pl-3 py-3">Card</td>
                            <td className="pl-3 py-3">dhs 200</td>
                            <td className="px-3 py-3 flex justify-center gap-5">
                                <button>
                                    <FiEdit2 className='text-orange-400 h-5 w-5' />
                                </button>
                                <button>
                                    <HiOutlineTrash className='text-orange-400 h-5 w-5' />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Appointments