import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="./logo.png" alt="logo" />
      <ul className="sidebar-option">
        <li>Home</li>
        <li>Score</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Sidebar;
