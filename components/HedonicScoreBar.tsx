import React, { useState, useEffect, useRef } from 'react';

interface HedonicScoreBarProps {
  score: number;
}

const HedonicScoreBar: React.FC<HedonicScoreBarProps> = ({ score }) => {
  const MAX_ABS_SCORE = 50; // Max score for scaling the bar
  const [animatedScore, setAnimatedScore] = useState(0);
  const prevScoreRef = useRef(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const startValue = prevScoreRef.current;
    const endValue = score;
    // If start and end are the same, no need to animate
    if (startValue === endValue) {
      setAnimatedScore(endValue);
      return;
    }
    
    const duration = 700; // ms, matches AnimatedNumber
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Ease-out function
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easedProgress;
      
      setAnimatedScore(currentValue);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        prevScoreRef.current = endValue;
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      // Update ref immediately on cleanup in case animation was interrupted
      prevScoreRef.current = score; 
    };
  }, [score]);

  const percentage = Math.min((Math.abs(animatedScore) / MAX_ABS_SCORE) * 100, 100);
  const positivePercentage = animatedScore >= 0 ? percentage : 0;
  const negativePercentage = animatedScore < 0 ? percentage : 0;

  return (
    <div className="w-full my-2 animate-fade-in">
      <div className="flex justify-between text-xs text-muted mb-1 px-1">
        <span className="font-semibold text-red-400/80">Pain</span>
        <span className="font-semibold text-green-400/80">Pleasure</span>
      </div>
      <div className="h-3 w-full bg-black/30 rounded-full overflow-hidden border border-color flex items-center">
        {/* Negative side */}
        <div className="flex-1 flex justify-end">
          <div 
            className="h-full bg-red-400 transition-all duration-100"
            style={{ width: `${negativePercentage}%` }}
          ></div>
        </div>
        {/* Center line */}
        <div className="w-0.5 h-full bg-slate-400/50"></div>
        {/* Positive side */}
        <div className="flex-1">
          <div 
            className="h-full bg-green-400 transition-all duration-100"
            style={{ width: `${positivePercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HedonicScoreBar;