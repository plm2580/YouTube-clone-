
import React from 'react';

function VideoCard({ video, onVideoSelect }) {
  const { thumbnails, title } = video.snippet;
  return (
    <div className="video-card" onClick={() => onVideoSelect(video)}>
      <img src={thumbnails.medium.url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default VideoCard;
