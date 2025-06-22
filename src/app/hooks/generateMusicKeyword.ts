type Weather =
  | '맑음'
  | '흐림'
  | '비'
  | '눈'
  | '뇌우'
  | '이슬비'
  | '엷은안개'
  | '안개';
type Emotion = '기쁨' | '슬픔' | '우울함' | '편안함' | '설렘' | '화남';

export function generateMusicKeyword(
  weather: Weather,
  emotion: Emotion
): string {
  // 날씨에 따른 검색 키워드 매핑
  const weatherKeywordMap: Record<Weather, string[]> = {
    맑음: ['sunny', 'bright'],
    흐림: ['cloudy', 'gray'],
    비: ['rainy', 'wet'],
    눈: ['snowy', 'cold'],
    뇌우: ['stormy'],
    이슬비: ['light rain'],
    엷은안개: ['misty'],
    안개: ['foggy'],
  };
  // 기분에 따른 검색 키워드 매핑
  const emotionKeywordMap: Record<Emotion, string[]> = {
    기쁨: ['happy', 'upbeat', 'fun'],
    슬픔: ['sad', 'melancholy'],
    우울함: ['lofi', 'chill', 'emo'],
    편안함: ['calm', 'relaxing', 'ambient'],
    설렘: ['romantic', 'dreamy', 'feel good'],
    화남: ['angry', 'hardcore', 'intense'],
  };

  const weatherWords = weatherKeywordMap[weather] ?? [];
  const emotionWords = emotionKeywordMap[emotion] ?? [];

  // 키워드 조합을 무작위로 하나 선택
  const keyword = `${emotionWords[0]} ${weatherWords[0]} music`;

  return keyword;
}
