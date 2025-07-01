'use client';

// import Image from 'next/image';
import useFetchWeather from '../hooks/useFetchWeather';
// import { useWeatherStore } from '../stores/useWeatherStore';

export default function InitWeather() {
  useFetchWeather(); // 날씨 정보 요청 + zustand에 날씨 저장

  // const weather = useWeatherStore((state) => state.weather);
  // const error = useWeatherStore((state) => state.error);
  // const loading = useWeatherStore((state) => state.loading);

  return (
    <>
      {/* {loading && <p>날씨를 불러오는 중...</p>}
      {error && <p className='text-red-500'>{error}</p>}
      {weather && (
        <div>
          <p>{weather.city}</p>
          <Image
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt='weather icon'
            width={50}
            height={50}
          />
          <p>
            {weather.temp}°C {weather.main} ({weather.description})
          </p>
        </div>
      )} */}
    </>
  );
}
