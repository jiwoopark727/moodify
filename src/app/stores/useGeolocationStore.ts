import { create } from 'zustand';

type Coordinates = {
  lat: number;
  lon: number;
};

interface GeolocationState {
  coords: Coordinates | null;
  setCoords: (coords: Coordinates) => void;
}

export const useGeolocationStore = create<GeolocationState>((set) => ({
  coords: null,
  setCoords: (coords) => set({ coords }),
}));
