import React from 'react';
import '../styles/progressBar.css';

const ProgressBar = ({ name, level }) => {
  return (
    <div className="progress-bar">
      <span className="label">{name}</span>
      <div className="bar-container">
        <div className="bar-fill" style={{ width: `${level}%` }}>
          <span className="bar-text">{level}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
