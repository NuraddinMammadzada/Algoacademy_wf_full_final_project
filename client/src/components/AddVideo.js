import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/AddVideo.css';

const AddVideo = ({ addVideo }) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addVideo(title, url, description);
        navigate('/videos');
    };

    return (
        <div className="add-video-page">
            <h2>Add Video</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="Video URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddVideo;
