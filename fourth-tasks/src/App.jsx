import React, { useState } from 'react';
import './App.css';  

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="switch" onClick={toggleSwitch}>
      <div className={`toggle ${isOn ? 'on' : 'off'}`} />
    </div>
  );
};

export const Button = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export const Tab = ({ label, isActive, onClick }) => {
  return (
    <div className={`tab ${isActive ? 'active' : 'inactive'}`} onClick={onClick}>
      {label}
    </div>
  );
};

export const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltipContainer">
      {children}
      <span className="tooltipText">{text}</span>
    </div>
  );
};

export const Badge = ({ text, type }) => {
  return <span className={`badge ${type}`}>{text}</span>;
};

export const ProgressBar = ({ progress }) => {
  return (
    <div className="progressContainer">
      <div className="progressBar" style={{ width: `${progress}%` }} />
    </div>
  );
};

export const ProfilePicture = ({ url }) => {
  return <img src={url} alt="Profile" className="profilePicture" />;
};

export const Tag = ({ label }) => {
  return <span className="tag">{label}</span>;
};

export const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="breadcrumbItem">{item}</span>
          {index < items.length - 1 && <span className="separator">/</span>}
        </React.Fragment>
      ))}
    </div>
  );
};
