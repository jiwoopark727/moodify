'use client';

import { useMemoStore } from '../stores/useMemoStore';
import { useTimelineStore } from '../stores/useTimelineStore';

export default function Timeline() {
  const timeline = useTimelineStore((state) => state.timeline);
  const memo = useMemoStore((state) => state.memo);

  if (timeline.length === 0) {
    return <p className='text-gray-500 mt-[5vh]'>아직 기록된 날이 없어요.</p>;
  }

  return (
    <div className='mt-[5vh] space-y-4'>
      {timeline.map((item) => (
        <div key={item.date} className='border p-3 rounded-lg shadow-sm'>
          <p>📅 {item.date}</p>
          <p>🕒 {item.time}</p>
          <p>🌤️ 날씨: {item.weather}</p>
          <p>💖 감정: {item.emotion}</p>
          <p>
            {memo.map((item2) => (
              <p key={item2.date}>
                {item.date === item2.date ? <>메모: {item2.memo}</> : null}
              </p>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
