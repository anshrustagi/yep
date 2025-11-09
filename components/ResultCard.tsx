import React, { useState } from 'react';
import type { Option } from '../types';
import ScoreBreakdownModal from './ScoreBreakdownModal';
import ClickableText from './ClickableText';
import ProgressBar from './ProgressBar';
import HedonicScoreBar from './HedonicScoreBar';
import GlossaryModal from './GlossaryModal';
import { glossary } from '../glossary';
import AnimatedNumber from './AnimatedNumber';

interface ResultCardProps {
  choice: Option;
  score: number;
  analysis: string;
  onNext: () => void;
  onRestart: () => void;
  onGoBack: () => void;
  onShowScoreAnalysis: () => void;
  isBreakdownModalOpen: boolean;
  closeBreakdownModal: () => void;
  detailedScoreAnalysis: string;
  current: number;
  total: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ 
    choice, score, analysis, onNext, onRestart, onGoBack,
    onShowScoreAnalysis, isBreakdownModalOpen, 
    closeBreakdownModal, detailedScoreAnalysis, current, total
}) => {
  const [activeGlossaryTerm, setActiveGlossaryTerm] = useState<string | null>(null);
  const isLastScenario = current === total;

  const handleTermClick = (term: string) => {
    setActiveGlossaryTerm(term);
  };

  const handleCloseGlossary = () => {
    setActiveGlossaryTerm(null);
  };

  return (
    <>
      <div className="p-8 card-bg backdrop-blur-sm border border-color rounded-lg shadow-2xl animate-fade-in-up">
        <p className="text-sm text-center primary-text font-semibold tracking-wider mb-4">ANALYSIS {current} OF {total}</p>
        <ProgressBar current={current} total={total} />
        <h2 className="text-3xl font-bold text-center text-main mt-4 mb-4">Analysis Complete</h2>
        
        <div className="mb-6 p-4 bg-black/20 rounded-lg">
          <p className="text-muted text-sm">You chose to:</p>
          <p className="text-emerald-300 italic">"{choice.text}"</p>
        </div>

        <div className="text-center mb-6">
          <p className="text-muted text-sm uppercase tracking-wider">Your Calculated Hedonic Score</p>
          <div className={`text-6xl font-bold ${score > 0 ? 'text-green-400' : score < 0 ? 'text-red-400' : 'text-slate-400'}`}>
             <AnimatedNumber value={score} />
          </div>
          <div className="max-w-xs mx-auto">
            <HedonicScoreBar score={score} />
          </div>
          <button 
            onClick={onShowScoreAnalysis} 
            className="text-sm primary-text hover:text-emerald-200 transition-colors underline mt-1"
          >
            Why this score?
          </button>
        </div>

        <div className="mb-8 p-4 bg-black/30 rounded-lg">
          <h3 className="text-lg font-semibold primary-text mb-2">AI Philosopher's Analysis:</h3>
          <div className="text-main whitespace-pre-wrap">
            <ClickableText text={analysis} onTermClick={handleTermClick} />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          {/* Primary Action */}
          <button
            onClick={onNext}
            className="w-full sm:w-auto px-8 py-3 primary-bg text-black font-bold text-lg rounded-lg shadow-lg shadow-emerald-500/20 primary-bg-hover focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-card)] transition-all duration-300 transform hover:scale-105"
          >
            {isLastScenario ? 'Finish & See My Profile' : 'Continue'}
          </button>
          
          {/* Secondary Actions */}
          <div className="flex items-center gap-6 mt-2">
            <button
              onClick={onGoBack}
              className="text-muted font-semibold hover:text-main transition-colors duration-200"
            >
              Go Back
            </button>
            <button
              onClick={onRestart}
              className="px-5 py-2 bg-transparent border border-color text-muted font-semibold rounded-lg hover:bg-slate-700/50 hover:text-main hover:border-slate-500 focus:outline-none transition-all"
            >
              Restart Game
            </button>
          </div>
        </div>
      </div>
      <ScoreBreakdownModal 
        isOpen={isBreakdownModalOpen}
        onClose={closeBreakdownModal}
        analysis={detailedScoreAnalysis}
      />
       {activeGlossaryTerm && (
        <GlossaryModal 
          term={activeGlossaryTerm}
          definition={glossary[activeGlossaryTerm]}
          onClose={handleCloseGlossary}
        />
      )}
    </>
  );
};

export default ResultCard;