import { YouTubeSearchItem } from 'Moodify/types/youtube';

export async function searchYoutubeMusic(query: string) {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY2;
  const maxResults = 6;

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
    query
  )}&maxResults=${maxResults}&key=${API_KEY}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`YouTube API 요청 실패: ${res.status}`);
    const data = await res.json();

    if (!data.items || !Array.isArray(data.items)) {
      console.warn('YouTube API 응답에 items가 없음:', data);
      return []; // 빈 배열로 fallback
    }

    return (data.items as YouTubeSearchItem[]).map((item) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
    }));
  } catch (error) {
    console.error('YouTube API fetch 실패:', error);
    return [];
  }
}
