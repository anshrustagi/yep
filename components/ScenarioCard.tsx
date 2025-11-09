import React, { useState } from 'react';
import type { Scenario, Option } from '../types';
import ProgressBar from './ProgressBar';

interface ScenarioCardProps {
  scenario: Scenario;
  onChoice: (choice: Option) => void;
  current: number;
  total: number;
}

const OptionButton: React.FC<{
  option: Option, 
  onSelect: (choice: Option) => void, 
  label: string,
  isSelected: boolean,
  isOtherSelected: boolean
}> = ({ option, onSelect, label, isSelected, isOtherSelected }) => (
    <button
      onClick={() => onSelect(option)}
      disabled={isOtherSelected}
      className={`w-full h-full text-left p-6 card-bg rounded-lg border-2 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-card)] group flex flex-col
        ${isSelected 
          ? 'border-primary scale-105 shadow-2xl shadow-emerald-500/30' 
          : 'border-color hover:border-primary'}
        ${isOtherSelected ? 'opacity-40 scale-95' : 'hover:scale-102'}
      `}
    >
      <span className={`font-semibold primary-text block mb-2 transition-colors ${isSelected ? 'text-emerald-300' : 'group-hover:text-emerald-300'}`}>{label}</span>
      <p className="text-main flex-grow">{option.text}</p>
    </button>
);


const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onChoice, current, total }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setTimeout(() => {
        onChoice(option);
        setSelectedOption(null); // Reset for next screen
    }, 1000); // Wait for animation
  };

  return (
    <div className="p-8 card-bg backdrop-blur-sm border border-color rounded-lg shadow-2xl animate-fade-in-up">
      <p className="text-sm text-center primary-text font-semibold tracking-wider mb-4">DILEMMA {current} OF {total}</p>
      <ProgressBar current={current} total={total} />
      <h2 className="text-3xl font-bold text-center text-main mt-4 mb-2">{scenario.title}</h2>
      <p className="text-muted text-center text-lg mb-8">{scenario.scenario}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[scenario.optionA, scenario.optionB, scenario.optionC, scenario.optionD].map((opt, i) => (
            <OptionButton 
                key={i}
                option={opt} 
                onSelect={handleSelect} 
                label={`Action ${String.fromCharCode(65 + i)}`}
                isSelected={selectedOption?.text === opt.text}
                isOtherSelected={!!selectedOption && selectedOption.text !== opt.text}
            />
        ))}
      </div>
    </div>
  );
};

export default ScenarioCard;