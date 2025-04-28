import { motion } from "framer-motion";
import "./Achievements.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="achievements-container">
      <h2 className="achievements-heading">Achievements</h2>
      <div className="achievements-list">
        <motion.div
          className="achievement-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h5 className="achievement-title">
            Solved 350+ problems on Data Structure and Algorithms
          </h5>
          <p className="achievement-time">Present</p>
        </motion.div>

        <motion.div
          className="achievement-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h5 className="achievement-title">
            One among Dean’s List - Top 10% students at university
          </h5>
          <p className="achievement-time">Present</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
