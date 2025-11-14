declare module 'spotify-web-api-js' {
  type Artist = { name: string };
  type Track = { id: string; name: string; artists: Artist[] };
  type RecommendationsResponse = { tracks: Track[] };

  interface SpotifyWebApiJs {
    setAccessToken(token: string): void;
    getRecommendations(options: Record<string, any>): Promise<RecommendationsResponse>;
    getMe(): Promise<{ id: string }>;
    createPlaylist(userId: string, options: { name: string; description?: string; public?: boolean }): Promise<{ id: string }>;
    addTracksToPlaylist(playlistId: string, tracks: string[]): Promise<void>;
  }

  const SpotifyWebApi: {
    new (): SpotifyWebApiJs;
    (): SpotifyWebApiJs;
  };

  export default SpotifyWebApi;
}
