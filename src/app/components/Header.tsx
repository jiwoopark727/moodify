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
      <div className='w-full relative flex items-center justify-between text-[24px] font-medium'>
        <span
          onClick={handleBackClick}
          className='ml-1 cursor-pointer px-3 py-2 text-[24px]'
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <div className='absolute left-1/2 -translate-x-1/2'>
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
