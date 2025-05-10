
import React, { useState } from 'react';

function Header({ onVideoSelect }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${API_KEY}&type=video`
    );
    const data = await response.json();
    if (data.items.length > 0) {
      onVideoSelect(data.items[0]);
    }
  };

  return (
    <header>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search videos..."
      />
      <button onClick={handleSearch}>Search</button>
    </header>
  );
}

export default Header;
