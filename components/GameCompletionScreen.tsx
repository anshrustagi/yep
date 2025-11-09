import React from 'react';
import AnimatedNumber from './AnimatedNumber';

interface GameCompletionScreenProps {
  onRestart: () => void;
  totalScore: number;
  analysis: { title: string; analysis: string } | null;
}

const getRank = (score: number) => {
    if (score >= 200) return { title: "Master Utilitarian", color: "text-emerald-300" };
    if (score >= 100) return { title: "Ethical Virtuoso", color: "text-green-400" };
    if (score >= 50) return { title: "Pragmatic Thinker", color: "text-teal-400" };
    if (score >= 0) return { title: "Balanced Decision-Maker", color: "text-sky-400" };
    return { title: "Ethical Apprentice", color: "text-slate-400" };
}

const GameCompletionScreen: React.FC<GameCompletionScreenProps> = ({ onRestart, totalScore, analysis }) => {
  const rank = getRank(totalScore);

  return (
    <div className="text-center p-8 card-bg backdrop-blur-sm border border-color rounded-lg shadow-2xl animate-fade-in">
      <h1 className="text-4xl font-bold text-main mb-2">Dilemmas Complete!</h1>
      <p className="text-muted mb-6">Here is your final analysis.</p>

      <div className="my-8">
        <p className="text-sm uppercase tracking-wider text-muted">Final Score</p>
        <div className={`text-7xl font-bold my-2 ${rank.color}`}>
          <AnimatedNumber value={totalScore} />
        </div>
        <p className={`text-2xl font-semibold ${rank.color}`}>{rank.title}</p>
      </div>

      {analysis && (
        <div className="mb-8 p-4 bg-black/30 rounded-lg text-left">
          <h3 className="text-lg font-semibold primary-text mb-2">{analysis.title}</h3>
          <p className="text-main">{analysis.analysis}</p>
        </div>
      )}

      <button
        onClick={onRestart}
        className="px-8 py-3 primary-bg text-black font-bold text-lg rounded-lg shadow-lg shadow-emerald-500/20 primary-bg-hover focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-card)] transition-transform transform hover:scale-105"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameCompletionScreen;