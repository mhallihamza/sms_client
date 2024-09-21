import { AiOutlinePlus } from "react-icons/ai";

function Services() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-lg font-poppins font-semibold text-gray-800">Services</h1>
        <button className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition">
          <span>Add Service</span>
          <AiOutlinePlus />
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAkS7_AbiOiTqNIQznoMtGRgcyf1i9W_PKw&s" alt="Hair Icon" className="w-32 h-32 rounded-full mx-auto mb-6" />
          <h2 className="text-xl font-medium text-center mb-1 text-gray-800">Hair</h2>
          <p className="text-sm text-gray-600 text-center mb-2">Haircuts, Coloring, Treatments</p>
          <p className="text-sm text-gray-600 text-center mb-2">Duration Range: 30-120 mins</p>
          <p className="text-sm text-gray-600 text-center mb-2">Starting Price: $30</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Learn More</button>
        </div>

        {/* Service Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://www.reneecosmetics.in/cdn/shop/files/FrenchNails_PI.jpg?v=1704374117" alt="Nails Icon" className="w-32 h-32 mx-auto mb-6 rounded-full" />
          <h2 className="text-xl font-medium text-center mb-1 text-gray-800">Nails</h2>
          <p className="text-sm text-gray-600 text-center mb-2">Manicures, Pedicures, Spa Nails</p>
          <p className="text-sm text-gray-600 text-center mb-2">Duration Range: 20-90 mins</p>
          <p className="text-sm text-gray-600 text-center mb-2">Starting Price: $20</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Learn More</button>
        </div>

        {/* Service Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeD4lySQGG3PAPOCtbEH_Jakyo0mYig9NB3w&s" alt="Makeup Icon" className="w-32 h-32 mx-auto mb-6 rounded-full" />
          <h2 className="text-xl font-medium text-center mb-1 text-gray-800">Makeup</h2>
          <p className="text-sm text-gray-600 text-center mb-2">Professional Makeup Application</p>
          <p className="text-sm text-gray-600 text-center mb-2">Duration Range: 30-60 mins</p>
          <p className="text-sm text-gray-600 text-center mb-2">Starting Price: $40</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Learn More</button>
        </div>

        {/* Service Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdQiBbxs1JnmanQQ-U78fYhoe_uh6THzoGQ&s" alt="Barber Icon" className="w-32 h-32 mx-auto mb-6 rounded-full" />
          <h2 className="text-xl font-medium text-center mb-1 text-gray-800">Barber</h2>
          <p className="text-sm text-gray-600 text-center mb-2">Haircuts, Shaves, Beard Grooming</p>
          <p className="text-sm text-gray-600 text-center mb-2">Duration Range: 20-60 mins</p>
          <p className="text-sm text-gray-600 text-center mb-2">Starting Price: $25</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Learn More</button>
        </div>

        {/* Service Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vkcPjId9EbQUXcDHxazm3okefU7M5qqyLQ&s" alt="Skin Care Icon" className="w-32 h-32 mx-auto mb-6 rounded-full" />
          <h2 className="text-xl font-medium text-center mb-1 text-gray-800">Skin Care</h2>
          <p className="text-sm text-gray-600 text-center mb-2">Facials, Peels</p>
          <p className="text-sm text-gray-600 text-center mb-2">Duration Range: 30-90 mins</p>
          <p className="text-sm text-gray-600 text-center mb-2">Starting Price: $50</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Learn More</button>
        </div>

        {/* Service Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw23VjrCc6K0dcTUGv_Vsk7cU3rbr8zkvQtA&s" alt="Massage Icon" className="w-32 h-32 mx-auto mb-6 rounded-full" />
          <h2 className="text-xl font-medium text-center mb-1 text-gray-800">Massage</h2>
          <p className="text-sm text-gray-600 text-center mb-2">Relaxation and Healing Treatments</p>
          <p className="text-sm text-gray-600 text-center mb-2">Duration Range: 30-90 mins</p>
          <p className="text-sm text-gray-600 text-center mb-2">Starting Price: $40</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Services;