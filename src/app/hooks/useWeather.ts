'use client';

import { useEffect, useState } from 'react';
import useGeolocation from './useGeolocation';

interface WeatherData {
  temp: number;
  main: string;
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

    const WEATHER_KR_MAP: { [key: string]: string } = {
      Thunderstorm: '뇌우',
      Drizzle: '이슬비',
      Rain: '비',
      Snow: '눈',
      Clear: '맑음',
      Clouds: '흐림',
      Mist: '엷은안개',
      Fog: '안개',
    };

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&lang=kr&units=metric`
        );
        const data = await res.json();

        if (res.ok) {
          setWeather({
            temp: data.main.temp,
            main: WEATHER_KR_MAP[data.weather[0].main] || data.weather[0].main,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            city: data.name,
          });

          console.log(data);
        } else {
          setError(data.message || '날씨 정보 요청 실패');
        }
      } catch (err) {
        setError('날씨 정보를 가져오는 중 오류 발생');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [coords]);

  return { weather, loading, error: geoError || error };
}
