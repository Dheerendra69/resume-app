import { motion } from "framer-motion";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-heading">Education</h2>
      <div className="education-grid">
        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="card-content">
            <h5 className="card-title">Lovely Professional University</h5>
            <h6 className="card-subtitle">Phagwara, Punjab</h6>
            <p className="card-text">
              <strong>
                Bachelor of Technology - Computer Science and Engineering
              </strong>
              <br />
              CGPA: <span className="badge-success">8.3</span>
              <br />
              August 2022 – August 2026
            </p>
          </div>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="card-content">
            <h5 className="card-title">Central Public School</h5>
            <h6 className="card-subtitle">Azamgarh, Uttar Pradesh</h6>
            <p className="card-text">
              <strong>Intermediate</strong>
              <br />
              Percentage: <span className="badge-primary">88%</span>
              <br />
              April 2019 – March 2021
            </p>
          </div>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="card-content">
            <h5 className="card-title">Central Public School</h5>
            <h6 className="card-subtitle">Azamgarh, Uttar Pradesh</h6>
            <p className="card-text">
              <strong>Matriculation</strong>
              <br />
              Percentage: <span className="badge-primary">90%</span>
              <br />
              April 2017 – March 2019
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
