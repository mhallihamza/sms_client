import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward, IoIosNotifications, IoMdSettings   } from "react-icons/io";
import { AiFillPrinter } from "react-icons/ai";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import UpcomingAppointments from "./UpcomingAppointments";

function Sidebar() {
  return (
    <div className="flex min-h-screen gap-3 px-3">
      <div className="h-screen sticky z-20 top-0 inset-x-0 w-[15%] py-3">
      <div className="bg-[#f6f8f8] overflow-auto font-medium h-full text-sm border-gray-200 border rounded-lg">
       <img className="h-20 w-20 ml-3 mb-3" src="/images/logo.png"></img>
       <ul>
        <li>
         <NavLink to="/dashboard" className={({isActive}) => isActive ? "bg-[#fbece6] flex items-center gap-4 py-2 pl-6 hover:bg-[#ff5b1a] border-r-2 border-[#ff5b1a]" : "flex items-center hover:bg-[#ff5b1a] gap-4 py-2 pl-6"}>
          <TbLayoutDashboardFilled  className="h-5 w-5"/>
          <span>Dashboard</span>
         </NavLink>
        </li>
        <li>
         <NavLink to="/calender" className={({isActive}) => isActive ? "bg-[#fbece6] hover:bg-[#ff5b1a] flex items-center gap-3 py-2 pl-5 border-r-2 border-[#ff5b1a]" : "flex items-center hover:bg-[#ff5b1a] gap-3 py-2 pl-5"}>
          <img className="h-7 w-7" src="/images/calendar.svg"></img>
          <span>Calender</span>
         </NavLink>
        </li>
        <li>
         <NavLink to="/appointments" className={({isActive}) => isActive ? "bg-[#fbece6] flex items-center hover:bg-[#ff5b1a] gap-3 py-2 pl-5 border-r-2 border-[#ff5b1a]" : "flex items-center hover:bg-[#ff5b1a] gap-3 py-2 pl-5"}>
          <img className="h-7 w-7" src="/images/appointment.svg"></img>
          <span>Appointments</span>
         </NavLink>
        </li>
        <li>
         <NavLink to="/payments" className={({isActive}) => isActive ? "bg-[#fbece6] flex items-center hover:bg-[#ff5b1a] gap-4 py-2 pl-6 border-r-2 border-[#ff5b1a]" : "flex items-center hover:bg-[#ff5b1a] gap-4 py-2 pl-6"}>
          <BiSolidDollarCircle className="h-5 w-5"/>
          <span>Payments</span>
         </NavLink>
        </li>
        <li>
         <NavLink to="/customers" className={({isActive}) => isActive ? "bg-[#fbece6] flex items-center  hover:bg-[#ff5b1a] gap-4 py-2 pl-6 border-r-2 border-[#ff5b1a]" : "flex items-center hover:bg-[#ff5b1a] gap-4 py-2 pl-6"}>
          <FaUserGroup className="h-5 w-5"/>
          <span>Customers</span>
         </NavLink>
        </li>
        <li>
        <NavLink to="/services" className={({isActive}) => isActive ? "bg-[#fbece6] flex items-center gap-3 hover:bg-[#ff5b1a] py-2 pl-6 border-r-2 border-[#ff5b1a]" : "flex items-center hover:bg-[#ff5b1a] gap-3 py-2 pl-6"}>
          <MdMiscellaneousServices className="h-6 w-6"/>
          <span>Services</span>
        </NavLink>
        </li>
        <li>
        <NavLink to="/treatments" className={({isActive}) => isActive ? "bg-[#fbece6] flex items-center gap-4 hover:bg-[#ff5b1a] py-2 pl-6 border-r-2 border-[#ff5b1a]" : "flex items-center hover:bg-[#ff5b1a] gap-4 py-2 pl-6"}>
          <img className="h-5 w-5" src="/images/treatment.svg"></img>
          <span>Treatments</span>
        </NavLink>
        </li>
        <li className="flex items-center gap-4 py-2 pl-7">
          <img className="h-4 w-4" src="/images/customize.svg"></img>
          <span>Customize</span>
        </li>
        <li className="flex items-center gap-3 py-2 pl-7">
          <IoMdSettings className="h-5 w-5"/>
          <span>Settings</span>
        </li>
        <li className="flex items-center gap-4 py-2 pl-7">
          <img className="h-5 w-5" src="/images/logout.svg"></img>
          <span>Log Out</span>
        </li>
       </ul>
       <div className="flex flex-col gap-3 mt-32 mb-4 text-white mx-5">
        <button className="bg-orange-300 rounded py-2">Add Client</button>
        <button className="bg-neutral-900 rounded py-2">Add Hairstylist</button>
       </div>
      </div>
      </div>
      <div className="flex flex-col w-[85%]">
        <div className="flex bg-white z-10 sticky pb-5 pt-3 top-0 inset-x-0 font-medium text-sm justify-between">
          <div className="flex gap-4">
            <button className="bg-[#f6f8f8] border-gray-200 border px-3 py-1 rounded">
              <div className="flex gap-3 items-center">
                <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 500.34"><path d="M127.97 264.15c-36.3-13.14-56.52-33.77-61.8-61.34l229.16 61.62c8.95 1.14 16.69 4.08 22.77 9.53 5.68 5.1 6.1 8.62 9.92 14.17 3.2 4.66 7.62 8.25 14.39 9.77l7.3.34c6.56.32 13.36 1.73 17.99-4.24 3.09-4 3.06-9.97.83-17.33-.33-6.97.71-13.66 3.17-20.07 2.39-6.19 6.12-12.12 11.25-17.76 17.76-16.02 40.25-22.73 70.21-14.69 34.95 8.35 51.72 28.16 58.24 54.42 2.37 17.56-2.41 31.15-12.84 41.61-15.91 15.93-36.48 21.23-58.4 19.34-13.88-1.19-28.21-4.97-43.87-9.51l-55.79-6.81 1.36-2.44-213.89-56.61zm10.16 118.39c2.25 2.25 2.21 5.94-.09 8.23-2.29 2.3-5.98 2.33-8.22.09l-71.04-71.04-9.95 9.95 72.29 72.29c2.47 4.05-2.22 7.75-5.25 7-46.1-18.26-99.36-56.53-112.94-99.91-5.24-16.73-3.85-15.42 7.41-26.69l43.75-43.75c3.87 6.24 8.53 12.11 14.02 17.6 11.46 11.45 26.39 20.95 44.92 28.43l61.45 61.45c2.26 2.26 2.22 5.95-.08 8.26-2.31 2.3-6.01 2.34-8.26.08L95.1 283.5l-9.82 9.82 71.03 71.04c2.26 2.25 2.22 5.95-.08 8.26-2.31 2.3-6 2.34-8.26.08l-71.04-71.03-9.84 9.84 71.04 71.03zm-33.11-194.76 94.42-94.42 18.18 67.62-5.15 5.15 8.94 8.94 6.14 22.83-23.42-23.42-9.83 9.82 37.59 37.59-22.83-6.14-23.11-23.1-9.82 9.82 6.05 6.06-77.16-20.75zM250.37 42.43l32.09-32.09c11.27-11.26 9.96-12.65 26.69-7.41 43.38 13.58 81.65 66.84 99.9 112.94.76 3.03-2.94 7.72-6.99 5.25l-72.29-72.29-8.3 8.3 71.04 71.03c2.25 2.25 2.21 5.94-.08 8.23-2.3 2.29-5.99 2.33-8.23.08l-71.04-71.03-9.86 9.86 71.04 71.03c2.24 2.25 2.21 5.94-.09 8.23-2.29 2.29-5.98 2.33-8.23.08l-71.03-71.03-4.56 4.56c-6.37-12.57-13.86-23.13-22.46-31.72-5.48-5.49-11.35-10.16-17.6-14.02zm48.13 64.37 57.68 57.68c2.26 2.26 2.22 5.96-.08 8.26-2.3 2.31-6 2.35-8.26.09l-43.03-43.03-5.22-19.75c-.27-1.03-.61-2.03-1-2.99l-.09-.26zm13.4 49.78 26.1 26.09c2.24 2.25 2.21 5.94-.09 8.23-2.29 2.29-5.98 2.33-8.23.08l-11.8-11.8-5.98-22.6zm-99.81 155.26c.79 2.08.33 4.55-1.37 6.25-2.29 2.3-5.98 2.33-8.23.09l-12.07-12.07 21.67 5.73zm-48.47-12.83 29.02 29.02c2.25 2.25 2.21 5.94-.09 8.23-2.29 2.29-5.98 2.33-8.23.08l-43.31-43.31 22.61 5.98zm112.2-182.71c-13.15-36.3-33.78-56.51-61.35-61.8l50.93 189.39 47.7 13.31-37.28-140.9zm30.63 206.8c1.38 2.16 2.44 4.67 3.11 7.64l.35 7.31c.31 6.55 1.72 13.35-4.25 17.98-4 3.1-9.97 3.06-17.33.83-6.96-.32-13.66.71-20.06 3.18-6.2 2.39-12.12 6.11-17.76 11.25-16.02 17.76-22.73 40.24-14.7 70.21 8.36 34.95 28.17 51.72 54.43 58.24 17.56 2.37 31.15-2.41 41.6-12.84 15.94-15.91 21.23-36.48 19.35-58.4-1.2-13.89-4.98-28.22-9.52-43.88l-6.6-54.16-2.13-.55-.52.29-.12-.45-25.85-6.65zm-15 57.19c-14.43-3.02-24.95 5.67-30.9 18.08-4.78 9.95-5.6 21.81-2.69 35.46 2.45 11.51 10.21 26.26 20.87 35.12 20.63 17.15 41.03 3.91 47.46-19.03 2.86-10.2 2.61-20.84-1.01-31.95-2.44-7.53-6.22-15.58-11.39-22.35-5.73-7.48-13.14-13.4-22.34-15.33zm1.02-100.46c4.42-4.42 11.58-4.42 16 0s4.42 11.59 0 16c-4.42 4.42-11.58 4.42-16 0-4.42-4.41-4.42-11.58 0-16zm99.49-.04c-3.02-14.43 5.67-24.96 18.07-30.91 9.95-4.77 21.81-5.6 35.46-2.69 11.51 2.46 26.26 10.21 35.12 20.87 17.16 20.63 3.91 41.03-19.03 47.46-10.19 2.86-20.83 2.61-31.95-1-7.52-2.45-15.57-6.23-22.34-11.4-7.49-5.72-13.41-13.14-15.33-22.33z" /></svg>
                <p>Select Salon</p>
                <IoIosArrowDown className="ml-6" />
              </div>
            </button>
            <button className="bg-[#f6f8f8] border-gray-200 border px-3 py-1 rounded">
              <div className="flex gap-3 items-center">
                <p>Working Staff</p>
                <IoIosArrowDown />
              </div>
            </button>
            <div className="flex gap-2">
              <button className="bg-[#f6f8f8] border-gray-200 border rounded px-2">
                <IoIosArrowBack />
              </button>
              <div className="bg-[#f6f8f8] border-gray-200 border flex items-center rounded px-4">Today</div>
              <button className="bg-[#f6f8f8] border-gray-200 border rounded px-2">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button>
             <AiFillPrinter className="h-5 w-5"/>
            </button>
            <button>
             <IoIosNotifications className="h-5 w-5"/>
            </button>
            <div className="border h-full border-gray-200"></div>
            <p>Alex Sharapova</p>
            <img className="h-8 w-8 rounded-full" src="https://sb.kaleidousercontent.com/67418/1920x1281/0e9f02a048/christian-buehner-ditylc26zvi-unsplash.jpg"></img>
          </div>
        </div>
        <div className="flex flex-1 gap-3 pb-3">
          <div className="bg-[#f6f8f8] relative px-4 py-4 w-[75%] rounded-lg font-medium border-gray-200 border">
            <Outlet />
          </div>
          <div className="bg-[#f6f8f8] border border-gray-200 w-[25%] rounded-lg p-4">
            <UpcomingAppointments />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar