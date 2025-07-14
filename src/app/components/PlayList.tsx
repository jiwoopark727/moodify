'use client';

import { useEffect, useState } from 'react';
import { useKeywordStore } from '../stores/useKeywordStore';
import Image from 'next/image';
import Loader from './Loader';
import { useRouter } from 'next/navigation';
import { SpotifyTrack } from 'Moodify/types/spotify';

export default function PlayList() {
  const keyword = useKeywordStore((state) => state.keyword);
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
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
      }
    };
    fetchTracks();
  }, [keyword]);

  console.log(tracks);

  return (
    <div>
      {loading ? (
        <div className='flex flex-col justify-center items-center h-[60vh] w-[75vw] max-w-[373px] mx-auto'>
          <p className='text-sm md:text-base mb-4'>
            플리를 생성하는 중입니다...
          </p>
          <Loader />
        </div>
      ) : (
        <ul className='space-y-4'>
          {tracks.map((track) => (
            <li key={track.id} className='flex items-center gap-3 md:gap-4'>
              <Image
                src={track.album.images[1]?.url ?? track.album.images[0]?.url}
                alt={track.name}
                className='w-[35px] h-[35px] rounded-md'
                width={10}
                height={10}
              />
              <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col'>
                  <p className='text-sm md:text-base pl-1'>{track.name}</p>
                  <p className='text-sm md:text-base text-gray-500 pl-1'>
                    {track.artists[0].name}
                  </p>
                </div>
                <div className='shrink-0 ml-2'>
                  {track.preview_url ? (
                    <audio controls src={track.preview_url} />
                  ) : (
                    <button
                      onClick={() =>
                        handleYoutubeClick(track.name, track.artists[0].name)
                      }
                      className='text-[#4F7942] underline text-sm md:text-base cursor-pointer px-2 py-1 md:px-3 font-semibold'
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
