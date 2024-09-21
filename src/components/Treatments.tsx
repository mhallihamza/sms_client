import { AiOutlinePlus } from "react-icons/ai";

function Treatments() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-semibold font-poppins text-gray-800">Treatments</h1>
        <button className="bg-orange-500 text-white rounded-lg text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-orange-600 transition">
          <span>Add Treatment</span>
          <AiOutlinePlus />
        </button>
      </div>

      {/* Treatments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Treatment Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://skinlogicaesthetics.co.uk/wp-content/uploads/Deep-Pore-first.jpg" alt="Deep Cleaning Facial" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Deep Cleaning Facial</h2>
          <p className="text-sm text-gray-600 mb-2">A thorough facial treatment that cleanses, exfoliates, and rejuvenates the skin.</p>
          <p className="text-sm text-gray-600 mb-2">Service: Skin Care</p>
          <p className="text-sm text-gray-600 mb-2">Price: $70</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Book Now</button>
        </div>

        {/* Treatment Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://cdn.spafinder.com/2016/10/anti-aging-facial.jpg" alt="Anti-Aging Treatment" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Anti-Aging Treatment</h2>
          <p className="text-sm text-gray-600 mb-2">A specialized treatment to reduce signs of aging and enhance skin elasticity.</p>
          <p className="text-sm text-gray-600 mb-2">Service: Skin Care</p>
          <p className="text-sm text-gray-600 mb-2">Price: $90</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Book Now</button>
        </div>

        {/* Treatment Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2021/12/hair-steaming-cat.jpg?fit=680%2C489" alt="Natural Hair Treatment" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Natural Hair Treatment</h2>
          <p className="text-sm text-gray-600 mb-2">A nourishing treatment using natural products to enhance hair health and shine.</p>
          <p className="text-sm text-gray-600 mb-2">Service: Hair</p>
          <p className="text-sm text-gray-600 mb-2">Price: $60</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Book Now</button>
        </div>

        {/* Treatment Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://i.pinimg.com/736x/5d/1b/f6/5d1bf6d4878e2fca6dc46e2ec8345c16.jpg" alt="Haircut & Styling" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Haircut & Styling</h2>
          <p className="text-sm text-gray-600 mb-2">A professional haircut followed by styling to suit your personal style.</p>
          <p className="text-sm text-gray-600 mb-2">Service: Hair</p>
          <p className="text-sm text-gray-600 mb-2">Price: $40</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Book Now</button>
        </div>

        {/* Treatment Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://njnailspa.com/wp-content/uploads/2021/11/NJ-NAILS-SPA-94945-Background2-01.jpg" alt="Nail Spa Treatment" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Nail Spa</h2>
          <p className="text-sm text-gray-600 mb-2">A relaxing nail spa treatment to rejuvenate your hands and feet.</p>
          <p className="text-sm text-gray-600 mb-2">Service: Nails</p>
          <p className="text-sm text-gray-600 mb-2">Price: $45</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Book Now</button>
        </div>

        {/* Treatment Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://theprofessionalmassageacademy.com/wp-content/uploads/2022/02/PMA-How-to-Be-Professional.jpg" alt="Massage Treatment" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Massage Therapy</h2>
          <p className="text-sm text-gray-600 mb-2">A soothing massage to relieve stress and promote relaxation.</p>
          <p className="text-sm text-gray-600 mb-2">Service: Massage</p>
          <p className="text-sm text-gray-600 mb-2">Price: $50</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Book Now</button>
        </div>

        {/* Treatment Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://www.theknot.com/tk-media/images/7c5fde6e-c1ef-4826-8159-f78ea22a9036" alt="Makeup Application" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Professional Makeup</h2>
          <p className="text-sm text-gray-600 mb-2">Expert makeup application for any occasion or event.</p>
          <p className="text-sm text-gray-600 mb-2">Service: Makeup</p>
          <p className="text-sm text-gray-600 mb-2">Price: $70</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Book Now</button>
        </div>

        {/* Treatment Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://irp.cdn-website.com/89307be5/dms3rep/multi/what+is+a+hydrating+facial.jpg" alt="Hydrating Facial" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Hydrating Facial</h2>
          <p className="text-sm text-gray-600 mb-2">A facial treatment designed to deeply hydrate and nourish the skin.</p>
          <p className="text-sm text-gray-600 mb-2">Service: Skin Care</p>
          <p className="text-sm text-gray-600 mb-2">Price: $65</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Book Now</button>
        </div>

        {/* Treatment Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_iAKIkBpO7Oz5KA8tGJDAEBi947xePkUhw&s" alt="Gentlemen's Cut" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Gentlemen's Cut</h2>
          <p className="text-sm text-gray-600 mb-2">A stylish haircut for men that includes a clean shave or trim.</p>
          <p className="text-sm text-gray-600 mb-2">Service: Barber</p>
          <p className="text-sm text-gray-600 mb-2">Price: $35</p>
          <button className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700 transition">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Treatments;