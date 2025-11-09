import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const prevValueRef = useRef(0);

  useEffect(() => {
    const startValue = prevValueRef.current;
    const endValue = value;
    const duration = 700; // ms
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Ease-out function
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(startValue + (endValue - startValue) * easedProgress);
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        prevValueRef.current = endValue;
      }
    };

    requestAnimationFrame(animate);

    return () => {
      // Cleanup ref on unmount
      prevValueRef.current = value;
    };
  }, [value]);

  return <span>{displayValue}</span>;
};

export default AnimatedNumber;