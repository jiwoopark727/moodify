import PlayList from 'Moodify/app/components/PlayList';
import Header from 'Moodify/app/components/Header';

export default function PlayListPage() {
  return (
    <div className='min-h-[100dvh] w-full flex items-center justify-center'>
      <div className='w-full max-w-[450px] h-[100dvh] bg-[#fcfcfc] rounded-2xl p-4 flex flex-col items-center'>
        {/* 헤더 */}
        <Header />
        <h2 className='text-[20px] font-[600] self-start pl-[4vw] mt-[2vh]'>
          🎧 Playlist
        </h2>
        <div className='w-[90%] h-[70vh] flex flex-col items-start overflow-y-auto mt-5'>
          <PlayList />
        </div>
      </div>
    </div>
  );
}
