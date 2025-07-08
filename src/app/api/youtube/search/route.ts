import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Missing query' }, { status: 400 });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(
    query
  )}&key=${apiKey}`;

  try {
    const res = await fetch(youtubeUrl);
    const data = await res.json();

    const videoId = data.items?.[0]?.id?.videoId;

    return NextResponse.json({ videoId });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch from YouTube' },
      { status: 500 }
    );
  }
}
