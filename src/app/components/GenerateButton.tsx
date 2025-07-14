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

    // 2025년 7월 10일 목요일
    const date = `${now.getFullYear()}년 ${
      now.getMonth() + 1
    }월 ${now.getDate()}일 ${now.toLocaleDateString('ko-KR', {
      weekday: 'long',
    })}`;

    // 오전 09:32 / 오후 02:10
    const time = now.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

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
        className='mt-6 md:mt-[4vh] text-base md:text-lg cursor-pointer border-2 border-[#4F7942] px-4 py-2 md:px-6 md:py-3 rounded-xl hover:bg-[#4F7942] hover:text-white transition-all duration-300'
      >
        생성
      </button>
    </>
  );
}
