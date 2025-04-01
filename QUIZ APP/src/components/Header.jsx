import React from "react";

const Header = ({ score }) => {
  return (
    <div className="header">
      <h1>📝 Quiz App</h1>
      <h2>Score : {score}</h2>
    </div>
  );
};

export default Header;
