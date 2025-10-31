declare module 'spotify-web-api-js' {
  export default class SpotifyWebApi {
    constructor(options?: {
      clientId?: string;
      clientSecret?: string;
      redirectUri?: string;
    });

    setAccessToken(accessToken: string): void;
    getAccessToken(): string | null;

    getMe(): Promise<any>;
    
    getRecommendations(options: {
      seed_tracks?: string[];
      seed_artists?: string[];
      seed_genres?: string[];
      target_tempo?: number;
      min_tempo?: number;
      max_tempo?: number;
      limit?: number;
    }): Promise<{
      tracks: any[];
    }>;

    createPlaylist(userId: string, options: {
      name: string;
      description?: string;
      public?: boolean;
    }): Promise<{
      id: string;
      name: string;
      external_urls: {
        spotify: string;
      };
    }>;

    addTracksToPlaylist(playlistId: string, trackUris: string[]): Promise<any>;

    searchTracks(query: string, options?: {
      limit?: number;
      offset?: number;
    }): Promise<{
      tracks: {
        items: any[];
      };
    }>;

    getMyTopTracks(options?: {
      time_range?: 'short_term' | 'medium_term' | 'long_term';
      limit?: number;
      offset?: number;
    }): Promise<{
      items: any[];
    }>;

    getAudioFeaturesForTrack(trackId: string): Promise<{
      tempo: number;
      energy: number;
      danceability: number;
      valence: number;
      [key: string]: any;
    }>;
  }
}
