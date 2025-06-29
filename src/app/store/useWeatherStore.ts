import { create } from 'zustand';

interface WeatherData {
  temp: number;
  main: string;
  description: string;
  icon: string;
  city: string;
}

interface WeatherState {
  weather: WeatherData | null;
  setWeather: (weather: WeatherData) => void;
  setError: (error: string | null) => void;
  error: string | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  error: null,
  loading: false,
  setWeather: (weather) => set({ weather }),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ loading }),
}));
