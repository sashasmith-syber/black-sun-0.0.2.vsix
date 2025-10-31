import SpotifyWebApi from 'spotify-web-api-js';

// Initialize Spotify API client
const spotifyApi = new SpotifyWebApi();

export interface Track {
  id: string;
  name: string;
  artist: string;
  album?: string;
  duration_ms?: number;
  preview_url?: string | null;
  external_urls?: {
    spotify: string;
  };
  images?: Array<{
    url: string;
    height: number;
    width: number;
  }>;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  url: string;
  tracks: Track[];
}

/**
 * Set the access token for Spotify API
 * @param token - Spotify access token
 */
export function setAccessToken(token: string): void {
  spotifyApi.setAccessToken(token);
}

/**
 * Get the current access token
 * @returns Current access token or null
 */
export function getAccessToken(): string | null {
  return spotifyApi.getAccessToken();
}

/**
 * Get music recommendations based on seed tracks and target BPM
 * @param seedTracks - Array of track IDs to base recommendations on
 * @param targetBpm - Target tempo in BPM (default: 122)
 * @param limit - Number of recommendations (default: 20)
 * @returns Array of recommended tracks
 */
export async function getRecommendations(
  seedTracks: string[],
  targetBpm: number = 122,
  limit: number = 20
): Promise<Track[]> {
  try {
    const recommendations = await spotifyApi.getRecommendations({
      seed_tracks: seedTracks.slice(0, 5), // Spotify allows max 5 seeds
      target_tempo: targetBpm,
      limit,
      min_tempo: targetBpm - 10,
      max_tempo: targetBpm + 10,
    });

    return recommendations.tracks.map((track: any) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0]?.name || 'Unknown Artist',
      album: track.album?.name,
      duration_ms: track.duration_ms,
      preview_url: track.preview_url,
      external_urls: track.external_urls,
      images: track.album?.images,
    }));
  } catch (error) {
    console.error('Spotify Recommendations Error:', error);
    throw new Error('Failed to get recommendations from Spotify');
  }
}

/**
 * Create a new playlist and add tracks to it
 * @param name - Playlist name
 * @param description - Playlist description
 * @param trackIds - Array of track IDs to add
 * @param isPublic - Whether the playlist should be public (default: true)
 * @returns Playlist URL
 */
export async function createPlaylist(
  name: string,
  description: string,
  trackIds: string[],
  isPublic: boolean = true
): Promise<string> {
  try {
    // Get current user
    const me = await spotifyApi.getMe();
    
    // Create playlist
    const playlist = await spotifyApi.createPlaylist(me.id, {
      name,
      description,
      public: isPublic,
    });

    // Add tracks to playlist
    if (trackIds.length > 0) {
      const trackUris = trackIds.map(id => `spotify:track:${id}`);
      await spotifyApi.addTracksToPlaylist(playlist.id, trackUris);
    }

    return `https://open.spotify.com/playlist/${playlist.id}`;
  } catch (error) {
    console.error('Spotify Create Playlist Error:', error);
    throw new Error('Failed to create playlist on Spotify');
  }
}

/**
 * Search for tracks by query
 * @param query - Search query
 * @param limit - Number of results (default: 20)
 * @returns Array of tracks
 */
export async function searchTracks(
  query: string,
  limit: number = 20
): Promise<Track[]> {
  try {
    const results = await spotifyApi.searchTracks(query, { limit });

    return results.tracks.items.map((track: any) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0]?.name || 'Unknown Artist',
      album: track.album?.name,
      duration_ms: track.duration_ms,
      preview_url: track.preview_url,
      external_urls: track.external_urls,
      images: track.album?.images,
    }));
  } catch (error) {
    console.error('Spotify Search Error:', error);
    throw new Error('Failed to search tracks on Spotify');
  }
}

/**
 * Get user's top tracks
 * @param timeRange - Time range for top tracks ('short_term', 'medium_term', 'long_term')
 * @param limit - Number of tracks (default: 20)
 * @returns Array of top tracks
 */
export async function getTopTracks(
  timeRange: 'short_term' | 'medium_term' | 'long_term' = 'medium_term',
  limit: number = 20
): Promise<Track[]> {
  try {
    const results = await spotifyApi.getMyTopTracks({
      time_range: timeRange,
      limit,
    });

    return results.items.map((track: any) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0]?.name || 'Unknown Artist',
      album: track.album?.name,
      duration_ms: track.duration_ms,
      preview_url: track.preview_url,
      external_urls: track.external_urls,
      images: track.album?.images,
    }));
  } catch (error) {
    console.error('Spotify Top Tracks Error:', error);
    throw new Error('Failed to get top tracks from Spotify');
  }
}

/**
 * Get track audio features (including BPM/tempo)
 * @param trackId - Track ID
 * @returns Audio features including tempo
 */
export async function getTrackFeatures(trackId: string): Promise<any> {
  try {
    return await spotifyApi.getAudioFeaturesForTrack(trackId);
  } catch (error) {
    console.error('Spotify Track Features Error:', error);
    throw new Error('Failed to get track features from Spotify');
  }
}

/**
 * Get current user's profile
 * @returns User profile
 */
export async function getCurrentUser(): Promise<any> {
  try {
    return await spotifyApi.getMe();
  } catch (error) {
    console.error('Spotify Get User Error:', error);
    throw new Error('Failed to get user profile from Spotify');
  }
}

/**
 * Exchange authorization code for access token
 * This should be called from the server-side API route
 * @param code - Authorization code from OAuth callback
 * @returns Access token and refresh token
 */
export async function exchangeCodeForToken(code: string): Promise<{
  access_token: string;
  refresh_token: string;
  expires_in: number;
}> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error('Spotify credentials not configured');
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to exchange code for token');
  }

  return response.json();
}

/**
 * Refresh the access token
 * @param refreshToken - Refresh token
 * @returns New access token
 */
export async function refreshAccessToken(refreshToken: string): Promise<{
  access_token: string;
  expires_in: number;
}> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Spotify credentials not configured');
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to refresh access token');
  }

  return response.json();
}
