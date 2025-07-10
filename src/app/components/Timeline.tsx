'use client';

import { useTimelineStore } from '../stores/useTimelineStore';

export default function Timeline() {
  const timeline = useTimelineStore((state) => state.timeline);

  if (timeline.length === 0) {
    return <p className='text-gray-500 mt-[5vh]'>아직 기록된 날이 없어요.</p>;
  }

  return (
    <div className='mt-[5vh] space-y-4'>
      {timeline.map((item, idx) => (
        <div key={idx} className='border p-3 rounded-lg shadow-sm'>
          <p>📅 {item.date}</p>
          <p>🕒 {item.time}</p>
          <p>🌤️ 날씨: {item.weather}</p>
          <p>💖 감정: {item.emotion}</p>
        </div>
      ))}
    </div>
  );
}
