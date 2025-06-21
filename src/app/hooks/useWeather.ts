'use client';

import { useEffect, useState } from 'react';
import useGeolocation from './useGeolocation';

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
  city: string;
}

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;

export default function useWeather() {
  const { coords, error: geoError } = useGeolocation();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!coords) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();

        if (res.ok) {
          setWeather({
            temp: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            city: data.name,
          });
        } else {
          setError(data.message || '날씨 정보 요청 실패');
        }
      } catch () {
        setError('날씨 정보를 가져오는 중 오류 발생');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [coords]);

  return { weather, loading, error: geoError || error };
}
