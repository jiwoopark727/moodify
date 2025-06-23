'use client';

import { useEffect, useState } from 'react';
import { searchYoutubeMusic } from '../hooks/searchYoutubeMusic';
import { generateMusicKeyword } from '../hooks/generateMusicKeyword';

interface Props {
  weather: string;
  emotion: string;
}

export default function MusicRecommendations({ weather, emotion }: Props) {
  const [videos, setVideos] = useState<{ videoId: string; title: string }[]>(
    []
  );
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchMusic = async () => {
      const searchKeyword = generateMusicKeyword(
        weather as any,
        emotion as any
      );
      setKeyword(searchKeyword);
      const results = await searchYoutubeMusic(searchKeyword);
      setVideos(results);
    };

    fetchMusic();
  }, [weather, emotion]);

  if (!videos.length) return <p className='mt-4'>추천 음악을 불러오는 중...</p>;

  return (
    <div className='mt-6'>
      <h2 className='text-lg font-semibold mb-4'>🎵 추천 키워드: {keyword}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {videos.map((video) => (
          <div
            key={video.videoId}
            className='overflow-hidden rounded-xl shadow-lg bg-gray-200 relative w-full max-w-[640px] pb-[56.25%]'
          >
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
