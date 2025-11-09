
import React from 'react';
import ClickableText from './ClickableText';

interface FactorDetailCardProps {
  factor: string;
  text: string;
  score: number;
  onTermClick: (term: string) => void;
}

const FactorScoreBar: React.FC<{ score: number }> = ({ score }) => {
    // Max factor score for scaling the bar width. Adjust as needed.
    const MAX_FACTOR_SCORE = 15; 
    const percentage = Math.min((Math.abs(score) / MAX_FACTOR_SCORE) * 100, 100);
    const isPositive = score > 0;

    return (
        <div className="w-full h-1.5 bg-black/30 rounded-full my-1 overflow-hidden border border-black/20">
            <div 
                className={`h-full rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
}

const FactorDetailCard: React.FC<FactorDetailCardProps> = ({ factor, text, score, onTermClick }) => {
    const isPositive = score >= 0;
    const scoreText = isPositive ? `+${score}` : `${score}`;

    return (
        <div className="bg-black/20 p-4 rounded-lg border border-color transition-all duration-300 hover:border-emerald-500/50 hover:bg-black/30">
            <div className="flex items-start justify-between gap-3">
                <h5 className="font-bold text-main text-lg">{factor}</h5>
                <span className={`font-bold text-xl ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {scoreText}
                </span>
            </div>
            <FactorScoreBar score={score} />
            <div className="text-muted text-sm mt-2">
                <ClickableText text={text} onTermClick={onTermClick} />
            </div>
        </div>
    );
}

export default FactorDetailCard;
