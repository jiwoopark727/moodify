'use client';

import { useRouter } from 'next/navigation';

export default function Logo() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div className='text-[#80A867] font-[1000] text-[24px] mt-[5vh]'>
      <span onClick={handleLogoClick} className='cursor-pointer px-4 py-2'>
        Moodify🎧
      </span>
    </div>
  );
}
