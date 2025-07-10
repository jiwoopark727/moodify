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
      addTimelineItem: (item) =>
        set((state) => ({
          timeline: [...state.timeline, item],
        })),
      clearTimeline: () => set({ timeline: [] }),
    }),
    {
      name: 'Timeline',
    }
  )
);
