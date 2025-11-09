import React, { useState, useCallback } from 'react';
import { GameState, Option } from './types';
import { scenarios } from './scenarios';
import { getPersonalityAnalysis } from './services/geminiService';
import WelcomeScreen from './components/WelcomeScreen';
import ScenarioCard from './components/ScenarioCard';
import ResultCard from './components/ResultCard';
import GameCompletionScreen from './components/GameCompletionScreen';
import Flashcard from './components/Flashcard';
import GameHeader from './components/GameHeader';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.WELCOME);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [userChoice, setUserChoice] = useState<Option | null>(null);
  const [hedonicScore, setHedonicScore] = useState<number>(0);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [detailedScoreAnalysis, setDetailedScoreAnalysis] = useState<string>('');
  const [isBreakdownModalOpen, setBreakdownModalOpen] = useState(false);
  const [isFlashcardModalOpen, setFlashcardModalOpen] = useState(false);

  // Gamification state
  const [totalScore, setTotalScore] = useState(0);
  const [choiceHistory, setChoiceHistory] = useState<Option[]>([]);
  const [personalityAnalysis, setPersonalityAnalysis] = useState<{ title: string; analysis: string } | null>(null);

  const scenario = scenarios[currentScenarioIndex];

  const handleStartGame = useCallback(() => {
    setGameState(GameState.SCENARIO);
  }, []);

  const handleChoice = useCallback((choice: Option) => {
    setUserChoice(choice);
    setHedonicScore(choice.hedonicScore);
    setAiAnalysis(choice.analysis);
    setDetailedScoreAnalysis(choice.scoreExplanation);
    setGameState(GameState.RESULT);
    
    setTotalScore(prev => prev + choice.hedonicScore);
    setChoiceHistory(prev => [...prev, choice]);
  }, []);
  
  const handleShowScoreAnalysis = useCallback(() => {
    setBreakdownModalOpen(true);
  }, []);

  const handleShowFlashcard = () => {
    setFlashcardModalOpen(true);
  };

  const handleNextDilemma = () => {
    setFlashcardModalOpen(false);
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setGameState(GameState.SCENARIO);
    }
    resetTurnState();
  };

  const handleFinishGame = useCallback(async () => {
    setFlashcardModalOpen(false);
    resetTurnState();
    setGameState(GameState.LOADING_ANALYSIS);
    try {
      const analysisResult = await getPersonalityAnalysis(choiceHistory);
      setPersonalityAnalysis(analysisResult);
    } catch (error) {
      console.error("Failed to get personality analysis:", error);
      setPersonalityAnalysis({
        title: "Insightful Decision-Maker",
        analysis: "You've thoughtfully navigated a series of complex ethical dilemmas. Your choices reflect a consistent effort to balance personal needs with the well-being of others, demonstrating a strong grasp of utilitarian principles."
      });
    }
    setGameState(GameState.COMPLETE);
  }, [choiceHistory]);

  const handleRestartGame = () => {
    setCurrentScenarioIndex(0);
    setTotalScore(0);
    setChoiceHistory([]);
    setPersonalityAnalysis(null);
    resetTurnState();
    setGameState(GameState.WELCOME);
  };
  
  const handleGoBack = useCallback(() => {
    const lastChoice = choiceHistory[choiceHistory.length - 1];
    if (lastChoice) {
      setTotalScore(prev => prev - lastChoice.hedonicScore);
      setChoiceHistory(prev => prev.slice(0, -1));
    }
    setGameState(GameState.SCENARIO);
  }, [choiceHistory]);

  const resetTurnState = () => {
    setUserChoice(null);
    setAiAnalysis('');
    setHedonicScore(0);
    setDetailedScoreAnalysis('');
    setBreakdownModalOpen(false);
    setFlashcardModalOpen(false);
  };

  const renderContent = () => {
    switch (gameState) {
      case GameState.WELCOME:
        return <WelcomeScreen onStart={handleStartGame} />;
      case GameState.SCENARIO:
        return <ScenarioCard scenario={scenario} onChoice={handleChoice} current={currentScenarioIndex + 1} total={scenarios.length} />;
      case GameState.RESULT:
        return (
          <>
            <ResultCard
              choice={userChoice!}
              score={hedonicScore}
              analysis={aiAnalysis}
              onNext={currentScenarioIndex === scenarios.length - 1 ? handleFinishGame : handleShowFlashcard}
              onRestart={handleRestartGame}
              onGoBack={handleGoBack}
              onShowScoreAnalysis={handleShowScoreAnalysis}
              isBreakdownModalOpen={isBreakdownModalOpen}
              closeBreakdownModal={() => setBreakdownModalOpen(false)}
              detailedScoreAnalysis={detailedScoreAnalysis}
              current={currentScenarioIndex + 1}
              total={scenarios.length}
            />
            <Flashcard
              isOpen={isFlashcardModalOpen}
              flashcard={scenario.flashcard}
              onContinue={handleNextDilemma}
            />
          </>
        );
      case GameState.LOADING_ANALYSIS:
        return <Loader message="Analyzing your ethical profile..." />;
      case GameState.COMPLETE:
        return <GameCompletionScreen onRestart={handleRestartGame} totalScore={totalScore} analysis={personalityAnalysis} />;
      default:
        return <WelcomeScreen onStart={handleStartGame} />;
    }
  };

  return (
    <div className="text-main min-h-screen w-full flex flex-col items-center justify-center p-4 selection-primary">
       <GameHeader totalScore={totalScore} isVisible={gameState !== GameState.WELCOME} />
      <main className="w-full max-w-2xl mx-auto">
        {renderContent()}
      </main>
      <footer className="text-center mt-8 text-muted text-sm">
        <p>A Game of Utilitarian Ethics inspired by Jeremy Bentham.</p>
        <p className="mt-2">Made by Ansh Rustagi</p>
      </footer>
    </div>
  );
};

export default App;
