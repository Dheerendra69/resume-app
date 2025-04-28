import "./HomePage.css";
import githubIcon from "../../assets/github.png";
import linkedInIcon from "../../assets/linkedIn.jpeg";
import profile from "../../assets/Profile.jpg";
import { motion } from "framer-motion";
import { description, tagLine } from "../../constants";

function HomePage() {
  return (
    <>
      <motion.div
        className="homepage_container"
        id="about"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="homepage_left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p className="homepage_left_h1">
            <span className="red_color">Hi,</span> my name is
          </motion.p>

          <motion.p
            className="homepage_left_h2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            // transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Dheerendra Pratap Singh
          </motion.p>

          <motion.p
            className="homepage_left_h3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            whileHover={{ scale: 1.1, color: "#e16a54" }}
          >
            {tagLine}
          </motion.p>

          <motion.p
            className="homepage_left_description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="icon_container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.a
              href="https://github.com/Dheerendra69"
              target="_blank"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <img
                src={githubIcon}
                alt="githubIconImage"
                className="homepage_logo"
              />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/dheerendrapratapsingh12/"
              target="_blank"
              whileHover={{ scale: 1.1, rotate: -10 }}
            >
              <img
                src={linkedInIcon}
                alt="linkedInIconImage"
                className="homepage_logo"
              />
            </motion.a>

            <motion.a
              href="mailto:dheerendrapratapsingh1509@gmail.com"
              whileHover={{ scale: 1.05 }}
            >
              <motion.button
                className="homepage_left_button"
                whileHover={{
                  backgroundColor: "#e16a54",
                  color: "white",
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="homepage_right">
          <motion.div
            className="homepage_right_circle"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={profile} alt="Loading..."></img>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default HomePage;
