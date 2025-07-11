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

  if (timeline.length === 0) {
    return <p className='text-gray-500 mt-[5vh]'>아직 기록된 날이 없어요.</p>;
  }

  return (
    <div className='flex justify-end mt-[5vh] w-[85%] space-y-4 overflow-y-auto h-[75vh]'>
      <div className='w-[83%]'>
        {timeline.map((item, idx) => (
          <div
            key={idx}
            className='relative border p-3 rounded-lg shadow-sm mb-[2vh]'
          >
            {/* 오른쪽 중단 감정(이모지) */}
            <div className='absolute top-1/2 right-2 transform -translate-y-1/2 text-[40px]'>
              {EMOTIONS.map((item2) =>
                item.emotion === item2.emotion ? (
                  <span key={item2.emotion}>{item2.emoji}</span>
                ) : null
              )}
            </div>

            {/* 나머지 항목은 왼쪽 정렬 */}
            <p>📅 {item.date}</p>
            <p>
              ⏰ {item.time} 💚 {item.weather}
            </p>
            <div className='w-[75%]'>
              <div>
                {memo.map((item2, idx2) =>
                  item.date === item2.date ? (
                    <div key={idx2}>
                      <p>
                        🎵 {item2.memo.split('@')[0]}-{item2.memo.split('@')[1]}
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
