import { create } from 'zustand';

interface KeywordState {
  keyword: string | null;
  setKeyword: (keyword: string) => void;
}

export const useKeywordStore = create<KeywordState>((set) => ({
  keyword: null,
  setKeyword: (keyword) => set({ keyword }),
}));
