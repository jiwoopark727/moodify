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
      addMemoItem: (newItem) =>
        set((state) => {
          const filteredMemo = state.memo.filter(
            (item) => item.date !== newItem.date
          );
          return {
            memo: [...filteredMemo, newItem],
          };
        }),
      clearMemo: () => set({ memo: [] }),
    }),
    {
      name: 'Memo',
    }
  )
);
