import { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import TreatmentForm from "./TreatmentForm";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";

interface ITreatment {
  treatmentId: string;
  name: string;
  description: string;
  image: string;
  price: number;
  isActive: boolean;
  duration: number;
  serviceId: string;
  userId: string
}

function Treatments() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const user = useSelector((state:any) => state.user);
  const {data: services}: {data: any[]} = useFetch(`http://localhost:3000/services/${user.userId}`)
  const {data:treatments, refetch}: {data: ITreatment[], refetch: any} = useFetch(`http://localhost:3000/treatments/${user.userId}`)

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
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-semibold font-poppins text-gray-800">Treatments</h1>
        <button onClick={() => setShowForm(true)} className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition">
          <span>Add Treatment</span>
          <AiOutlinePlus />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          treatments && treatments.map((treatment) => (
            <div key={treatment.treatmentId} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={treatment.image} alt={treatment.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{treatment.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{treatment.description}</p>
            <p className="text-sm text-gray-600 mb-2">{`Service: ${services.find(el => el.serviceId === treatment.serviceId)?.name}`}</p>
            <p className="text-sm text-gray-600 mb-2">{`Price: $${treatment.price}`}</p>
            <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Book Now</button>
          </div>
          ))
        }
      </div>
      <TreatmentForm showForm={showForm} setShowForm={setShowForm} refetch={refetch}/>
    </div>
  );
}

export default Treatments;