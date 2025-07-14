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
    <div className='w-[60%] max-w-sm grid grid-cols-2 gap-y-9 md:gap-y-[5.5rem] justify-items-center mt-6 md:mt-10'>
      {EMOTIONS.map((item) => (
        <button
          key={item.mood}
          onClick={() => setEmotion(item.mood)}
          className={`rounded-[28px] border-2 px-[2px] pt-[3px] text-3xl md:text-[34px] cursor-pointer transition-all duration-200 ${
            emotion === item.mood ? 'border-[#4F7942]' : 'border-transparent'
          }`}
        >
          {item.emoji}
        </button>
      ))}
    </div>
  );
}
