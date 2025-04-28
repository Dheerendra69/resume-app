import { NAVBAR_TITLE, navOptions } from "../../constants";
import { motion } from "framer-motion";
import "./Navbar.css";

function NavOption(props) {
  return (
    <a href={`#${props.navItem.toLowerCase()}`} className="nav_link">
      <motion.p
        whileHover={{ scale: 1.2, color: "#3498db" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {props.navItem.charAt(0).toUpperCase() + props.navItem.slice(1)}
      </motion.p>
    </a>
  );
}

function Navbar() {
  return (
    <motion.div
      className="navbar_container"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60 }}
    >
      <div className="navbar_left">{NAVBAR_TITLE}</div>

      <div className="navbar_right">
        {navOptions.map((item) => (
          <NavOption key={item} navItem={item} />
        ))}
      </div>
    </motion.div>
  );
}

export default Navbar;
