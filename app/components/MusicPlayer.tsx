// components/MusicPlayer.tsx
'use client';
import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const track = {
    title: 'Pasilyo',
    artist: 'SunKissed Lola',
    src: '/assets/Pasilyo.mp3',
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div 
        className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl transition-all duration-500 ease-out relative ${
          isExpanded ? 'w-[300px]' : 'w-37'
        }`}
      >
        {/* Toggle Button - Top Right Corner */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-gray-600/90 hover:bg-gray-500 flex items-center justify-center transition-all hover:scale-110 shadow-xl border-2 border-white/20"
        >
          {isExpanded ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <rect x="5" y="11" width="14" height="2" rx="1"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <rect x="5" y="11" width="14" height="2" rx="1"/>
              <rect x="11" y="5" width="2" height="14" rx="1"/>
            </svg>
          )}
        </button>

        <div className="flex items-center gap-4 ">
          {/* Album Art */}
          <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 ">
            <img 
              src="/assets/album-art.png"
              alt="Album"
              className="w-full h-full object-cover p-0.5 "
            />
          </div>

          {/* Minimized View  */}
          {!isExpanded && (
            <div className="flex gap-1">
                {/* Visualizer */}
              <div className="flex gap-1 items-end h-8">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 rounded-full transition-all ${
                      isPlaying ? 'bg-red-500 animate-music-bar' : 'bg-gray-400'
                    }`}
                    style={{
                      animationDelay: `${i * 0.15}s`,
                      height: isPlaying ? undefined : '12px'
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Expanded View */}
          {isExpanded && (
            <>
              {/* Visualizer */}
              <div className="flex gap-1 items-end h-8">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 rounded-full transition-all ${
                      isPlaying ? 'bg-red-500 animate-music-bar' : 'bg-gray-400'
                    }`}
                    style={{
                      animationDelay: `${i * 0.15}s`,
                      height: isPlaying ? undefined : '12px'
                    }}
                  />
                ))}
              </div>

              {/* Track Info */}
              <div className="flex flex-col flex-1 min-w-0">
                <h4 className="text-base font-bold text-gray-800 truncate">
                  {track.title}
                </h4>
                <p className="text-sm text-gray-500 truncate">
                  {track.artist}
                </p>
              </div>

              {/* Controls */}
              <div className="flex ]">
                {/* Previous */}
                {/* <button className="text-gray-600 hover:text-gray-800 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z"/>
                  </svg>
                </button> */}

                {/* Play/Pause */}
                <button 
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                >
                  {isPlaying ? (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <rect x="5" y="4" width="3" height="12" rx="1"/>
                      <rect x="12" y="4" width="3" height="12" rx="1"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path d="M6 4l11 6-11 6V4z"/>
                    </svg>
                  )}
                </button>

                {/* Next */}
                {/* <button className="text-gray-600 hover:text-gray-800 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 18h2V6h-2v12zM6 18l8.5-6L6 6v12z"/>
                  </svg>
                </button> */}
              </div>
            </>
          )}
        </div>
      </div>

      <audio ref={audioRef} src={track.src} loop />
    </div>
  );
}