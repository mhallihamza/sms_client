import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AppointmentForm from "./AppointmentForm";
function Appointments() {
    const [showForm, setShowForm] = useState<boolean>(false);
    return (
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-poppins font-semibold">Customers Payments</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition"
          >
            <span>Add Payment</span>
            <AiOutlinePlus />
          </button>
        </div>
        <div className="my-4">
          <table className="w-full">
            <thead className="text-xs font-medium font-poppins">
              <tr>
                <th className="px-2">
                  <input type="checkbox"></input>
                </th>
                <th className="font-semibold py-3 pl-3 text-left">Date</th>
                <th className="font-semibold py-3 pl-3 text-left">Customer</th>
                <th className="font-semibold py-3 pl-3 text-left">
                  Payment Method
                </th>
                <th className="font-semibold py-3 pl-3 text-left">Amount</th>
                <th className="font-semibold py-3 pl-3 text-left">Status</th>
                <th className="font-semibold py-3 pl-3 text-left"></th>
              </tr>
            </thead>
            <tbody className="text-xs font-medium font-poppins bg-white">
              <tr className="border-b-4 border-[#fbfcfc]">
                <td className="text-center">
                  <input type="checkbox"></input>
                </td>
                <td className="pl-3 py-3">11 Feb 2024</td>
                <td className="pl-3 py-3">Kristin Watson</td>
                <td className="pl-3 py-3">Card</td>
                <td className="pl-3 py-3">dhs 200</td>
                <td className="flex items-center py-3 pl-3 gap-1">
                  <div className="bg-green-600 h-3 w-3 rounded-full"></div>
                  <div className="text-green-500">Paid</div>
                </td>
                <td>
                  <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-2 text-center">
                  <input type="checkbox"></input>
                </td>
                <td className="pl-3 py-3">12 Feb 2024</td>
                <td className="pl-3 py-3">Cody Fisher</td>
                <td className="pl-3 py-3">Card</td>
                <td className="pl-3 py-3">dhs 200</td>
                <td className="flex items-center py-3 pl-3 gap-1">
                  <div className="bg-red-600 h-3 w-3 rounded-full"></div>
                  <div className="text-red-500">Failed</div>
                </td>
                <td>
                  <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <AppointmentForm
          showForm={showForm}
          setShowForm={setShowForm}
          refetch={null}
        />
      </div>
    );
}

export default Appointments