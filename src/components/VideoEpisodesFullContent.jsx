import React, { useState, useEffect } from 'react';
import { VIDEO_SEASONS_DATA } from '../data/videoEpisodesData'; // Import the video data

const VideoEpisodesFullContent = () => {
  // State to manage the currently selected season
  const [selectedSeason, setSelectedSeason] = useState(VIDEO_SEASONS_DATA[0]?.season || '');
  // State to manage the currently selected episode for playback
  const [selectedEpisode, setSelectedEpisode] = useState(VIDEO_SEASONS_DATA[0]?.episodes[0] || null);

  // Effect to set initial selected season and episode on component mount
  useEffect(() => {
    if (VIDEO_SEASONS_DATA.length > 0) {
      setSelectedSeason(VIDEO_SEASONS_DATA[0].season);
      if (VIDEO_SEASONS_DATA[0].episodes.length > 0) {
        setSelectedEpisode(VIDEO_SEASONS_DATA[0].episodes[0]);
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Filter episodes based on the selected season
  const currentSeasonEpisodes = VIDEO_SEASONS_DATA.find(
    (s) => s.season === selectedSeason
  )?.episodes || [];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Column: Season and Episode List */}
      <div className="lg:w-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg flex-shrink-0">
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b pb-2">Seasons</h3>
        <div className="mb-6 max-h-48 overflow-y-auto custom-scrollbar"> {/* Scrollable seasons list */}
          {VIDEO_SEASONS_DATA.map((s) => (
            <button
              key={s.season}
              onClick={() => {
                setSelectedSeason(s.season);
                setSelectedEpisode(s.episodes[0] || null); // Select the first episode of the newly selected season
              }}
              className={`block w-full text-left p-2 rounded-lg mb-2 transition-colors duration-200
                ${selectedSeason === s.season
                  ? 'bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-white font-semibold'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600'
                }`}
            >
              {s.season}
            </button>
          ))}
        </div>

        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b pb-2">Episodes ({selectedSeason})</h3>
        <div className="max-h-96 overflow-y-auto custom-scrollbar"> {/* Scrollable episodes list */}
          {currentSeasonEpisodes.map((episode) => (
            <button
              key={episode.id}
              onClick={() => setSelectedEpisode(episode)}
              className={`block w-full text-left p-2 rounded-lg mb-2 transition-colors duration-200
                ${selectedEpisode?.id === episode.id
                  ? 'bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-white font-semibold'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600'
                }`}
            >
              {episode.title}
            </button>
          ))}
        </div>
      </div>

      {/* Right Column: Video Player and Episode Details */}
      <div className="lg:w-3/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col">
        {selectedEpisode ? (
          <>
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">{selectedEpisode.title}</h3>
            {/* Video Player */}
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
              {/* IMPORTANT: Direct Google Drive embeds are highly unreliable due to CORS.
                  You will likely encounter "Cross-Origin Read Blocking" errors, and videos may not play.
                  For reliable streaming, YouTube, Vimeo, or a dedicated video hosting service is recommended.
              */}
              <iframe
                width="100%"
                height="100%"
                src={selectedEpisode.videoUrl}
                title={selectedEpisode.title}
                frameBorder="0"
                // The 'allow' attribute enables features like autoplay, fullscreen, etc.
                // 'web-share' is included for potential future sharing features within the iframe.
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen // Allows the video to go full screen
                className="absolute top-0 left-0 w-full h-full" // Ensures the iframe fills its container
              ></iframe>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base flex-grow">
              {selectedEpisode.description}
            </p>
          </>
        ) : (
          <p className="text-gray-700 dark:text-gray-300 text-center py-10">Select an episode to start watching!</p>
        )}
      </div>
    </div>
  );
};

export default VideoEpisodesFullContent;