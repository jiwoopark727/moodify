'use client';

import { useEmotionStore } from '../stores/useEmotionStore';

type Emotion = '기쁨' | '슬픔' | '우울함' | '편안함' | '설렘' | '화남' | null;

type EmotionOption = {
  mood: Emotion;
  emoji: string;
};

const EMOTIONS: EmotionOption[] = [
  { mood: '기쁨', emoji: '😊' },
  { mood: '슬픔', emoji: '😢' },
  { mood: '우울함', emoji: '😞' },
  { mood: '편안함', emoji: '😌' },
  { mood: '설렘', emoji: '😳' },
  { mood: '화남', emoji: '😡' },
];

export default function EmotionSelector() {
  const { emotion, setEmotion } = useEmotionStore();

  return (
    <div className='flex gap-2 flex-wrap'>
      {EMOTIONS.map((item) => (
        <button
          key={item.mood}
          onClick={() => setEmotion(item.mood)}
          className={`px-2 py-1 rounded-[15px] border mt-[10px] ${
            emotion === item.mood
              ? 'bg-[#565656] text-white'
              : 'bg-white text-black'
          }`}
        >
          {item.emoji}
        </button>
      ))}
    </div>
  );
}
