import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Healty.css';

const Healthy = () => {
    const [videos, setVideos] = useState([
        // Example videos
        { id: 1, title: 'Video 1', url: 'https://example.com/video1.mp4', description: 'Description of Video 1', likes: 0, comments: [] },
        { id: 2, title: 'Video 2', url: 'https://example.com/video2.mp4', description: 'Description of Video 2', likes: 0, comments: [] },
    ]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const addVideo = (title, url, description) => {
        const newVideo = { id: videos.length + 1, title, url, description, likes: 0, comments: [] };
        setVideos([...videos, newVideo]);
    };

    const openVideoDetails = (video) => {
        setSelectedVideo(video);
        setShowDetails(true);
    };

    const closeVideoDetails = () => {
        setShowDetails(false);
        setSelectedVideo(null);
    };

    const likeVideo = (id) => {
        setVideos(videos.map(video => video.id === id ? { ...video, likes: video.likes + 1 } : video));
    };

    const addComment = (id, comment) => {
        setVideos(videos.map(video => video.id === id ? { ...video, comments: [...video.comments, comment] } : video));
    };

    return (
        <div className="video-page">
            <div className="video-list">
                <h2>Videos</h2>
                <div className="grid-container">
                    {videos.map((video) => (
                        <div key={video.id} className="video-item" onClick={() => openVideoDetails(video)}>
                            <video src={video.url} controls />
                            <h3>{video.title}</h3>
                        </div>
                    ))}
                </div>
                <Link to="/add-video">
                    <button>Add Video</button>
                </Link>
            </div>
            {showDetails && selectedVideo && (
                <div className="video-details-modal">
                    <div className="video-details">
                        <h2>{selectedVideo.title}</h2>
                        <video src={selectedVideo.url} controls />
                        <p>{selectedVideo.description}</p>
                        <button onClick={() => likeVideo(selectedVideo.id)}>Like ({selectedVideo.likes})</button>
                        <div className="comments-section">
                            <h3>Comments</h3>
                            {selectedVideo.comments.map((comment, index) => (
                                <p key={index}>{comment}</p>
                            ))}
                            <textarea placeholder="Add a comment" onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    addComment(selectedVideo.id, e.target.value);
                                    e.target.value = '';
                                }
                            }}></textarea>
                        </div>
                        <button onClick={closeVideoDetails}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Healthy;
