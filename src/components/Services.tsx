import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlinePlus } from "react-icons/ai";
import ServiceForm from "./ServiceForm";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { BsThreeDots } from "react-icons/bs";

interface IService {
  serviceId: string;
  name: string;
  description: string;
  image: string;
  isActive: boolean;
  minDuration: number;
  maxDuration: number;
  startPrice: number;
  userId: string;
}
function Services() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const user = useSelector((state: any) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);
  const [activeItemId, setActiveItemId] = useState<any>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const { data, refetch }: { data: IService[]; refetch: any } = useFetch(
    `http://localhost:3000/services/${user.userId}`
  );
  console.log(data);
  useEffect(() => {
    if (showForm) {
      // Disable scrolling on the body when the form is shown
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling on the body when the form is hidden
      document.body.style.overflow = "auto";
    }

    // Clean up when the component is unmounted or when showForm changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);
  const toggleMenu = (id: string) => {
    setActiveItemId(id);
    setIsMenuOpen((prev: any) => !prev);
  };
  const handleDelete = async (id: string) => {
    const result = await axios.delete(`http://localhost:3000/services/${id}`);
    if (result.data) {
      setIsMenuOpen((prev: any) => !prev);
      refetch();
      setSuccessMessage("Service successfully deleted!");
    }
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-semibold font-poppins text-gray-800">Services</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition"
        >
          <span>Add Service</span>
          <AiOutlinePlus />
        </button>
      </div>
      {successMessage && (
        <div className="bg-green-500 text-white py-2 px-4 rounded my-2">
          {successMessage}
        </div>
      )}
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data &&
          data.map((service) => (
            <div
              key={service.serviceId}
              className="bg-white px-6 pt-2 pb-4 rounded-lg shadow-lg relative"
            >
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => toggleMenu(service.serviceId)}
                  className="hover:bg-gray-400 px-2 py-1 rounded-md"
                >
                  <BsThreeDots className="h-6 w-6" />
                </button>
              </div>
              {isMenuOpen && service.serviceId === activeItemId && (
                <div className="absolute font-poppins text-sm right-14 top-10 bg-white border w-36 flex flex-col rounded-md">
                  <button className="border-b py-1 rounded-t-md hover:bg-gray-400">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service.serviceId)}
                    className="py-1 rounded-b-md hover:bg-gray-400"
                  >
                    Delete
                  </button>
                </div>
              )}
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {service.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Haircuts, Coloring, Treatments
              </p>
              <p className="text-sm text-gray-600 mb-2">{`Duration: ${service.minDuration}-${service.maxDuration} mins`}</p>
              <p className="text-sm text-gray-600 mb-2">{`Starting Price: $${service.startPrice}`}</p>
              <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          ))}
      </div>
      <ServiceForm
        showForm={showForm}
        setShowForm={setShowForm}
        refetch={refetch}
      />
    </div>
  );
}

export default Services;
