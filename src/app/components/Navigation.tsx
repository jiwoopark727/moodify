'use client';

import { useState } from 'react';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState<'today' | 'timeline'>('today');

  return (
    // 전체를 감싸는 박스
    <div className='w-full mt-auto mb-[5vh] z-50 justify-items-center'>
      {/* 네비바 박스 */}
      <div className='rounded-[40px] w-[85%] bg-[#fff] h-[9vh] flex items-center justify-center shadow-[0_3px_8px_rgba(0,0,0,0.24)]'>
        {/* 버튼 2개를 한 번에 감싸는 박스 */}
        <div className='grid grid-cols-2 gap-20 h-full w-[80%]'>
          {/* 각 버튼을 1개 씩 감싸는 박스 */}
          <div
            className={`h-full w-full flex items-center justify-center border-t-4 ${
              activeTab === 'today'
                ? 'border-[#ed9d12] rounded-t-[1px]'
                : 'border-transparent'
            }`}
          >
            <button
              onClick={() => setActiveTab('today')}
              className='w-full h-full cursor-pointer'
            >
              Today
            </button>
          </div>
          {/* 각 버튼을 1개 씩 감싸는 박스 */}
          <div
            className={`h-full w-full flex items-center justify-center border-t-4 ${
              activeTab === 'timeline'
                ? 'border-[#ed9d12] rounded-t-[1px]'
                : 'border-transparent'
            }`}
          >
            <button
              onClick={() => setActiveTab('timeline')}
              className='w-full h-full cursor-pointer'
            >
              Timeline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
