
import React, { useState } from 'react';
import Header from './components/Header';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="app dark">
      <Header onVideoSelect={setSelectedVideo} />
      <div className="main-content">
        <VideoPlayer video={selectedVideo} />
        <VideoList onVideoSelect={setSelectedVideo} />
      </div>
    </div>
  );
}

export default App;
