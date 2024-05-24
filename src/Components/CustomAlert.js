import React, { useState, useEffect } from 'react';
import Success from '../assets/check.png'
const CustomAlert = ({ message, show, onClose }) => {
  return (
    <div>
      {show && (
        <div className="custom-alert m-4 p-3">
          <p className='mb-0'>{message}</p>
          <a onClick={onClose}><img src={Success} alt='remove alert' style={{ width: '40px', height: '40px' }}/></a>
        </div>
      )}
    </div>
  );
};

export default CustomAlert;
