'use client';

import { useEffect, useState } from 'react';
import { useKeywordStore } from '../stores/useKeywordStore';
import Image from 'next/image';
import Loader from './Loader';

export default function MusicList() {
  const keyword = useKeywordStore((state) => state.keyword);
  const [tracks, setTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

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
      <h2 className='text-lg font-semibold mb-4'>🎧 Music List</h2>
      {loading ? (
        <div className='flex justify-center items-center h-[60vh] w-[373px]'>
          <Loader />
          음악을 검색하는 중입니다...
        </div>
      ) : (
        <ul className='space-y-4'>
          {tracks.map((track) => (
            <li key={track.id} className='flex items-center gap-4'>
              <Image
                src={track.album.images[1].url}
                alt={track.name}
                className='w-[36px] h-[36px]'
                width={10}
                height={10}
              />
              <div>
                <p className='text-[14px]'>{track.name}</p>
                <p className='text-[14px] text-gray-500'>
                  {track.artists[0].name}
                </p>
                {track.preview_url && (
                  <audio controls src={track.preview_url} />
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
