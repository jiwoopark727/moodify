'use client';

import { useRouter } from 'next/navigation';
import { useKeywordStore } from '../stores/useKeywordStore';

export default function ValidationButton() {
  const keyword = useKeywordStore((state) => state.keyword);
  const router = useRouter();

  const handleClick = () => {
    if (keyword !== null) {
      router.push('/music'); // 이동할 경로
    } else {
      alert('오늘의 무드를 선택해주세요!');
    }
  };
  return (
    <>
      <button
        onClick={handleClick}
        className='mt-[6vh] cursor-pointer border-2 border-[#ed9d12] px-6 py-3 rounded-xl hover:bg-[#ed9d12] hover:text-[#fff]'
      >
        Generate
      </button>
    </>
  );
}
