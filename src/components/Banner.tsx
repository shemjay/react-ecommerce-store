import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "🔥 Big Discounts This Week! Up to 50% Off Everything!",
    "🚀 New Arrivals Just Dropped! – Check Them Out Now!",
    "🎉 Limited-Time Deals – Don't Miss Out!",
    "🛍️ Shop the Latest Trends Before They're Gone!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-blue-600 text-white text-center py-4 m-2">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className="text-lg md:text-2xl font-semibold"
      >
        {slides[currentIndex]}
      </motion.div>
    </div>
  );
};

export default Banner;
