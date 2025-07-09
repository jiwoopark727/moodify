'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useKeywordStore } from 'Moodify/app/stores/useKeywordStore';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import PlayList from 'Moodify/app/components/PlayList';
import Header from 'Moodify/app/components/Header';

export default function PlayListPage() {
  // const keyword = useKeywordStore((state) => state.keyword);

  const router = useRouter();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const weekday = new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(
    new Date()
  );

  const month = new Intl.DateTimeFormat('ko-KR', { month: 'short' }).format(
    new Date()
  );

  const day = new Intl.DateTimeFormat('ko-KR', { day: 'numeric' }).format(
    new Date()
  );

  return (
    <div className='w-screen h-svh flex items-center justify-center'>
      <div className='w-[450px] h-[100vh] bg-[#fff] rounded-[70px] p-4 flex flex-col items-center'>
        {/* 헤더 */}
        <Header />
        {/* 키워드 */}
        {/* <p className='text-base font-semibold'>오늘의 키워드 : {keyword}</p> */}
        <div className='w-[90%] h-[75vh] flex flex-col items-start overflow-y-scroll mt-5'>
          <PlayList />
        </div>
      </div>
    </div>
  );
}
