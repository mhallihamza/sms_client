import { AiOutlinePlus } from "react-icons/ai";

function Appointments() {
    return (
        <div>
            <div className="flex justify-between items-center text-lg">
                <h1>Appointments</h1>
                <button className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition">
                    <span>Add Service</span>
                    <AiOutlinePlus />
                </button>
            </div>
            <div className="border border-gray-200 rounded-lg my-4">
                <table className="w-full">
                    <thead className="text-xs font-medium font-poppins">
                        <tr>
                            <th className="font-semibold py-3 pl-3 text-left">ID</th>
                            <th className="font-semibold py-3 pl-3 text-left">DATE</th>
                            <th className="font-semibold py-3 pl-3 text-left">CUSTOMER</th>
                            <th className="font-semibold py-3 pl-3 text-left">STAFF</th>
                            <th className="font-semibold py-3 pl-3 text-left">SERVICE</th>
                            <th className="font-semibold py-3 pl-3 text-left w-28">STATUS</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs font-medium font-poppins">
                        <tr>
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
                        </tr>
                        <tr>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Appointments