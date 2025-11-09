
import React from 'react';
import { Flashcard as FlashcardType } from '../types';

interface FlashcardProps {
  isOpen: boolean;
  flashcard: FlashcardType;
  onContinue: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ isOpen, flashcard, onContinue }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
    >
      <div 
        className="w-full max-w-lg p-8 card-bg border-2 border-color rounded-lg shadow-2xl animate-fade-in-up text-center"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-sm uppercase tracking-widest text-muted mb-4">Key Concept</h2>
        <div className="p-6 border border-dashed border-color rounded-lg mb-8">
          <h3 className="text-3xl font-bold primary-text mb-3">{flashcard.concept}</h3>
          <p className="text-main text-lg">{flashcard.definition}</p>
        </div>
        <button
          onClick={onContinue}
          className="px-8 py-3 primary-bg text-black font-bold text-lg rounded-lg shadow-lg shadow-emerald-500/20 primary-bg-hover focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-card)] transition-transform transform hover:scale-105"
        >
          Got It, Continue
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
