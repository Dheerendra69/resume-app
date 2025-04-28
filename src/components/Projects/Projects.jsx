import { motion } from "framer-motion";
import { projectData } from "../../constants";
import ProjectBox from "./ProjectBox/ProjectBox";
import "./Projects.css";
import { useState } from "react";

export default function Projects() {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="projects_container"
    >
      <motion.p
        className="projects_title"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.p>
      <div className={`relative`}>
        <div className="projects_box_container">
          {projectData.map((project) => (
            <ProjectBox
              key={project.title}
              title={project.title}
              image={project.image}
              sentences={project.sentences}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
