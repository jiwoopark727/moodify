'use client';

import { useState } from 'react';
import { useMemoStore } from '../stores/useMemoStore';

type Props = {
  trackName: string;
  trackSinger: string;
};

export default function MoodMemo({ trackName, trackSinger }: Props) {
  const [text, setText] = useState('');
  const addMemoItem = useMemoStore((state) => state.addMemoItem);

  // Memo(로컬스토리지)에 저장하는 함수
  const handleSaveClick = () => {
    if (!text) return alert('기분을 적어보아요!');

    const now = new Date();

    // 2025년 7월 10일 목요일
    const date = `${now.getFullYear()}년 ${
      now.getMonth() + 1
    }월 ${now.getDate()}일 ${now.toLocaleDateString('ko-KR', {
      weekday: 'long',
    })}`;

    if (text.trim() === '') return;

    const memo = `${trackName}@${trackSinger}@${text}`;

    addMemoItem({
      date,
      memo,
    });

    setText(''); // 저장 후 textarea 초기화
  };

  return (
    <div className='w-full'>
      <textarea
        placeholder='음악을 들으며 현재 기분이 어떤지 적어보아요'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='w-full p-3 border border-[#4F7942] rounded-md outline-[#4F7942] resize-none text-sm md:text-base'
        rows={8}
      />
      <div className='flex justify-center'>
        <button
          onClick={handleSaveClick}
          className='w-full mt-4 max-w-[400px] cursor-pointer border-2 border-[#4F7942] px-4 py-2 rounded-xl hover:bg-[#4F7942] hover:text-white text-sm md:text-base font-semibold'
        >
          저장
        </button>
      </div>
    </div>
  );
}
