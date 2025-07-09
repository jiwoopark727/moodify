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
    <div className='w-[50%] grid grid-cols-2 gap-y-12 justify-items-center mt-[3vh]'>
      {EMOTIONS.map((item) => (
        <button
          key={item.mood}
          onClick={() => setEmotion(item.mood)}
          className={`px-[3px] pt-[3px] rounded-[30px] border-[3px] border-[#80A867] my-1 text-[36px] cursor-pointer ${
            emotion === item.mood ? 'border-[#80A867]' : 'border-transparent'
          }`}
        >
          {item.emoji}
        </button>
      ))}
    </div>
  );
}
