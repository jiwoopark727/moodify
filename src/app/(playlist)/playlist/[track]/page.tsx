'use client';

import Header from 'Moodify/app/components/Header';
import MoodMemo from 'Moodify/app/components/MoodMemo';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TrackPage() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [viewCount, setViewCount] = useState<string | null>(null);
  const [publishedAt, setPublishedAt] = useState<string>('');

  const params = useParams();
  const track = decodeURIComponent(params.track as string).split('-');
  const trackName = track[0];
  const trackSinger = track[1];

  useEffect(() => {
    const fetchYoutubeVideo = async () => {
      const query = `${trackName} ${trackSinger}`;
      const res = await fetch(
        `/api/youtube/search?q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setVideoId(data.videoId);
      setViewCount(data.viewCount);
      setPublishedAt(data.publishedAt);
    };

    fetchYoutubeVideo();
  }, [trackName, trackSinger]);

  function formatDateToRelative(dateString: string): string {
    const now = new Date();
    const date = new Date(dateString);
    const diff = now.getTime() - date.getTime();
    const days = diff / (1000 * 60 * 60 * 24);

    if (days < 1) return '오늘';
    if (days < 7) return `${Math.floor(days)}일 전`;
    if (days < 30) return `${Math.floor(days / 7)}주 전`;
    if (days < 365) return `${Math.floor(days / 30)}개월 전`;
    return `${Math.floor(days / 365)}년 전`;
  }

  return (
    <div className='min-h-[100dvh] w-full flex items-center justify-center bg-gray-300'>
      <div className='w-full max-w-[450px] h-[100dvh] bg-[#fcfcfc] p-4 flex flex-col items-center'>
        {/* 헤더 */}
        <Header />
        {/* 유튜브 영상 */}
        {videoId ? (
          <div className='w-[95%] aspect-video mt-4 rounded-[20px]'>
            <iframe
              width='400'
              height='225'
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title='YouTube Video'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share;'
              allowFullScreen
              className='w-full h-full rounded-[20px]'
              loading='lazy'
              rel='0'
            />
          </div>
        ) : (
          <div className='w-[95%] aspect-video bg-gray-300 rounded-[20px] mt-4'></div>
        )}
        {/* 유튜브 영상 정보 */}
        <div className='w-full mt-3 px-2 mb-4'>
          <p className='text-base md:text-lg font-semibold mb-1 pl-2'>
            {trackName} - {trackSinger}
          </p>
          {viewCount && publishedAt ? (
            <span className='text-sm md:text-base text-gray-600 pl-2'>
              {Number(viewCount).toLocaleString()}
              <span className='ml-1'>회</span>&nbsp; &nbsp;
              {formatDateToRelative(publishedAt)}
            </span>
          ) : (
            <p className='w-[60%] h-[22px] bg-gray-300 rounded-[20px]'></p>
          )}
        </div>
        <div className='w-full px-2'>
          <MoodMemo trackName={trackName} trackSinger={trackSinger} />
        </div>
      </div>
    </div>
  );
}
