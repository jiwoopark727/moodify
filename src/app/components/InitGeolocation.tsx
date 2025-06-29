'use client';

import { useEffect } from 'react';
import { useGeolocationStore } from '../stores/useGeolocationStore';

export default function InitGeolocation() {
  const setCoords = useGeolocationStore((state) => state.setCoords);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      (err) => {
        console.error('위치 정보를 가져오지 못했어요.');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  return null;
}
