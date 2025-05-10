
import React from 'react';

function VideoPlayer({ video }) {
  if (!video) return <div>Search and select a video</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-player">
      <iframe src={videoSrc} frameBorder="0" allowFullScreen title="Video player"></iframe>
      <h3>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
    </div>
  );
}

export default VideoPlayer;
