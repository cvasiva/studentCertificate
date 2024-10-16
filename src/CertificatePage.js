import React from 'react';
import { useParams } from 'react-router-dom';

const CertificatePage = ({ certificates }) => {
  const { id } = useParams();
  const certificate = certificates.find(cert => cert.id === id);

  if (!certificate) {
    return <div>Certificate not found</div>;
  }

  return (
    <div>
      {/* Display only the image of the selected certificate */}
      <img src={require(`./images/${certificate.imageitem}`)} alt='certificate' style={{ width: "100%" }} />
    </div>
  );
};

export default CertificatePage;
