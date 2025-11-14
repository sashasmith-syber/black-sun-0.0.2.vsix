import { NextRequest, NextResponse } from 'next/server';
import { getRecommendations, setAccessToken } from '@/lib/spotify';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { seedTracks, targetBpm, limit } = body;

    // Get access token from cookie
    const accessToken = request.cookies.get('spotify_access_token')?.value;

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Not authenticated with Spotify' },
        { status: 401 }
      );
    }

    // Validate request
    if (!seedTracks || !Array.isArray(seedTracks) || seedTracks.length === 0) {
      return NextResponse.json(
        { error: 'Seed tracks array is required' },
        { status: 400 }
      );
    }

    // Set access token
    setAccessToken(accessToken);

    // Get recommendations
    const recommendations = await getRecommendations(
      seedTracks,
      targetBpm || 122,
      limit || 20
    );

    return NextResponse.json({
      success: true,
      recommendations,
      count: recommendations.length,
    });
  } catch (error) {
    console.error('Spotify Recommendations Error:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to get recommendations',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
