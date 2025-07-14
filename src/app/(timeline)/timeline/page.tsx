import Navigation from 'Moodify/app/components/Navigator';
import Timeline from 'Moodify/app/components/Timeline';

export default function TimelinePage() {
  return (
    <div className='min-h-[100dvh] w-full flex items-center justify-center'>
      <div className='w-full max-w-[450px] h-[100dvh] bg-[#fcfcfc] rounded-2xl p-4 flex flex-col items-center'>
        <Timeline />
        <Navigation />
      </div>
    </div>
  );
}
