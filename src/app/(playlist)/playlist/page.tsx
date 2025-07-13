import PlayList from 'Moodify/app/components/PlayList';
import Header from 'Moodify/app/components/Header';

export default function PlayListPage() {
  return (
    <div className='w-screen h-svh flex items-center justify-center'>
      <div className='w-[450px] h-[100vh] bg-[#fcfcfc] rounded-[70px] p-4 flex flex-col items-center'>
        {/* 헤더 */}
        <Header />
        <h2 className='text-[20px] font-[600] self-start pl-[1.2vw]'>
          🎧 Playlist
        </h2>
        <div className='w-[90%] h-[72vh] flex flex-col items-start overflow-y-auto mt-5'>
          <PlayList />
        </div>
      </div>
    </div>
  );
}
