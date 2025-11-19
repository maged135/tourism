"use client";

import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white p-16 md:p-24 rounded-3xl shadow-2xl flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold text-center drop-shadow-lg"
      >
        أهلا بك في موقع السياحة!
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="mt-4 text-xl md:text-2xl text-center drop-shadow-md"
      >
        استكشف أجمل الوجهات حول العالم
      </motion.p>

      {/* Call-to-action Button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="mt-8 bg-white text-blue-600 font-bold px-10 py-4 rounded-full shadow-lg tracking-wide"
      >
        ابدأ رحلتك الآن
      </motion.button>

      {/* Optional subtle animated shapes/background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[url('/pattern.svg')] bg-repeat"></div>
    </div>
  );
}
