import React from "react";
import "./Certifications.css";

import { certificates } from "../../constants";
const CertificateCard = ({ cert }) => {
  return (
    <a
      href={cert.link}
      rel="noopener noreferrer"
      className="certificate-link"
    >
      <div className="certificate-card">
        <img src={cert.image} alt={cert.title} className="certificate-image" />
        <div className="certificate-overlay">
          <h3 className="certificate-title">{cert.title}</h3>
          <p className="certificate-issuer">{cert.issuer}</p>
          <p className="certificate-date">{cert.date}</p>
          <p className="certificate-description">{cert.description}</p>
        </div>
      </div>
    </a>
  );
};

const CertificatesSection = () => {
  return (
    <section className="certificates-section">
      <h2 className="certificates-heading">My Certificates</h2>
      <div className="certificates-container">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
