import "./TechStack.css";
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";
import { techstackRowOne, techstackRowTwo } from "../../constants";
import { motion } from "framer-motion";

function TechStack() {
  return (
    <div className="techstack_container" id="techstack">
      <motion.p
        className="techstack_title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Tech Stack
      </motion.p>

      <div className="techstack_icon_container">
        {techstackRowOne.map(function (element, index) {
          return (
            <motion.div
              key={element.iconName}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <TechStackIconContainer
                title={element.iconName}
                altProperty={element.iconAltProperty}
                image={element.iconImage}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="techstack_icon_container">
        {techstackRowTwo.map(function (element, index) {
          return (
            <motion.div
              key={element.iconName}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <TechStackIconContainer
                title={element.iconName}
                altProperty={element.iconAltProperty}
                image={element.iconImage}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;
