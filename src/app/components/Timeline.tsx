'use client';

import { useMemoStore } from '../stores/useMemoStore';
import { useTimelineStore } from '../stores/useTimelineStore';

type Emotion = '기쁨' | '슬픔' | '우울함' | '편안함' | '설렘' | '화남' | null;

type EmotionOption = {
  emotion: Emotion;
  emoji: string;
};

const EMOTIONS: EmotionOption[] = [
  { emotion: '기쁨', emoji: '😊' },
  { emotion: '슬픔', emoji: '😢' },
  { emotion: '우울함', emoji: '😞' },
  { emotion: '편안함', emoji: '😌' },
  { emotion: '설렘', emoji: '😳' },
  { emotion: '화남', emoji: '😡' },
];

export default function Timeline() {
  const timeline = useTimelineStore((state) => state.timeline);
  const memo = useMemoStore((state) => state.memo);

  const now = new Date();

  // 2025년 7월 10일 목요일
  const todayDate = `${now.getFullYear()}년 ${
    now.getMonth() + 1
  }월 ${now.getDate()}일 ${now.toLocaleDateString('ko-KR', {
    weekday: 'long',
  })}`;

  if (timeline.length === 0) {
    return <p className='text-gray-500 mt-[5vh]'>아직 기록된 날이 없어요.</p>;
  }

  return (
    <div className='flex justify-end mt-4 md:mt-6 w-full max-w-[90%] overflow-y-auto max-h-[68vh] mx-auto'>
      <div className='w-full space-y-4'>
        {timeline
          .slice()
          .reverse()
          .map((item, idx) => (
            <div key={idx} className='flex items-start relative'>
              {/* 왼쪽 상태 표시줄 */}
              <div className='flex flex-col items-center mr-4 min-w-[24px]'>
                {/* 동그라미 점 */}
                {item.date === todayDate ? (
                  <div className='w-5 h-5 bg-[#47703a] rounded-full z-10' />
                ) : (
                  <div className='w-2.5 h-2.5 ml-[5.5px] mr-[5.5px] bg-gray-400 rounded-full z-10' />
                )}
                {/* 세로선 */}
                <div className='absolute top-[14px] w-[2px] bg-gray-400 h-full z-0' />
              </div>

              {/* 오른쪽 내용 박스 */}
              <div className='relative border p-3 rounded-lg shadow-sm w-full md:w-[calc(100%-40px)]'>
                {/* 감정 이모지 */}
                <div className='absolute top-1/2 right-2 transform -translate-y-1/2 text-3xl md:text-4xl'>
                  {EMOTIONS.map((item2) =>
                    item.emotion === item2.emotion ? (
                      <span key={item2.emotion}>{item2.emoji}</span>
                    ) : null
                  )}
                </div>

                {/* 내용 텍스트 */}
                <p className='text-sm md:text-base'>📅 {item.date}</p>
                <p className='text-sm md:text-base'>
                  {item.time} - 날씨: {item.weather}
                </p>

                <div className='w-[80%] md:w-[78%]'>
                  {memo.map((item2, idx2) =>
                    item.date === item2.date ? (
                      <div key={idx2} className='text-sm md:text-base'>
                        <p>
                          🎵 {item2.memo.split('@')[0]} -{' '}
                          {item2.memo.split('@')[1]}
                        </p>
                        {item2.memo.split('@')[2]}
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
