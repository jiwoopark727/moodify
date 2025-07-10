import Navigation from 'Moodify/app/components/Navigator';
import Timeline from 'Moodify/app/components/Timeline';

export default function TimelinePage() {
  return (
    <div className='w-screen h-svh flex items-center justify-center'>
      <div className='w-[450px] h-[100vh] bg-[#fcfcfc] rounded-[70px] p-4 flex flex-col items-center'>
        <Timeline />
        <Navigation />
      </div>
    </div>
  );
}
