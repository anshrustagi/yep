import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center p-8 card-bg backdrop-blur-sm border border-color rounded-lg shadow-2xl animate-fade-in">
      <h1 className="text-5xl font-bold text-main mb-4">Felicific Calculus</h1>
      <h2 className="text-2xl primary-text mb-6">The Game of Utility</h2>
      <p className="text-muted max-w-prose mx-auto mb-6">
        Welcome, Changemaker. In this game, you will face ten challenging dilemmas inspired by the life of a modern student.
        Your goal is to make the choice that creates the greatest amount of good for the greatest number of people.
        After each choice, an AI philosopher will analyze its consequences. At the end, you'll receive a unique personality profile based on your decisions.
      </p>
      
      <div className="my-8 p-4 bg-black/20 rounded-lg border border-color max-w-md mx-auto text-left flex items-start gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--color-primary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
        </svg>
        <div>
            <h3 className="font-semibold text-main">A Note on Honesty & Privacy</h3>
            <p className="text-muted text-sm mt-1">
                Your choices are not recorded or stored. This is a space for self-reflection.
                For the most insightful analysis, please answer based on what you would genuinely do, not what you think is the 'right' answer.
            </p>
        </div>
      </div>

      <button
        onClick={onStart}
        className="px-8 py-3 primary-bg text-black font-bold text-lg rounded-lg shadow-lg shadow-emerald-500/20 primary-bg-hover focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-card)] transition-all transform hover:scale-105"
      >
        Begin
      </button>
    </div>
  );
};

export default WelcomeScreen;