'use client';

import { useEffect, useState } from 'react';
import { useKeywordStore } from '../stores/useKeywordStore';
import Image from 'next/image';
import Loader from './Loader';
import { useRouter } from 'next/navigation';

export default function PlayList() {
  const keyword = useKeywordStore((state) => state.keyword);
  const [tracks, setTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleYoutubeClick = (trackName: string, trackSinger: string) => {
    router.push(
      `/playlist/${encodeURIComponent(`${trackName}-${trackSinger}`)}`
    );
  };

  useEffect(() => {
    const fetchTracks = async () => {
      if (!keyword) return;
      setLoading(true);
      try {
        const res = await fetch(
          `/api/spotify/search?q=${encodeURIComponent(keyword)}`
        );
        const items = await res.json();

        setTracks(items);
      } catch (err) {
        console.error('음악 검색 실패:', err);
      } finally {
        setLoading(false);
        console.log(tracks);
      }
    };
    fetchTracks();
  }, [keyword]);

  return (
    <div>
      <h2 className='text-[20px] font-[600] mb-4'>🎧 Playlist</h2>
      {loading ? (
        <div className='flex justify-center items-center h-[60vh] w-[373px]'>
          플리를 생성하는 중입니다...
          <Loader />
        </div>
      ) : (
        <ul className='space-y-4'>
          {tracks.map((track) => (
            <li key={track.id} className='flex items-center gap-4'>
              <Image
                src={track.album.images[1].url}
                alt={track.name}
                className='w-[35px] h-[35x]'
                width={10}
                height={10}
              />
              <div className='flex items-center justify-between w-full'>
                <div>
                  <p className='text-[16px] pl-1'>{track.name}</p>
                  <p className='text-[16px] text-gray-500 pl-1'>
                    {track.artists[0].name}
                  </p>
                </div>
                <div className='shrink-0 '>
                  {track.preview_url ? (
                    <audio controls src={track.preview_url} />
                  ) : (
                    <button
                      onClick={() =>
                        handleYoutubeClick(track.name, track.artists[0].name)
                      }
                      className='text-blue-500 underline text-[16px] cursor-pointer p-3'
                    >
                      YouTube로 듣기
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
