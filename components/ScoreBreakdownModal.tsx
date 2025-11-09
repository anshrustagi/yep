
import React, { useMemo, useState } from 'react';
import FactorDetailCard from './FactorDetailCard';
import GlossaryModal from './GlossaryModal';
import { glossary } from '../glossary';
import ClickableText from './ClickableText';

interface ScoreBreakdownModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysis: string;
}

type ParsedFactor = {
    factor: string;
    text: string;
    score: number;
};

const parseScoreExplanation = (explanation: string) => {
    if (!explanation) return { positive: [], negative: [], raw: null };

    const positive: ParsedFactor[] = [];
    const negative: ParsedFactor[] = [];
    
    // Regex to capture "Factor (score): explanation"
    const factorRegex = /^(Intensity|Duration|Certainty|Propinquity|Fecundity|Purity|Extent)\s*\(([+-]?\d+)\):\s*(.*)/;

    const lines = explanation.split('\n').filter(line => line.trim() !== '');

    lines.forEach(line => {
        const match = line.trim().match(factorRegex);
        if (match) {
            const [, factor, scoreStr, text] = match;
            const score = parseInt(scoreStr, 10);
            const parsedFactor = { factor, score, text };

            if (score >= 0) {
                positive.push(parsedFactor);
            } else {
                negative.push(parsedFactor);
            }
        }
    });

    // If parsing failed to find any structured factors, return the raw text to be displayed.
    if (positive.length === 0 && negative.length === 0 && explanation) {
        return { positive: [], negative: [], raw: explanation };
    }

    // Sort by absolute score descending to show most impactful factors first
    positive.sort((a, b) => b.score - a.score);
    negative.sort((a, b) => Math.abs(b.score) - Math.abs(a.score));

    return { positive, negative, raw: null };
};


const ScoreBreakdownModal: React.FC<ScoreBreakdownModalProps> = ({ isOpen, onClose, analysis }) => {
  const [activeGlossaryTerm, setActiveGlossaryTerm] = useState<string | null>(null);

  const { positive, negative, raw } = useMemo(() => parseScoreExplanation(analysis), [analysis]);
  
  const handleTermClick = (term: string) => {
    setActiveGlossaryTerm(term);
  };

  const handleCloseGlossary = () => {
    setActiveGlossaryTerm(null);
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
        onClick={onClose}
      >
        <div 
          className="w-full max-w-2xl card-bg border border-color rounded-lg shadow-2xl p-6 sm:p-8 relative animate-fade-in-up max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 text-muted hover:text-main transition-colors z-10"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 className="text-2xl font-bold primary-text mb-6 text-center">Score Breakdown</h3>
          
          {raw ? (
              <div className="text-main space-y-4 whitespace-pre-wrap pr-2">
                  <ClickableText text={raw} onTermClick={handleTermClick} />
              </div>
          ) : (
              <div className="space-y-8">
                  {positive.length > 0 && (
                      <section>
                          <h4 className="text-lg font-semibold text-green-400 mb-3 border-b-2 border-green-400/20 pb-2 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            Positive Impact
                          </h4>
                          <div className="grid grid-cols-1 gap-4">
                              {positive.map((item, index) => <FactorDetailCard key={`pos-${index}`} {...item} onTermClick={handleTermClick} />)}
                          </div>
                      </section>
                  )}
                  {negative.length > 0 && (
                       <section>
                          <h4 className="text-lg font-semibold text-red-400 mb-3 border-b-2 border-red-400/20 pb-2 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                            Negative Impact
                          </h4>
                           <div className="grid grid-cols-1 gap-4">
                              {negative.map((item, index) => <FactorDetailCard key={`neg-${index}`} {...item} onTermClick={handleTermClick} />)}
                          </div>
                      </section>
                  )}
              </div>
          )}
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

export default ScoreBreakdownModal;
