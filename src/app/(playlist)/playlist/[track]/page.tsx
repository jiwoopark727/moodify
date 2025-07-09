'use client';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TrackPage() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [viewCount, setViewCount] = useState<string | null>(null);
  const [publishedAt, setPublishedAt] = useState<string>('');

  const params = useParams();
  const track = decodeURIComponent(params.track as string).split('-');
  const trackName = track[0];
  const trackSinger = track[1];

  const router = useRouter();
  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const weekday = new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(
    new Date()
  );
  const month = new Intl.DateTimeFormat('ko-KR', { month: 'short' }).format(
    new Date()
  );
  const day = new Intl.DateTimeFormat('ko-KR', { day: 'numeric' }).format(
    new Date()
  );

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
    <div className='w-screen h-svh flex items-center justify-center'>
      <div className='w-[450px] h-[100vh] bg-[#fff] rounded-[70px] p-4 flex flex-col items-center'>
        {/* 헤더 */}
        <div className='w-full relative flex items-center justify-between text-xl font-medium mt-[5vh]'>
          <span
            onClick={handleBackClick}
            className='ml-1 cursor-pointer p-2 text-2xl'
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <div className='absolute left-1/2 -translate-x-1/2'>
            <span className='mr-1.5'>{month}</span>
            <span className='mr-1.5'>{day}</span>
            <span
              className={
                weekday === '토요일'
                  ? 'text-[#2b5bf7]'
                  : weekday === '일요일'
                  ? 'text-[#f83b3b]'
                  : 'text-black'
              }
            >
              {weekday}
            </span>
          </div>
        </div>
        {videoId ? (
          <iframe
            width='400'
            height='225'
            src={`https://www.youtube.com/embed/${videoId}`}
            title='YouTube Video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share;'
            allowFullScreen
            className='rounded-[20px] mt-[3vh]'
            loading='lazy'
            rel='0'
          />
        ) : (
          <div className='w-[400px] h-[225px] bg-gray-300 rounded-[20px] mt-[3vh]'></div>
        )}
        <div className='w-full mt-[1.5vh] px-4 mb-[2vh]'>
          <p className='text-[16px] text-left mb-[0.5vh]'>
            {trackName} - {trackSinger}
          </p>
          {viewCount && publishedAt ? (
            <span className='text-[16px] text-gray-600'>
              {Number(viewCount).toLocaleString()}
              <span className='ml-[2px]'>회</span>&nbsp; &nbsp;
              {formatDateToRelative(publishedAt)}
            </span>
          ) : (
            <p className='w-[225px] h-[22px] bg-gray-300 rounded-[20px]'></p>
          )}
          <div>
            <textarea
              placeholder='Write down how you felt while listening to this music...'
              className='w-full mt-4 p-2 border rounded-md'
              rows={10}
            />
            <div className='flex justify-center'>
              <button className='mt-[1vh] cursor-pointer border-2 border-[#ed9d12] px-4 py-2 rounded-xl hover:bg-[#ed9d12] hover:text-[#fff]'>
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
