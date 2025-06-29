'use client';

import { useEmotionStore } from '../stores/useEmotionStore';

type EmotionOption = {
  mood: string;
  emoji: string;
};

const EMOTIONS: EmotionOption[] = [
  { mood: '기쁨', emoji: '😊' },
  { mood: '슬픔', emoji: '😢' },
  { mood: '분노', emoji: '😡' },
  { mood: '편안함', emoji: '😌' },
  { mood: '불안', emoji: '🥶' },
  { mood: '설렘', emoji: '😳' },
];

export default function EmotionSelector() {
  const { emotion, setEmotion } = useEmotionStore();

  return (
    <div className='flex gap-2 flex-wrap'>
      {EMOTIONS.map((item) => (
        <button
          key={item.mood}
          onClick={() => setEmotion(item.mood)}
          className={`px-4 py-2 rounded-md border ${
            emotion === item.mood
              ? 'bg-blue-500 text-white'
              : 'bg-white text-black'
          }`}
        >
          {item.emoji}
        </button>
      ))}
    </div>
  );
}
