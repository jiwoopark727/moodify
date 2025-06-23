'use client';

import { useEffect, useState } from 'react';
import '../../app/globals.css';
import EmotionSelector from '../components/EmotionSelector';
import GeolocationFetch from '../components/GeolocationFetch';
import WeatherInfo from '../components/WeatherInfo';
import { generateMusicKeyword } from '../hooks/generateMusicKeyword';
import {
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from 'recoil';
import MusicRecommendations from '../components/MusicRecommendations';

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

export default function Home() {
  const [emotion, setEmotion] = useState<string>(' ');
  const [weather, setWeather] = useState<string>(' ');
  const [keyword, setKeyword] = useState<string>(' ');

  function isWeather(value: string): value is Weather {
    return [
      '맑음',
      '흐림',
      '비',
      '눈',
      '뇌우',
      '이슬비',
      '엷은안개',
      '안개',
    ].includes(value as Weather);
  }

  function isEmotion(value: string): value is Emotion {
    return ['기쁨', '슬픔', '우울함', '편안함', '설렘', '화남'].includes(
      value as Emotion
    );
  }

  useEffect(() => {
    if (isWeather(weather) && isEmotion(emotion)) {
      const tempKeyword = generateMusicKeyword(weather, emotion);
      setKeyword(tempKeyword);
    }
  }, [weather, emotion]);

  return (
    <RecoilRoot>
      <div className='grid grid-flow-col grid-cols-2'>
        <div className='bg-[#b1b1b1] w-[600px] h-[700px] rounded-md pt-[200px] pl-[20px]'>
          <GeolocationFetch />
          <WeatherInfo onFetch={(e) => setWeather(e)} />
          <EmotionSelector onSelect={(e) => setEmotion(e)} />
          {emotion && (
            <p className='mt-4 text-md'>
              선택한 감정 상태: <strong>{emotion}</strong>
            </p>
          )}
          <span className='mt-[20px]'>검색 키워드 랜덤 조합 : {keyword}</span>
        </div>
        <div>
          {weather && emotion && (
            <MusicRecommendations weather={weather} emotion={emotion} />
          )}
        </div>
      </div>
    </RecoilRoot>
  );
}
