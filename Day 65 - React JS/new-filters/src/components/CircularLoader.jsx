import React from "react";

const CircularLoader = () => {
  return (
    <>
      <style>
        {`
          .loader-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.85);
            z-index: 9999;
          }

          .circular-loader {
            width: 55px;
            height: 55px;
            border: 5px solid #e0e7ff;
            border-top: 5px solid #4f46e5;
            border-right: 5px solid #8b5cf6;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div className="loader-container">
        <div className="circular-loader"></div>
      </div>
    </>
  );
};

export default CircularLoader;
