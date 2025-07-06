import Navigation from 'Moodify/app/components/Navigation';

export default function Music() {
  return (
    <div className='w-screen h-svh flex items-center justify-center'>
      <div className='w-[450px] h-[100vh] bg-[#fff] rounded-[70px] p-4 flex flex-col items-center'>
        <Navigation />
      </div>
    </div>
  );
}
