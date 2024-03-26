import React from "react";
import Navbar from "../../components/navbar";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <Navbar />
      <motion.h1 animate={{ x: 20 }} className="text-4xl mb-5 mt-5">
        Experience
      </motion.h1>
      <div className="container mx-auto grid gap-x-8 gap-y-4grid-rows-7 ">
        <motion.div
          className="stacked-divs"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          <motion.div
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="h-40 bg-red-200 mb-5 rounded text-center"
          >
            1 EXP
            
          </motion.div>
          <motion.div
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="h-40 bg-red-200 mb-5 rounded text-center"
          >
            2 EXP
          </motion.div>
          <motion.div
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="h-40 bg-red-200 mb-3 rounded text-center"
          >
            3 EXP
          </motion.div>
          <motion.div
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="h-40 bg-red-200 mb-3 rounded text-center"
          >
            4 EXP
          </motion.div>
          <motion.div
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="h-40 bg-red-200 mb-3 rounded text-center"
          >
            5 EXP
          </motion.div>
          <motion.div
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="h-40 bg-red-200 mb-3 rounded text-center"
          >
            6 EXP
          </motion.div>
          <motion.div
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="h-40 bg-red-200 mb-3 rounded text-center"
          >
            7 EXP
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
