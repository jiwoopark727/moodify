'use client';

import useWeather from '../hooks/useWeather';

export default function WeatherInfo() {
  const { weather, loading, error } = useWeather();

  if (error) return <p className='text-red-400'>{error}</p>;
  if (loading || !weather) return <p>날씨 정보를 가져오는 중...</p>;

  return (
    <div className='flex items-center gap-2 text-sm text-gray-200'>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt='weather icon'
        className='w-10 h-10'
      />
      <div>
        <p>{weather.city}</p>
        <p>
          {weather.temp}°C, {weather.description}
        </p>
      </div>
    </div>
  );
}
