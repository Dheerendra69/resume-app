import React from "react";

function ProjectDetailsOverlay({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        {/* 
        <div className="mb-4">
          <strong>Tech Stack:</strong>
          <ul className="list-disc list-inside">
            {project.techStack.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href={project.deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
          >
            Live Site
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default ProjectDetailsOverlay;
