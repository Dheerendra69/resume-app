import { motion } from "framer-motion";
import "./ProjectBox.css";

export default function ProjectBox({
  image,
  title,
  sentences,
  link,
  onShowMore,
}) {
  return (
    <motion.div
      className="project_box_container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
    >
      <div className="project_box_image_container">
        <img src={image} alt={title} />
      </div>

      <div className="project_box_description_container">
        <div className="project_box_title">{title}</div>
        <div className="project_box_sentences_container">
          {sentences.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </div>

        <p className="project_box_link">
          <span>Link</span>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </p>
        {/* <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onShowMore}
        >
          Show More
        </button> */}
      </div>
    </motion.div>
  );
}
