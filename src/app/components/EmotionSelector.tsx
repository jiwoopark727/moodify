'use client';

import { useState } from 'react';

const EMOTIONS = [
  { emotion: '기쁨', emoji: '😊' },
  { emotion: '슬픔', emoji: '😢' },
  { emotion: '우울함', emoji: '😞' },
  { emotion: '편안함', emoji: '😌' },
  { emotion: '설렘', emoji: '😳' },
  { emotion: '화남', emoji: '🤯' },
];

export default function EmotionSelector({
  onSelect,
}: {
  onSelect: (emotion: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (emotion: string) => {
    setSelected(emotion);
    onSelect(emotion);
  };

  return (
    <div className='flex flex-wrap gap-2 mt-4'>
      <p>지금 기분이 어떠신가요??</p>
      <div>
        {EMOTIONS.map((emotion) => (
          <button
            key={emotion.emotion}
            onClick={() => handleSelect(emotion.emotion)}
            className={`px-2 py-1 rounded-full text-md border 
            ${
              selected === emotion.emotion
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {emotion.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
