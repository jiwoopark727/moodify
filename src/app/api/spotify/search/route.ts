import { NextRequest, NextResponse } from 'next/server';
import { getSpotifyToken } from './../../../lib/spotify';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: '쿼리가 필요합니다.' }, { status: 400 });
  }

  try {
    const token = await getSpotifyToken();
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        query
      )}&type=track&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    return NextResponse.json(data.tracks.items);
  } catch (error) {
    console.log('Spotify API Error:', error);
    return NextResponse.json({ error: 'Spotify 검색 실패' }, { status: 500 });
  }
}
