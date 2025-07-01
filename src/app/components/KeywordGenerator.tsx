'use client';

import { useEffect } from 'react';
import { generateMusicKeyword } from '../hooks/generateMusicKeyword';
import { useEmotionStore } from '../stores/useEmotionStore';
import { useWeatherStore } from '../stores/useWeatherStore';
import { useKeywordStore } from '../stores/useKeywordStore';

type Weather =
  | '맑음'
  | '흐림'
  | '비'
  | '눈'
  | '뇌우'
  | '이슬비'
  | '엷은안개'
  | '안개';

type Emotion = '기쁨' | '슬픔' | '우울함' | '편안함' | '설렘' | '화남';

export default function KeywordGenerator() {
  const setKeyword = useKeywordStore((state) => state.setKeyword);
  const emotion = useEmotionStore((state) => state.emotion);
  const weather = useWeatherStore((state) => state.weather);

  useEffect(() => {
    if (!emotion || !weather?.main) return;

    const keyword = generateMusicKeyword(
      weather.main as Weather,
      emotion as Emotion
    );

    setKeyword(keyword);
  }, [emotion, weather?.main, setKeyword]);

  return null;
}
