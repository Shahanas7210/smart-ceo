import React from 'react';

type WaveProps = {
  color?: string;
};

export const TopWave: React.FC<WaveProps> = ({ color = 'text-blue-50' }) => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
      <svg
        className={`relative block w-full h-16 ${color}`}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
              82.39-16.72,168.19-17.73,250.45-.39,
              C823.78,31,906.67,72,985.66,92.83,
              c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35,
              A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export const BottomWave: React.FC<WaveProps> = ({ color = 'text-blue-50' }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
      <svg
        className={`relative block w-full h-16 ${color}`}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
              82.39-16.72,168.19-17.73,250.45-.39,
              C823.78,31,906.67,72,985.66,92.83,
              c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35,
              A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export const DiagonalWave: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
      <svg
        className="relative block w-full h-24 text-white dark:text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="currentColor" />
      </svg>
    </div>
  );
};
