'use client';

import { useEffect } from 'react';
import useWeather from '../hooks/useWeather';
import Image from 'next/image';

export default function WeatherInfo({
  onFetch,
}: {
  onFetch: (weather: string) => void;
}) {
  const { weather, loading, error } = useWeather();

  // 렌더링 이후에 weather.main 값을 상위로 전달
  useEffect(() => {
    if (weather) {
      onFetch(weather.main);
    }
  }, [weather, onFetch]);

  if (error) return <p className='text-red-400'>{error}</p>;
  if (loading || !weather) return <p>날씨 정보를 가져오는 중...</p>;

  return (
    <div className='flex items-center gap-2 text-sm text-gray-200'>
      <Image
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt='weather icon'
        width={500}
        height={500}
        className='w-10 h-10'
      />
      <div>
        <p>{weather.city}</p>
        <p>
          {weather.temp}°C {weather.main} {weather.description}
        </p>
      </div>
    </div>
  );
}
