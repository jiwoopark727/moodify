'use client';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import Logo from './Logo';

export default function Header() {
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
    <>
      <Logo />

      <div className='w-full relative flex items-center justify-between text-lg md:text-xl font-medium px-2 mt-2'>
        {/* 뒤로가기 아이콘 */}
        <span
          onClick={handleBackClick}
          className='ml-1 cursor-pointer px-2 py-1 md:px-3 md:py-2'
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>

        {/* 중앙 날짜 텍스트 */}
        <div className='absolute left-1/2 -translate-x-1/2 text-md md:text-lg whitespace-nowrap'>
          <span className='mr-1.5'>{month}</span>
          <span className='mr-1.5'>{day}</span>
          <span
            className={
              weekday === '토요일'
                ? 'text-[#2b5bf7]'
                : weekday === '일요일'
                ? 'text-[#f83b3b]'
                : 'text-black'
            }
          >
            {weekday}
          </span>
        </div>
      </div>
    </>
  );
}
