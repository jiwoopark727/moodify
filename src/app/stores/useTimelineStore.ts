import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TimelineItem = {
  date: string;
  time: string;
  emotion: string;
  weather: string;
};

interface TimelineState {
  timeline: TimelineItem[];
  addTimelineItem: (item: TimelineItem) => void;
  clearTimeline: () => void;
}

export const useTimelineStore = create<TimelineState>()(
  persist(
    (set) => ({
      timeline: [],
      addTimelineItem: (newItem) =>
        set((state) => {
          // 같은 날짜가 있는 기존 항목은 제거
          const filteredTimeline = state.timeline.filter(
            (item) => item.date !== newItem.date
          );

          // 제거된 타임라인에 새로운 항목 추가
          return {
            timeline: [...filteredTimeline, newItem],
          };
        }),

      clearTimeline: () => set({ timeline: [] }),
    }),
    {
      name: 'Timeline',
    }
  )
);
