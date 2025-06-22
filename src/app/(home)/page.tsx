'use client';

import { useState } from 'react';
import '../../app/globals.css';
import EmotionSelector from '../components/EmotionSelector';
import WeatherFetch from '../components/GeolocationFetch';
import WeatherInfo from '../components/WeatherInfo';
import { generateMusicKeyword } from '../hooks/generateMusicKeyword';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export default function Home() {
  const [emotion, setEmotion] = useState<string | null>(null);
  const [weather, setWeather] = useState<string>(' ');

  const weatherMain = weather; //해당 지역의 날씨
  const selectEmotion = '편안함'; // 사용자가 선택한 감정
  const keyword = generateMusicKeyword(weatherMain, selectEmotion);
  console.log(keyword); // 예: 'calm cloudy music'
  return (
    <RecoilRoot>
      <div>
        <div className='bg-[#303030] w-[400px] h-[700px] rounded-md pt-[200px] pl-[20px]'>
          <WeatherFetch />
          <WeatherInfo onFetch={(e) => setWeather(e)} />
          <EmotionSelector onSelect={(e) => setEmotion(e)} />
        </div>
        {emotion && (
          <p className='mt-4 text-md'>
            선택한 감정 상태: <strong>{emotion}</strong>
          </p>
        )}
      </div>
    </RecoilRoot>
  );
}
