'use client';

import useGeolocation from '../hooks/useGeolocation';

export default function WeatherFetch() {
  const { coords, error } = useGeolocation();

  if (error) return <p className='text-red-400'>{error}</p>;

  return (
    <div className='text-sm text-gray-300'>
      {coords ? (
        <p>
          현재 위치: 위도 {coords.lat.toFixed(2)}, 경도 {coords.lon.toFixed(2)}
        </p>
      ) : (
        <p>위치 정보를 가져오는 중...</p>
      )}
    </div>
  );
}
