import React from 'react';
import { glossary } from '../glossary';

interface ClickableTextProps {
  text: string;
  onTermClick: (term: string) => void;
}

const ClickableText: React.FC<ClickableTextProps> = ({ text, onTermClick }) => {
  if (!text) return null;

  // Create a regex that finds any key from the glossary, case-insensitive
  const terms = Object.keys(glossary);
  const regex = new RegExp(`\\b(${terms.join('|')})\\b`, 'gi');

  const parts = text.split(regex);

  return (
    <p>
      {parts.map((part, index) => {
        // Find the original casing of the term for the glossary lookup
        const lowerCasePart = part.toLowerCase();
        const originalTerm = terms.find(term => term.toLowerCase() === lowerCasePart);

        if (originalTerm) {
          return (
            <button
              key={index}
              onClick={() => onTermClick(originalTerm)}
              className="text-emerald-300 font-semibold underline decoration-dotted decoration-emerald-300/50 cursor-pointer bg-transparent border-none p-0 m-0 text-left hover:text-emerald-200 transition-colors"
            >
              {part}
            </button>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </p>
  );
};

export default ClickableText;