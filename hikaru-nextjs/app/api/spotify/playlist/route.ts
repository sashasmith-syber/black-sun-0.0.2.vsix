import { NextRequest, NextResponse } from 'next/server';
import { createPlaylist, setAccessToken } from '@/lib/spotify';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, trackIds, isPublic } = body;

    // Get access token from cookie
    const accessToken = request.cookies.get('spotify_access_token')?.value;

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Not authenticated with Spotify' },
        { status: 401 }
      );
    }

    // Validate request
    if (!name || typeof name !== 'string') {
      return NextResponse.json(
        { error: 'Playlist name is required' },
        { status: 400 }
      );
    }

    if (!trackIds || !Array.isArray(trackIds) || trackIds.length === 0) {
      return NextResponse.json(
        { error: 'Track IDs array is required' },
        { status: 400 }
      );
    }

    // Set access token
    setAccessToken(accessToken);

    // Create playlist
    const playlistUrl = await createPlaylist(
      name,
      description || `Created by HIKARU AI - ${new Date().toLocaleDateString()}`,
      trackIds,
      isPublic !== false
    );

    return NextResponse.json({
      success: true,
      playlistUrl,
      message: 'Playlist created successfully',
    });
  } catch (error) {
    console.error('Spotify Create Playlist Error:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to create playlist',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
