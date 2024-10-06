import { AiOutlinePlus } from "react-icons/ai";

function Services() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-semibold font-poppins text-gray-800">Services</h1>
        <button className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition">
          <span>Add Service</span>
          <AiOutlinePlus />
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAkS7_AbiOiTqNIQznoMtGRgcyf1i9W_PKw&s"
            alt="Hair Service"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Hair</h2>
          <p className="text-sm text-gray-600 mb-2">
            Haircuts, Coloring, Treatments
          </p>
          <p className="text-sm text-gray-600 mb-2">Duration: 30-120 mins</p>
          <p className="text-sm text-gray-600 mb-2">Starting Price: $30</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Service Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://www.reneecosmetics.in/cdn/shop/files/FrenchNails_PI.jpg?v=1704374117"
            alt="Nails Service"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Nails</h2>
          <p className="text-sm text-gray-600 mb-2">
            Manicures, Pedicures, Nail Art
          </p>
          <p className="text-sm text-gray-600 mb-2">Duration: 20-90 mins</p>
          <p className="text-sm text-gray-600 mb-2">Starting Price: $20</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Service Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://media.self.com/photos/5d04656eb05b1b9223deeb9b/4:3/w_2560%2Cc_limit/GettyImages-910269622.jpg"
            alt="Skin Care Service"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Skin Care</h2>
          <p className="text-sm text-gray-600 mb-2">
            Facials, Exfoliation, Hydration
          </p>
          <p className="text-sm text-gray-600 mb-2">Duration: 45-90 mins</p>
          <p className="text-sm text-gray-600 mb-2">Starting Price: $50</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;