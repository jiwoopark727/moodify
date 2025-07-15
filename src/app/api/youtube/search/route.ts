import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Missing query' }, { status: 400 });
  }

  const apiKey = process.env.YOUTUBE_API_KEY2;
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(
    query
  )}&key=${apiKey}`;

  try {
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();

    const videoId = searchData.items?.[0]?.id?.videoId;

    if (!videoId) {
      return NextResponse.json({ error: 'No video found' }, { status: 404 });
    }

    // YouTube Videos API 호출 (videoId를 통해 상세 정보 조회)
    const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`;
    const detailsRes = await fetch(detailsUrl);
    const detailsData = await detailsRes.json();

    const video = detailsData.items?.[0];
    const viewCount = video?.statistics?.viewCount;
    const publishedAt = video?.snippet?.publishedAt;

    return NextResponse.json({
      videoId,
      viewCount,
      publishedAt,
    });
  } catch (error) {
    console.error('YouTube API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch from YouTube' },
      { status: 500 }
    );
  }
}
