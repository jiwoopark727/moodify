import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type MemoItem = {
  date: string;
  memo: string;
};

interface MemoState {
  memo: MemoItem[];
  addMemoItem: (item: MemoItem) => void;
  clearMemo: () => void;
}

export const useMemoStore = create<MemoState>()(
  persist(
    (set) => ({
      memo: [],
      addMemoItem: (item) =>
        set((state) => ({
          memo: [...state.memo, item],
        })),
      clearMemo: () => set({ memo: [] }),
    }),
    {
      name: 'Memo', // localStorage에 저장될 키 이름
    }
  )
);
