import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="text-4xl text-violet-600/90 mt-8 mb-2">VaporCast</h1>
        <h2 className="text-xl text-violet-900">Your personal weather app</h2>
      </motion.div>
    </div>
  );
};

export default Hero;
