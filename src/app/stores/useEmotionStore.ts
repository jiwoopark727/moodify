import { create } from 'zustand';

type Emotion = '기쁨' | '슬픔' | '우울함' | '편안함' | '설렘' | '화남' | null;

interface EmotionState {
  emotion: Emotion;
  setEmotion: (emotion: Emotion) => void;
}

export const useEmotionStore = create<EmotionState>((set) => ({
  emotion: null,
  setEmotion: (emotion) => set({ emotion }),
}));
