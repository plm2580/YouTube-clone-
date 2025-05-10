
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from './VideoCard';

function VideoList({ onVideoSelect }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: 'snippet',
            maxResults: 6,
            key: process.env.REACT_APP_YOUTUBE_API_KEY,
            q: 'react tutorials',
            type: 'video'
          }
        });
      setVideos(res.data.items);
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-list">
      {videos.map(video => (
        <VideoCard key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
      ))}
    </div>
  );
}

export default VideoList;
