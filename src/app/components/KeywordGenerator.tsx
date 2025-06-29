'use client';

import { generateMusicKeyword } from '../hooks/generateMusicKeyword';
import { useEmotionStore } from '../stores/useEmotionStore';
import { useWeatherStore } from '../stores/useWeatherStore';

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
  const emotion = useEmotionStore((state) => state.emotion);
  const weather = useWeatherStore((state) => state.weather);

  const keyword = generateMusicKeyword(
    weather?.main as Weather,
    emotion as Emotion
  );

  return (
    <div className='mt-4'>
      <p>☁️ 날씨: {weather?.main}</p>
      <p>💖 감정: {emotion}</p>
      <p className='font-bold mt-2 text-xl'>🎵 추천 키워드: {keyword}</p>
    </div>
  );
}
