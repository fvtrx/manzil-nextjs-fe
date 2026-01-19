import { AudioState } from "@/lib/types";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface ComponentProps {
  progressPercentage: number;
  audioState: AudioState;
  previousVerse: () => void;
  nextVerse: () => void;
  toggleAudio: () => void;
  formatTime: (time: number) => string;
}
export function AudioPlayer({
  progressPercentage,
  audioState,
  previousVerse,
  nextVerse,
  toggleAudio,
  formatTime,
}: ComponentProps) {
  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      <div className="space-y-2">
        <Progress value={progressPercentage} className="h-2" />
        <div className="flex justify-between text-xs text-emerald-600">
          <span>{formatTime(audioState.currentTime)}</span>
          <span>{formatTime(audioState.duration)}</span>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={previousVerse}
          className="border-emerald-200 hover:bg-emerald-50"
        >
          <SkipBack className="h-4 w-4" />
        </Button>

        <Button
          onClick={toggleAudio}
          disabled={audioState.isLoading}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full shadow-lg"
        >
          {audioState.isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
          ) : audioState.isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={nextVerse}
          className="border-emerald-200 hover:bg-emerald-50"
        >
          <SkipForward className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
