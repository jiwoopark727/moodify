import { create } from 'zustand';

type Emotion = string | null;

interface EmotionState {
  emotion: Emotion;
  setEmotion: (emotion: Emotion) => void;
}

export const useEmotionStore = create<EmotionState>((set) => ({
  emotion: null,
  setEmotion: (emotion) => set({ emotion }),
}));
