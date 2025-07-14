'use client';

import { useRouter } from 'next/navigation';

export default function Logo() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div className='text-[#4F7942] font-black text-2xl md:text-3xl mt-2 md:mt-6'>
      <span onClick={handleLogoClick} className='cursor-pointer px-4 py-2'>
        Moodify🎧
      </span>
    </div>
  );
}
