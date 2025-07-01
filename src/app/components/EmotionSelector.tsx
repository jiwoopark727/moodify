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
    <div className='w-[60%] grid grid-cols-2 gap-y-12 justify-items-center mt-[50px]'>
      {EMOTIONS.map((item) => (
        <button
          key={item.mood}
          onClick={() => setEmotion(item.mood)}
          className={`px-2 py-1 rounded-[15px] border mx-2 my-2 text-[36px] ${
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
