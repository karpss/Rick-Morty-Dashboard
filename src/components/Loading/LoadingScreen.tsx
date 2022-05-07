import React from 'react';
import Icon from './Icon.gif';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loadingGif">
      <img src={Icon} alt="Loading-Icon" />
    </div>
  );
};

export default LoadingScreen;
