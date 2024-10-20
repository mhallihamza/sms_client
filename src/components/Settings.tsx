import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authActions";
interface UpdateUser {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  profilePicture?: string;
  role?: string;
}
function Settings() {
  const user = useSelector((state:any) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch() as any;
  const [file, setFile] = useState<any>(null);
  const [updatedUser, setUpdatedUser] = useState<UpdateUser>({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    profilePicture: user.profilePicture,
    country: user.country,
    city: user.city,
    address: user.address
  });
  const [currentPassword, setCurrentPassword] = useState<any>('');
  const [newPassword, setNewPassword] = useState<any>('');
  const [confirmPassword, setConfirmPassword] = useState<any>('')
  const handlePassword = async (e:any) => {
    e.preventDefault();
    if(confirmPassword && newPassword === confirmPassword) {
      const result = await axios.put(`http://localhost:3000/users/${user.userId}`, {password: newPassword, currentPassword})
      if(result.data){
         dispatch(logout());
         navigate("/login");
      }
      else {
        console.log("Your Password not identique")
      }
  }
  }
  const handleChange = (e:any) => {
     setUpdatedUser(prev => ({
      ...prev, [e.target.name] : e.target.value || null
     }))
  }
  const handleClick = async (e:any) => {
    e.preventDefault();
    try {
      if (file) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/djlbs3tzf/image/upload",
          data
        );

        const { url } = uploadRes.data;

        updatedUser.profilePicture = url;
      }

      const result = await axios.put(`http://localhost:3000/users/${user.userId}`, updatedUser);
      if(result) {
        dispatch(logout());
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="font-poppins font-semibold">Settings</h1>
      <div className="grid mt-2 grid-cols-3 gap-2">
        <div>
          <div className="bg-white flex flex-col gap-1 border rounded-lg p-4">
            <img
              className="h-24 w-24 rounded-lg"
              src={
                file
                  ? URL.createObjectURL(file)
                  : user.profilePicture
                  ? user.profilePicture
                  : "https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png"
              }
            ></img>
            <p className="">{`${user.firstName} ${user.lastName}`}</p>
            <label>
              <input
                onChange={(e) => setFile(e.target.files && e.target.files[0])}
                type="file"
                accept="image/*"
                hidden
              />
              <div className="flex w-36 h-9 px-2 py-3 flex-row bg-blue-600 rounded-lg shadow text-white text-sm font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none space-x-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                  <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                </svg>
                <span>Change Picture</span>
              </div>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-5 col-span-2">
          <div className="border rounded-lg bg-white px-5 py-4">
            <h1 className="font-poppins mt-2 font-semibold">
              General Informations
            </h1>
            <form
              onSubmit={handleClick}
              className="mt-2 font-poppins font-normal"
            >
              <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                <div className="flex flex-col gap-1">
                  <label
                    className="inline-flex items-center"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="py-2 px-3 border border-gray-300 rounded focus:outline-none"
                    required
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={updatedUser.firstName}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="inline-flex items-center"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="py-2 px-3 border border-gray-300 rounded focus:outline-none"
                    required
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={updatedUser.lastName}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="inline-flex items-center" htmlFor="country">
                    Country
                  </label>
                  <input
                    className="py-2 px-3 border border-gray-300 rounded focus:outline-none"
                    type="text"
                    name="country"
                    id="country"
                    value={updatedUser.country}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="inline-flex items-center" htmlFor="city">
                    City
                  </label>
                  <input
                    className="py-2 px-3 border border-gray-300 rounded focus:outline-none"
                    type="text"
                    name="city"
                    id="city"
                    value={updatedUser.city}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="inline-flex items-center" htmlFor="address">
                    Address
                  </label>
                  <input
                    className="py-2 px-3 border border-gray-300 rounded focus:outline-none"
                    type="text"
                    name="address"
                    id="address"
                    value={updatedUser.address}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="inline-flex items-center" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="py-2 px-3 border border-gray-300 rounded focus:outline-none"
                    required
                    type="text"
                    name="email"
                    id="email"
                    value={updatedUser.email}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="inline-flex items-center"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    className="py-2 px-3 border border-gray-300 rounded focus:outline-none"
                    required
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={updatedUser.phoneNumber}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <button className="bg-blue-600 rounded-lg my-5 px-5 py-2 text-white">
                Save All
              </button>
            </form>
          </div>
          <div className="border rounded-lg bg-white px-5 py-4">
            <h1 className="font-poppins mt-2 font-semibold">
              Password Information
            </h1>
            <form
              onSubmit={handlePassword}
              className="mt-2 font-poppins font-normal"
            >
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label
                    className="inline-flex items-center"
                    htmlFor="currentPassword"
                  >
                    Current password
                  </label>
                  <input
                    className="py-2 px-3 border border-gray-300 rounded focus:outline-none"
                    required
                    type="text"
                    name="currentPassword"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="inline-flex items-center"
                    htmlFor="newPassword"
                  >
                    New password
                  </label>
                  <input
                    className="py-2 px-3 border border-gray-300 rounded focus:outline-none"
                    required
                    type="text"
                    name="newPassword"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="inline-flex items-center"
                    htmlFor="phoneNumber"
                  >
                    Confirm password
                  </label>
                  <input
                    className={`py-2 px-3 border border-gray-300 rounded focus:outline-none ${
                      !confirmPassword
                        ? ""
                        : newPassword === confirmPassword ? "focus:border-green-500" : "focus:border-red-500"
                    }`}
                    required
                    type="confirmPassword"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <button className="bg-blue-600 rounded-lg my-5 px-5 py-2 text-white">
                Save All
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings