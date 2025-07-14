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
      <div className='text-center mt-4'>
        <p className='font-semibold text-2xl md:text-3xl'>{greeting}</p>

        <p className='text-lg md:text-xl mt-2'>
          <span className='mr-1.5'>{month}</span>
          <span className='mr-1.5'>{day}</span>
          <span
            className={`${
              weekday === '토요일'
                ? 'text-[#2b5bf7]'
                : weekday === '일요일'
                ? 'text-[#f83b3b]'
                : 'text-black'
            }`}
          >
            {weekday}
          </span>
        </p>

        <p className='mt-6 text-xl md:text-2xl font-semibold'>
          당신의 오늘 하루는 어땠나요?
        </p>
      </div>
    </>
  );
}
