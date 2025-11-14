// lib/spotify.ts
import SpotifyWebApi from 'spotify-web-api-js';
import process from 'process';

const spotifyApi = new SpotifyWebApi
export async function getRecommendations(seedTracks: string[], targetBpm = 122) {
  // Fetch access token via PKCE or server-side (secure in prod)
  const token = await getAccessToken();  // Impl: OAuth flow
  spotifyApi.setAccessToken(token);
  const recs = await spotifyApi.getRecommendations({ seed_tracks: seedTracks, target_tempo: targetBpm });
  return recs.tracks.map((track: any) => ({ id: track.id, name: track.name, artist: track.artists[0].name }));
}

export async function createPlaylist(name: string, description: string, trackIds: string[]) {
  const me = await spotifyApi.getMe();
  const playlist = await spotifyApi.createPlaylist(me.id, { name, description, public: true });
  await spotifyApi.addTracksToPlaylist(playlist.id, trackIds);
  return `https://open.spotify.com/playlist/${playlist.id}`;
}

// OAuth helper (from Vercel env)
async function getAccessToken() {
  // Server-side exchange (use in API routes)
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ grant_type: 'client_credentials' }),  // Or refresh_token for user
  });
  const data = await response.json();
  return data.access_token;
}