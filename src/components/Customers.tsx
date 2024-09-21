import { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineTrash } from 'react-icons/hi2';
import { FiEdit2 } from 'react-icons/fi';
import { IoIosArrowForward } from "react-icons/io";
import CustomerForm from "./CustomerForm";

function Customers() {
  const [showForm, setShowForm] = useState<boolean>(false)
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
  const fakeData = [
    {
      id: 1,
      photo: "data:image/jpeg;base64,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",
      memberName: "John Doe",
      mobile: "(555) 123-4567",
      email: "john.doe@example.com",
      status: "Active",
    },
    {
      id: 2,
      photo: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      memberName: "Jane Smith",
      mobile: "(555) 987-6543",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      id: 3,
      photo: "data:image/jpeg;base64,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",
      memberName: "Bob Johnson",
      mobile: "(555) 555-5555",
      email: "bob.johnson@example.com",
      status: "Active",
    },
    {
      id: 4,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TmmvpjabycAZB3h7kCER9OEvOMN6QZtAcQ&usqp=CAU",
      memberName: "Alice Williams",
      mobile: "(555) 789-0123",
      email: "alice.williams@example.com",
      status: "Inactive",
    },
    {
      id: 5,
      photo: "data:image/jpeg;base64,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",
      memberName: "Charlie Brown",
      mobile: "(555) 222-3333",
      email: "charlie.brown@example.com",
      status: "Active",
    },
    {
      id: 6,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0qAmnMWbC15sQsUvTctmq716NzKTHRa7a5nDysMFR6HXfn2WwKDPm64vguBTjXHtweU&usqp=CAU",
      memberName: "Eva Martinez",
      mobile: "(555) 456-7890",
      email: "eva.martinez@example.com",
      status: "Inactive",
    },
    {
      id: 7,
      photo: "https://media.istockphoto.com/id/1083875684/photo/beautiful-black-man.jpg?s=612x612&w=0&k=20&c=kage74zYbWWe12KsPAdHtKsQTIeeerBwlpWEuRRJfqU=",
      memberName: "David Lee",
      mobile: "(555) 111-2222",
      email: "david.lee@example.com",
      status: "Active",
    },
    {
      id: 8,
      photo: "https://media.istockphoto.com/id/1082483364/photo/beautiful-black-man.jpg?s=612x612&w=0&k=20&c=JvdoFnTCHdn4zre-6kjxpDgSCeHaHqtnUirNTGYr2-s=",
      memberName: "Samantha Taylor",
      mobile: "(555) 333-4444",
      email: "samantha.taylor@example.com",
      status: "Inactive",
    },
    {
      id: 9,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGWy2KZ61PE-xd2GmI3jbVPb5o3DTGbhdLtuAdtEHOWPuafhwxsXFgL0rh8EwF76269U&usqp=CAU",
      memberName: "Michael Johnson",
      mobile: "(555) 666-7777",
      email: "michael.johnson@example.com",
      status: "Active",
    },
    {
      id: 10,
      photo: "https://img.freepik.com/premium-photo/studio-portrait-young-african-man-isolated-white-created-with-generative-ai_762026-30181.jpg?w=360",
      memberName: "Sophie Davis",
      mobile: "(555) 444-8888",
      email: "sophie.davis@example.com",
      status: "Inactive",
    },
  ];
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
      <div className="border border-gray-200 rounded-lg my-4">
        <table className="w-full">
          <thead className="text-xs font-medium font-poppins">
            <tr>
              <th className="font-semibold py-3 pl-3 text-left w-[6rem]">Photo</th>
              <th className="font-semibold py-3 pl-3 text-left">Customer name</th>
              <th className="font-semibold py-3 pl-3 text-left">Mobile</th>
              <th className="font-semibold py-3 pl-3 text-left">Email</th>
              <th className="font-semibold py-3 pl-3 text-left">Operations</th>
            </tr>
          </thead>
          <tbody className="text-xs font-medium font-poppins">
            {fakeData.map(user => (
              <tr>
                <td className="pl-3 py-3">
                  <img className="h-9 w-9 rounded-full" src={user.photo}></img>
                </td>
                <td className="pl-3 py-3">{user.memberName}</td>
                <td className="pl-3 py-3">{user.mobile}</td>
                <td className="pl-3 py-3">{user.email}</td>
                <td className="pl-3 py-3 flex justify-center gap-5">
                  <button>
                    <FiEdit2 className='text-orange-400 h-5 w-5' />
                  </button>
                  <button>
                    <HiOutlineTrash className='text-orange-400 h-5 w-5' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CustomerForm showForm={showForm} setShowForm={setShowForm}/>
    </div>
  )
}

export default Customers