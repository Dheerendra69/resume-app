import React from "react";
import "./ResumeDownload.css"; // Optional: You can style this how you want

const ResumeDownload = () => {
  return (
    <div className="resume-download" id="resume" data-aos="zoom-in">
      <h2>Access My Resume</h2>
      <a
        href="https://drive.google.com/uc?export=download&id=1tGs53F2Umk5ipKfN1Cfq9S6W95cmNFH3"
        className="download-btn"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeDownload;
