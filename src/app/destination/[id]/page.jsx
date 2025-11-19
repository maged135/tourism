"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { destinations } from "../../data/destinations";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

export default function DestinationDetails() {
  const params = useParams();
  const router = useRouter();
  const id = parseInt(params.id);
  const destination = destinations.find(d => d.id === id);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");

  if (!destination) return <p>Destination not found</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      `Booking Confirmed!\nDestination: ${destination.name}\nName: ${name}\nPeople: ${people}\nDate: ${date}`
    );
    setName("");
    setEmail("");
    setPeople(1);
    setDate("");
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % destination.images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? destination.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="container mx-auto p-4 relative">
      <button
        onClick={() => router.push("/")}
        className="absolute cursor-pointer top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
      >
        Back
      </button>

      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-3xl font-bold mb-4">{destination.name}</h1>

      {/* Gallery + Itinerary */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Thumbnails Left */}
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-hidden">
          {destination.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumbnail-${index}`}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                index === selectedIndex ? "border-blue-500" : "border-transparent"
              }`}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 relative">
          <motion.img
            key={selectedIndex}
            src={destination.images[selectedIndex]}
            alt={destination.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow"
          >
            ◀
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow"
          >
            ▶
          </button>
        </div>

        {/* Itinerary Right */}
        <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3">Itinerary</h2>
          <ul className="list-decimal list-inside space-y-2 text-gray-700">
            {destination.itinerary.map((item, index) => (
              <li key={index} className="bg-white p-3 rounded-lg shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-6">{destination.description}</p>

      {/* Booking Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-md bg-gray-100 p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4">Book Your Trip</h2>

        <label className="block mb-2 font-semibold">Name</label>
        <input
          type="text"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 font-semibold">Number of People</label>
        <input
          type="number"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          min="1"
          required
        />

        <label className="block mb-2 font-semibold">Date</label>
        <input
          type="date"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
