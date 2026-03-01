'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  getBpmAdvice, 
  getGenresForBpm, 
  getAllMoods, 
  getBpmForMood,
  getBpmForActivity,
  GenreRecommendation 
} from '@/lib/bpm-advisor';

interface BpmAdvisorProps {
  currentBpm: number;
  onBpmSelect: (bpm: number) => void;
}

export function BpmAdvisor({ currentBpm, onBpmSelect }: BpmAdvisorProps) {
  const [advice, setAdvice] = useState(getBpmAdvice(currentBpm));
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  
  useEffect(() => {
    setAdvice(getBpmAdvice(currentBpm));
  }, [currentBpm]);
  
  const moods = getAllMoods();
  const activities = [
    'meditation', 'yoga', 'studying', 'working', 
    'workout', 'running', 'party', 'clubbing', 
    'driving', 'relaxing'
  ];
  
  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    setSelectedActivity('');
    const recommendations = getBpmForMood(mood);
    if (recommendations.length > 0) {
      onBpmSelect(recommendations[0].bpm.optimal);
    }
  };
  
  const handleActivitySelect = (activity: string) => {
    setSelectedActivity(activity);
    setSelectedMood('');
    const bpmRange = getBpmForActivity(activity);
    if (bpmRange) {
      onBpmSelect(bpmRange.optimal);
    }
  };
  
  const handleGenreSelect = (genre: GenreRecommendation) => {
    onBpmSelect(genre.bpm.optimal);
  };
  
  return (
    <div className="space-y-6">
      {/* Current BPM Analysis */}
      <Card variant="glow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎵</span>
            BPM Advisor
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 font-mono">
                  {currentBpm} BPM
                </h3>
                <p className="text-sm text-gray-400 font-mono">
                  {advice.genre}
                </p>
              </div>
              <div className="text-right">
                <div className="text-green-400 text-sm font-mono">
                  ✓ Optimal Range
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 font-mono text-sm">
              {advice.description}
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Quick Genre Suggestions */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle className="text-lg">Genres at {currentBpm} BPM</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {getGenresForBpm(currentBpm).slice(0, 4).map((genre) => (
              <button
                key={genre.genre}
                onClick={() => handleGenreSelect(genre)}
                className="text-left p-3 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-cyan-400 font-mono group-hover:text-green-400 transition-colors">
                    {genre.genre}
                  </h4>
                  <span className="text-xs text-gray-500 font-mono">
                    {genre.bpm.min}-{genre.bpm.max} BPM
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-mono">
                  {genre.description}
                </p>
                <div className="flex gap-2 mt-2">
                  {genre.mood.map(mood => (
                    <span 
                      key={mood}
                      className="text-xs px-2 py-1 rounded bg-green-400/10 text-green-400 font-mono"
                    >
                      {mood}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Browse by Mood */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle className="text-lg">Browse by Mood</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {moods.map(mood => (
              <Button
                key={mood}
                onClick={() => handleMoodSelect(mood)}
                variant={selectedMood === mood ? 'primary' : 'secondary'}
                size="sm"
                className="font-mono text-xs"
              >
                {mood}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Browse by Activity */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle className="text-lg">Browse by Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {activities.map(activity => (
              <Button
                key={activity}
                onClick={() => handleActivitySelect(activity)}
                variant={selectedActivity === activity ? 'primary' : 'secondary'}
                size="sm"
                className="font-mono text-xs capitalize"
              >
                {activity}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Alternative Genres */}
      {advice.alternatives.length > 0 && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle className="text-lg">You Might Also Like</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {advice.alternatives.map((genre) => (
                <button
                  key={genre.genre}
                  onClick={() => handleGenreSelect(genre)}
                  className="w-full text-left p-3 border border-green-400/20 rounded-lg hover:bg-green-400/10 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-green-400 font-mono">
                      {genre.genre}
                    </span>
                    <span className="text-sm text-gray-400 font-mono">
                      Try {genre.bpm.optimal} BPM
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-mono mt-1">
                    {genre.description}
                  </p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
