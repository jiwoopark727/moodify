'use client';

import { useRouter } from 'next/navigation';
import { useKeywordStore } from '../stores/useKeywordStore';

export default function ValidationButton() {
  const keyword = useKeywordStore((state) => state.keyword);
  const router = useRouter();

  const handleGenerateClick = () => {
    if (keyword !== null) {
      router.push('/playlist');
    } else {
      alert('오늘의 무드를 선택해주세요!');
    }
  };

  return (
    <>
      <button
        onClick={handleGenerateClick}
        className='mt-[4vh] text-[18px] cursor-pointer border-2 border-[#4F7942] px-5 py-2.5 rounded-xl hover:bg-[#4F7942] hover:text-[#fff]'
      >
        생성
      </button>
    </>
  );
}
