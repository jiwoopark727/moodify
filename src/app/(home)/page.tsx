'use client';

import { useEffect, useState } from 'react';
import '../../app/globals.css';
import EmotionSelector from '../components/EmotionSelector';
import WeatherFetch from '../components/GeolocationFetch';
import WeatherInfo from '../components/WeatherInfo';
import { generateMusicKeyword } from '../hooks/generateMusicKeyword';
import {
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from 'recoil';

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
      <div>
        <div className='bg-[#303030] w-[400px] h-[700px] rounded-md pt-[200px] pl-[20px]'>
          <WeatherFetch />
          <WeatherInfo onFetch={(e) => setWeather(e)} />
          <EmotionSelector onSelect={(e) => setEmotion(e)} />
          {emotion && (
            <p className='mt-4 text-md'>
              선택한 감정 상태: <strong>{emotion}</strong>
            </p>
          )}
          {keyword}
        </div>
      </div>
    </RecoilRoot>
  );
}
