'use client';

import { useEffect, useState } from 'react';
import { useKeywordStore } from '../stores/useKeywordStore';
import { getSpotifyToken, searchTracks } from '../lib/spotify';
import Image from 'next/image';

export default function MusicList() {
  const keyword = useKeywordStore((state) => state.keyword);
  const [tracks, setTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTracks = async () => {
      if (!keyword) return;

      setLoading(true);
      try {
        const token = await getSpotifyToken();
        const items = await searchTracks(keyword, token);
        setTracks(items);
      } catch (error) {
        console.error('Spotify 검색 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, [keyword]);

  if (loading) return <p>음악을 검색 중입니다...</p>;

  console.log(tracks);

  return (
    <div className='mt-10'>
      <h2 className='text-lg font-semibold mb-4'>🎧 Music List</h2>
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
              <audio controls src={track.preview_url} className='mt-2' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
