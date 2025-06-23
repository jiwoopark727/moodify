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

function getRandomKeyword(arr: string[]): string {
  if (arr.length === 0) return '';
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function generateMusicKeyword(
  weather: Weather,
  emotion: Emotion
): string {
  // 날씨에 따른 검색 키워드 매핑
  const weatherKeywordMap: Record<Weather, string[]> = {
    맑음: ['sunny', 'bright', 'clear sky'],
    흐림: ['cloudy', 'gray', 'overcast'],
    비: ['rainy', 'wet', 'drizzle'],
    눈: ['snowy', 'cold', 'white'],
    뇌우: ['stormy', 'electric', 'loud'],
    이슬비: ['light rain', 'misty'],
    엷은안개: ['misty', 'hazy'],
    안개: ['foggy', 'blurry'],
  };
  // 기분에 따른 검색 키워드 매핑
  const emotionKeywordMap: Record<Emotion, string[]> = {
    기쁨: ['happy', 'upbeat', 'fun'],
    슬픔: ['sad', 'melancholy', 'blue'],
    우울함: ['lofi', 'emo', 'moody'],
    편안함: ['calm', 'relaxing', 'ambient', 'chill'],
    설렘: ['romantic', 'dreamy', 'feel good', 'hopeful'],
    화남: ['angry', 'hardcore', 'intense'],
  };

  // 추후 장르도 선택할 수 있게 하면 괜찮을듯?
  // const GenreKeywordArray = ['music', 'playlist', 'beats', 'mix'];

  const weatherWords = getRandomKeyword(weatherKeywordMap[weather] ?? []);
  const emotionWords = getRandomKeyword(emotionKeywordMap[emotion] ?? []);
  // const genreWords = getRandomKeyword(GenreKeywordArray);

  // 키워드 조합을 무작위로 하나 선택
  const keyword = `${emotionWords} ${weatherWords} mood playlist`.trim();

  return keyword;
}
