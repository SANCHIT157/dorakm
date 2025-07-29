import React from 'react';

const VideoEpisodesPreview = ({ onMoreAboutThis }) => (
  <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-xl mb-8">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 dark:text-blue-300 mb-6 text-center border-b-4 border-blue-300 pb-4">
      Doraemon Video Episodes
    </h2>
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="md:w-1/2 p-4">
        <img
          src="https://placehold.co/600x400/ADD8E6/000000?text=Doraemon+Videos"
          alt="Doraemon Video Episodes"
          className="rounded-lg shadow-lg w-full h-auto mb-6"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/ADD8E6/000000?text=Doraemon+Videos"; }}
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Watch Your Favorite Episodes!</h3>
        <p className="text-lg leading-relaxed mb-4 line-clamp-4 text-gray-800 dark:text-gray-200">
          Dive into the world of Doraemon with a curated collection of video episodes! Browse through various seasons and pick your favorite adventures of Nobita, Doraemon, and their friends. From classic gadgets to heartwarming lessons, every episode is a journey back to childhood. Get ready to stream and relive the magic!
        </p>
        <p className="text-sm text-red-600 dark:text-red-400 font-semibold">
          Note: Video streaming from Google Drive may be unreliable due to browser security policies (CORS).
        </p>
      </div>
    </div>
    <div className="text-center mt-6">
      <button
        onClick={onMoreAboutThis}
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Watch Episodes
      </button>
    </div>
  </div>
);

export default VideoEpisodesPreview;