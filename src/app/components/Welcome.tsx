import Logo from './Logo';

export default function Welcome() {
  const now = new Date();
  const hour = now.getHours();

  let greeting = 'Good Morning';
  if (hour >= 18) {
    greeting = 'Good Night';
  } else if (hour >= 15) {
    greeting = 'Good Evening';
  } else if (hour >= 12) {
    greeting = 'Good Afternoon';
  }

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
      <p className='flex justify-center mt-[1vh] font-semibold text-[32px]'>
        {greeting}
      </p>
      <p className='flex justify-center text-[20px] mt-[1vh]'>
        <span className='mr-1.5'>{month}</span>
        <span className='mr-1.5'>{day}</span>
        <span
          className={`${
            weekday === '토요일' ? 'text-[#2b5bf7]' : 'text-black'
          } ${weekday === '일요일' ? 'text-[#f83b3b]' : 'text-black'}`}
        >
          {weekday}
        </span>
      </p>
      <p className='flex justify-center mt-[5vh] text-[24px] font-semibold'>
        당신의 오늘 하루는 어땠나요?
      </p>
    </>
  );
}
