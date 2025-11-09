import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full bg-[var(--color-border)] rounded-full h-2" role="progressbar" aria-label="Game Progress" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
      <div 
        className="primary-bg h-full rounded-full transition-all duration-500 ease-in-out" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;