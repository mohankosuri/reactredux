import React from 'react';

const DetailedDataModal = ({ data, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
    
        <p>ID: {data.id}</p>
        <p>Email: {data.email}</p>
        
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DetailedDataModal;