'use client';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, useRouter } from 'next/navigation';

export default function TrackPage() {
  const params = useParams();

  const track = decodeURIComponent(params.track as string).split('-');

  const trackName = track[0];
  const trackSinger = track[1];

  const router = useRouter();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
    new Date()
  );

  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
    new Date()
  );

  const day = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(
    new Date()
  );

  return (
    <div className='w-screen h-svh flex items-center justify-center'>
      <div className='w-[450px] h-[100vh] bg-[#fff] rounded-[70px] p-4 flex flex-col items-center'>
        {/* 헤더 */}
        <div className='w-full relative flex items-center justify-between text-xl font-medium mt-[5vh]'>
          <span
            onClick={handleBackClick}
            className='ml-1 cursor-pointer p-2 text-2xl'
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <div className='absolute left-1/2 -translate-x-1/2'>
            <span
              className={
                weekday === 'Saturday'
                  ? 'text-[#2b5bf7]'
                  : weekday === 'Sunday'
                  ? 'text-[#f83b3b]'
                  : 'text-black'
              }
            >
              {weekday}
            </span>
            <span className='ml-1'>
              , {month} {day}th
            </span>
          </div>
        </div>
        <div className='text-[14px]'>
          <p>
            제목: {trackName} , 가수: {trackSinger}
          </p>
        </div>
      </div>
    </div>
  );
}
