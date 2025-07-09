import { create } from 'zustand';

interface NavigatorState {
  navigator: string | null;
  setNavigator: (keyword: string) => void;
}

export const useNavigatorStore = create<NavigatorState>((set) => ({
  navigator: 'today',
  setNavigator: (navigator) => set({ navigator }),
}));
