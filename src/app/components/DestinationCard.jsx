"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function DestinationCard({ destination }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/destination/${destination.id}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="rounded-lg overflow-hidden shadow-lg bg-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img
          src={destination.images[0]}
          alt={destination.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-500 bg-opacity-80 text-white px-3 py-1 rounded-md font-semibold">
          ${destination.price}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{destination.name}</h2>
        <p className="text-gray-600">{destination.country}</p>
        <p className="text-gray-800 mt-1">{destination.duration}</p>
        <p className="text-gray-800 mt-1">{destination.description}</p>
        <button
          className="mt-3 w-full bg-blue-500 text-white py-2 cursor-pointer rounded-md hover:bg-blue-600 transition"
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
}
