export default function Welcome() {
  const now = new Date();
  const hour = now.getHours();

  let greeting = '좋은 아침이에요';
  if (hour >= 18) {
    greeting = '아름다운 밤이에요';
  } else if (hour >= 15) {
    greeting = '평화로운 저녁이에요';
  } else if (hour >= 12) {
    greeting = '따사로운 오후에요';
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
      <p className='flex justify-center mt-[5vh] font-bold text-[32px] text-[#ed9d12]'>
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
      <p className='flex justify-center mt-[6vh] text-[24px] font-semibold'>
        당신의 오늘 하루는 어땠나요?
      </p>
    </>
  );
}
