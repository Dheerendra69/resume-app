import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./ProjectBox.css";

export default function ProjectBox({ image, title, sentences, link }) {
  // State to toggle the visibility of the sentences
  const [showMore, setShowMore] = useState(false);

  const sentencesRef = useRef(null);

  // Function to handle button click
  const handleViewMore = () => {
    setShowMore((prev) => {
      // If we are showing more, we scroll to the sentences container
      if (!prev && sentencesRef.current) {
        sentencesRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      return !prev;
    });
  };

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

      <div
        className={`project_box_description_container ${
          showMore ? "expanded" : ""
        }`}
      >
        <div className="project_box_title">{title}</div>

        {/* Conditional rendering for the sentences */}
        {showMore && (
          <div ref={sentencesRef} className="project_box_sentences_container">
            {sentences.map((sentence, index) => (
              <p key={index}>{sentence}</p>
            ))}
          </div>
        )}

        <p className="project_box_link">
          <span>Link</span>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </p>

        {/* Button to toggle the visibility */}
        <button onClick={handleViewMore} className="view-more-button">
          {showMore ? "View Less" : "View More"}
        </button>
      </div>
    </motion.div>
  );
}
