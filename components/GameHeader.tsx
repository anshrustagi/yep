import React from 'react';
import AnimatedNumber from './AnimatedNumber';

interface GameHeaderProps {
    totalScore: number;
    isVisible: boolean;
}

const GameHeader: React.FC<GameHeaderProps> = ({ totalScore, isVisible }) => {
    if (!isVisible) {
        return (
            <header className="w-full max-w-2xl mx-auto text-center mb-4 h-[56px]">
                <h1 className="text-xl font-semibold primary-text tracking-wider">Young Changemakers Programme - IIM Ranchi</h1>
            </header>
        );
    }

    return (
        <header className="w-full max-w-2xl mx-auto text-center mb-4 p-2 card-bg border border-color rounded-lg animate-fade-in flex justify-between items-center sticky top-2 z-10">
            <h1 className="text-sm sm:text-base font-semibold primary-text tracking-wider">Young Changemakers Programme - IIM Ranchi</h1>
            <div className="flex items-center gap-2 px-3 py-1 bg-black/20 rounded-md">
                <span className="text-sm font-semibold text-muted">Total Score:</span>
                <span className="text-lg font-bold primary-text w-12 text-right">
                    <AnimatedNumber value={totalScore} />
                </span>
            </div>
        </header>
    );
};

export default GameHeader;