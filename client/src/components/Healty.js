import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Healty.css';

const Healthy = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/videos');
        console.log('Response:', response);
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []);

  const openVideoDetails = (video) => {
    setSelectedVideo(video);
    setShowDetails(true);
  };

  const closeVideoDetails = () => {
    setShowDetails(false);
    setSelectedVideo(null);
  };

  return (
    <div className="healthy-container">
      <div className="video-grid">
        {videos.map((video) => (
          <div className="video-card" key={video._id} onClick={() => openVideoDetails(video)}>
            <img src={video.url} alt={video.title} className="video-thumbnail" />
            <h2 className="video-title">{video.title}</h2>
            <p className="video-description">{video.description}</p>
          </div>
        ))}
      </div>

      {showDetails && selectedVideo && (
        <div className="video-details">
          <button className="close-button" onClick={closeVideoDetails}>Close</button>
          <h2>{selectedVideo.title}</h2>
          <img src={selectedVideo.url} alt={selectedVideo.title} />
          <p>{selectedVideo.description}</p>
          <p>Likes: {selectedVideo.likes}</p>
        </div>
      )}
    </div>
  );
};

export default Healthy;