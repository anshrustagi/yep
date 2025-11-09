
export enum GameState {
  WELCOME,
  SCENARIO,
  RESULT,
  LOADING_ANALYSIS,
  COMPLETE,
}

export interface Option {
    text: string;
    hedonicScore: number;
    analysis: string;
    scoreExplanation: string;
}

export interface Flashcard {
  concept: string;
  definition: string;
}

export interface Scenario {
  title: string;
  scenario: string;
  optionA: Option;
  optionB: Option;
  optionC: Option;
  optionD: Option;
  flashcard: Flashcard;
}