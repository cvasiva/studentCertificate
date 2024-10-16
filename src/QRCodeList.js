import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeList = ({ certificates }) => {
  return (
    <div className='text-center' style={{textAlign:"center"}}>
      <h1>QR Codes for Certificates</h1>
      {certificates.map((cert, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>Certificate {index + 1}</h3>
          <QRCode value={`${window.location.origin}/certificate/${cert.id}`} />
          <p>Scan the QR code to visit: 
            <a href={`${window.location.origin}/certificate/${cert.id}`} target="_blank" rel="noopener noreferrer">
              {`${window.location.origin}/certificate/${cert.id}`}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default QRCodeList;
