'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Loading } from '@/components/ui/Loading';
import { BpmAdvisor } from '@/components/features/BpmAdvisor';

interface Track {
  id: string;
  name: string;
  artist: string;
  album?: string;
  preview_url?: string;
}

export default function MusicPage() {
  const [bpm, setBpm] = useState('122');
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [showAdvisor, setShowAdvisor] = useState(true);

  const handleGetRecommendations = async () => {
    setLoading(true);
    setError('');
    setTracks([]);

    try {
      const response = await fetch('/api/spotify/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetBpm: parseInt(bpm) }),
      });

      if (!response.ok) {
        throw new Error('Failed to get recommendations');
      }

      const data = await response.json();
      setTracks(data.tracks || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePlaylist = async () => {
    if (tracks.length === 0) {
      setError('No tracks to add to playlist');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/spotify/playlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `HIKARU AI - ${bpm} BPM Mix`,
          description: `AI-generated playlist at ${bpm} BPM`,
          trackIds: tracks.map(t => t.id),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create playlist');
      }

      const data = await response.json();
      setPlaylistUrl(data.playlistUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleBpmSelectFromAdvisor = (newBpm: number) => {
    setBpm(newBpm.toString());
    setShowAdvisor(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-mono mb-4 bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            MUSIC RECOMMENDATIONS
          </h1>
          <p className="text-gray-400 font-mono">
            Get AI-powered music recommendations based on BPM
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - BPM Input and Advisor */}
          <div className="lg:col-span-1 space-y-6">
            {/* BPM Input */}
            <Card variant="glow">
              <CardHeader>
                <CardTitle>Set Target BPM</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    type="number"
                    value={bpm}
                    onChange={(e) => setBpm(e.target.value)}
                    placeholder="Enter BPM (e.g., 122)"
                    min="60"
                    max="200"
                    label="Beats Per Minute"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={handleGetRecommendations}
                      disabled={loading || !bpm}
                      size="lg"
                      className="flex-1"
                    >
                      {loading ? 'Loading...' : 'Get Tracks'}
                    </Button>
                    <Button
                      onClick={() => setShowAdvisor(!showAdvisor)}
                      variant="secondary"
                      size="lg"
                    >
                      {showAdvisor ? 'Hide' : 'Advise'}
                    </Button>
                  </div>
                  {error && (
                    <p className="text-red-400 font-mono text-sm">{error}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* BPM Advisor */}
            {showAdvisor && (
              <BpmAdvisor 
                currentBpm={parseInt(bpm) || 122} 
                onBpmSelect={handleBpmSelectFromAdvisor}
              />
            )}
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2">
            {/* Loading State */}
            {loading && (
              <div className="flex justify-center py-12">
                <Loading size="lg" text="Fetching recommendations..." />
              </div>
            )}

            {/* Tracks List */}
            {tracks.length > 0 && !loading && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold font-mono text-cyan-400">
                    Recommended Tracks ({tracks.length})
                  </h2>
                  <Button onClick={handleCreatePlaylist} variant="secondary">
                    Create Playlist
                  </Button>
                </div>

                <div className="grid gap-4">
                  {tracks.map((track, index) => (
                    <Card key={track.id} variant="bordered">
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="text-cyan-400 font-mono font-bold text-lg">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <div>
                              <h3 className="text-white font-mono font-bold">
                                {track.name}
                              </h3>
                              <p className="text-gray-400 font-mono text-sm">
                                {track.artist}
                              </p>
                              {track.album && (
                                <p className="text-gray-500 font-mono text-xs">
                                  {track.album}
                                </p>
                              )}
                            </div>
                          </div>
                          {track.preview_url && (
                            <audio
                              controls
                              className="h-8"
                              src={track.preview_url}
                            >
                              Your browser does not support audio playback.
                            </audio>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Playlist Created */}
            {playlistUrl && (
              <Card variant="glow" className="mt-8">
                <CardContent>
                  <div className="text-center py-6">
                    <h3 className="text-2xl font-bold font-mono text-green-400 mb-4">
                      ✓ Playlist Created Successfully!
                    </h3>
                    <a
                      href={playlistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button size="lg" variant="secondary">
                        Open in Spotify
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Empty State */}
            {tracks.length === 0 && !loading && !error && (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="text-gray-500 font-mono">
                    <p className="text-lg mb-2">No recommendations yet</p>
                    <p className="text-sm">Enter a BPM value and click "Get Tracks"</p>
                    <p className="text-sm mt-2">or use the BPM Advisor to help you choose</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
