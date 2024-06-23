import React from 'react';

const LoadingBar = ({ isLoading }) => {
  return (
    <div style={{ height: '4px', margin: '20px 0' }}>
      {isLoading && (
        <div style={{
          width: '100%',
          height: '100%',
          background: '#000000',
          animation: 'loadingAnimation 2s linear infinite'
        }}></div>
      )}
      <style>
        {`
          @keyframes loadingAnimation {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(0); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingBar;