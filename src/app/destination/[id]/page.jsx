"use client";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useDestinationDetails from "../../hooks/useDestinationDetails";

export default function DestinationDetails() {
  const {
    destination,
    selectedIndex,
    name,
    email,
    people,
    date,
    setSelectedIndex,
    setName,
    setEmail,
    setPeople,
    setDate,
    nextImage,
    prevImage,
    resetForm,
    router,
  } = useDestinationDetails();

  if (!destination)
    return
  <p className="text-center text-gray-500 mt-10">Destination not found</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      ` succses  ${name}\nPeople: ${people}\nDate: ${date}`
    );
    resetForm();
  };

  return (
    <div className="container mx-auto p-6 relative">
      <Toaster position="top-right" reverseOrder={false} />

      <motion.button
        onClick={() => router.push("/")}
        className="absolute top-4 right-4 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiArrowLeft /> Back
      </motion.button>

      <motion.h1
        className="text-4xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {destination.name}
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-hidden">
          {destination.images.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`thumbnail-${idx}`}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${idx === selectedIndex ? "border-blue-500" : "border-transparent"
                }`}
              onClick={() => setSelectedIndex(idx)}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 relative">
          <motion.img
            key={selectedIndex}
            src={destination.images[selectedIndex]}
            alt={destination.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowLeft size={24} />
          </motion.button>
          <motion.button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowRight size={24} />
          </motion.button>
        </div>

        {/* Itinerary */}
        <div className="w-full md:w-1/3 bg-gray-50 p-5 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
          <ul className="list-decimal list-inside space-y-3 text-gray-700">
            {destination.itinerary.map((item, idx) => (
              <motion.li
                key={idx}
                className="bg-white p-3 rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Description */}
      <motion.p
        className="text-gray-700 mb-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {destination.description}
      </motion.p>

      {/* Booking Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg bg-gray-100 p-8 rounded-2xl shadow-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Book Your Trip</h2>

        <label className="block mb-2 font-semibold">Name</label>
        <input
          type="text"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 font-semibold">Number of People</label>
        <input
          type="number"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          min="1"
          required
        />

        <label className="block mb-2 font-semibold">Date</label>
        <input
          type="date"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 font-semibold shadow-lg"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          submit
        </motion.button>
      </motion.form>
    </div>
  );
}
