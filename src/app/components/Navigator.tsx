'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useNavigatorStore } from '../stores/useNavigatorStore';
import { useEffect } from 'react';

export default function Navigation() {
  const pathName = usePathname();
  const { navigator, setNavigator } = useNavigatorStore();
  const router = useRouter();

  useEffect(() => {
    if (pathName === '/timeline') {
      setNavigator(pathName.substring(1));
    } else if (pathName === '/') {
      setNavigator('today');
    }
  }, [pathName]);

  const handleTodayClick = () => {
    router.push('/');
  };

  const handleTimelineClick = () => {
    router.push('/timeline');
  };

  return (
    <div className='w-[80%] mt-auto mb-6 md:mb-[5vh] z-50'>
      {/* 네비바 박스 */}
      <div className='w-full max-w-[450px] mx-auto bg-white h-16 md:h-[9vh] rounded-[40px] flex items-center justify-center shadow-[0_3px_8px_rgba(0,0,0,0.24)] px-4'>
        <div className='grid grid-cols-2 gap-8 md:gap-16 w-[90%] h-full'>
          {/* 투데이 버튼 */}
          <div
            className={`flex items-center justify-center h-full w-full border-t-4 ${
              navigator === 'today' ? 'border-[#4F7942]' : 'border-transparent'
            }`}
          >
            <button
              onClick={() => {
                handleTodayClick();
                setNavigator('today');
              }}
              className='w-full h-full cursor-pointer text-lg md:text-xl transition-all active:scale-90 rounded-t-sm'
            >
              투데이
            </button>
          </div>

          {/* 타임라인 버튼 */}
          <div
            className={`flex items-center justify-center h-full w-full border-t-4 ${
              navigator === 'timeline'
                ? 'border-[#4F7942]'
                : 'border-transparent'
            }`}
          >
            <button
              onClick={() => {
                handleTimelineClick();
                setNavigator('timeline');
              }}
              className='w-full h-full cursor-pointer text-lg md:text-xl transition-all active:scale-95 rounded-t-sm'
            >
              타임라인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
