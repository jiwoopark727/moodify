import PlayList from 'Moodify/app/components/PlayList';
import Header from 'Moodify/app/components/Header';

export default function PlayListPage() {
  return (
    <div className='min-h-[100dvh] w-full flex items-center justify-center bg-gray-300'>
      <div className='w-full max-w-[450px] h-[100dvh] bg-[#fcfcfc] p-4 flex flex-col items-center'>
        {/* 헤더 */}
        <Header />
        <h2 className='text-lg md:text-xl font-semibold self-start pl-6 md:pl-8 mt-2 md:mt-4'>
          🎧 Playlist
        </h2>
        <div className='w-[87%] max-w-full flex-1 min-h-[50vh] max-h-[72vh] flex flex-col items-start overflow-y-auto mt-3 md:mt-5'>
          <PlayList />
        </div>
      </div>
    </div>
  );
}
