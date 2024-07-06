// Loading.js
import React from "react";
import "../assets/styles/Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner-container">
        <div className="spinner"></div>
        <div style={{ visibility: "hidden" }}>loading...</div>
      </div>
    </div>
  );
};

export default Loading;
