'use client';

import { useRouter } from 'next/navigation';
import { useKeywordStore } from '../stores/useKeywordStore';
import { useEmotionStore } from '../stores/useEmotionStore';
import { useWeatherStore } from '../stores/useWeatherStore';
import { useTimelineStore } from '../stores/useTimelineStore';

export default function ValidationButton() {
  const keyword = useKeywordStore((state) => state.keyword);
  const router = useRouter();

  const emotion = useEmotionStore((state) => state.emotion);
  const weather = useWeatherStore((state) => state.weather);
  const addTimelineItem = useTimelineStore((state) => state.addTimelineItem);

  // 타임라인(로컬스토리지)에 저장하느 함수
  const handleGenerateClick = () => {
    if (!emotion || !weather) return alert('감정과 날씨 정보가 필요해요.');

    const now = new Date();
    const date = now.toISOString().slice(0, 10); // YYYY-MM-DD
    const time = now.toTimeString().slice(0, 5); // HH:MM

    addTimelineItem({
      date,
      time,
      emotion,
      weather: weather.main,
    });
  };

  const handleGenerateClick2 = () => {
    if (keyword !== null) {
      router.push('/playlist');
    } else {
      alert('오늘의 무드를 선택해주세요!');
    }
  };

  return (
    <>
      <button
        onClick={() => {
          handleGenerateClick();
          handleGenerateClick2();
        }}
        className='mt-[4vh] text-[18px] cursor-pointer border-2 border-[#4F7942] px-5 py-2.5 rounded-xl hover:bg-[#4F7942] hover:text-[#fff]'
      >
        생성
      </button>
    </>
  );
}
