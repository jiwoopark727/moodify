export default function Welcome() {
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
    <>
      <p className='flex justify-center pt-[5vh] font-bold text-[32px] text-[#ed9d12]'>
        Good Morning
      </p>
      <p className='flex justify-center text-[20px]'>
        It&apos;s&nbsp;
        <span
          className={`${
            weekday === 'Saturday' ? 'text-[#2b5bf7]' : 'text-black'
          } ${weekday === 'Sunday' ? 'text-[#f83b3b]' : 'text-black'}`}
        >
          {weekday}
        </span>
        , {month} {day}th
      </p>
      <p className='flex justify-center pt-[7vh] text-[24px] font-semibold'>
        How’s your mood today?
      </p>
    </>
  );
}
