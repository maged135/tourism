"use client";
import DestinationCard from "../components/DestinationCard";
import { motion } from "framer-motion";
import useDestinationSearch from "../hooks/useDestinationSearch";

export default function SearchPage() {
  const {
    search,
    setSearch,
    filterCountry,
    setFilterCountry,
    maxPrice,
    setMaxPrice,
    countries,
    filteredDestinations,
  } = useDestinationSearch();

  return (
 <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-3 rounded-lg flex-1 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-3 rounded-lg flex-1 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={filterCountry}
          onChange={(e) => setFilterCountry(e.target.value)}
        >
          <option value="">All Countries</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <div className="flex-1">
          <label className="block text-sm mb-1">Max Price: ${maxPrice}</label>
          <input
            type="range"
            min="0"
            max="5000"
            step="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 mt-10">
            No destinations match the search
          </p>
        )}
      </motion.div>
    </div>
  );
}
