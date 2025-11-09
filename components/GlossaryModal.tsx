import React from 'react';

interface GlossaryModalProps {
  term: string;
  definition: string;
  onClose: () => void;
}

const GlossaryModal: React.FC<GlossaryModalProps> = ({ term, definition, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-[60] animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md p-8 card-bg border-2 border-color rounded-lg shadow-2xl animate-fade-in-up text-center"
        onClick={e => e.stopPropagation()}
      >
        <h3 className="text-3xl font-bold primary-text mb-3">{term}</h3>
        <p className="text-main text-lg mb-8">{definition}</p>
        <button
          onClick={onClose}
          className="px-8 py-3 primary-bg text-black font-bold text-lg rounded-lg shadow-lg shadow-emerald-500/20 primary-bg-hover focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-card)] transition-transform transform hover:scale-105"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GlossaryModal;
