import React, { useState } from 'react';
import ClickableText from './ClickableText';
import GlossaryModal from './GlossaryModal';
import { glossary } from '../glossary';

interface ScoreAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysis: string;
}

const ScoreAnalysisModal: React.FC<ScoreAnalysisModalProps> = ({ isOpen, onClose, analysis }) => {
  if (!isOpen) return null;

  const [activeGlossaryTerm, setActiveGlossaryTerm] = useState<string | null>(null);

  const handleTermClick = (term: string) => {
    setActiveGlossaryTerm(term);
  };

  const handleCloseGlossary = () => {
    setActiveGlossaryTerm(null);
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
        onClick={onClose}
      >
        <div 
          className="w-full max-w-lg card-bg border border-color rounded-lg shadow-2xl pt-10 px-6 pb-8 relative animate-fade-in-up max-h-[85vh] overflow-y-auto"
          onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 text-muted hover:text-main transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 className="text-xl font-bold primary-text mb-4">Score Breakdown</h3>
          <div className="text-main space-y-4 whitespace-pre-wrap pr-2">
              {/* FIX: Added onTermClick handler to ClickableText to enable glossary functionality. */}
              {analysis ? <ClickableText text={analysis} onTermClick={handleTermClick} /> : <p>Loading analysis...</p>}
          </div>
        </div>
      </div>
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

export default ScoreAnalysisModal;
