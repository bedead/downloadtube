// components/PlaylistDownloader.js
'use client'
import Image from 'next/image';
import { useState } from 'react';


const PlaylistDownloader = () => {
    const [playlistId, setPlaylistId] = useState('');
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    const handleFetchPlaylist = async () => {
        try {
            const response = await fetch(`/api/playlist?playlistId=${playlistId}`);

            if (!response.ok) {
                throw new Error('Failed to fetch playlist info');
            }

            const data = await response.json();

            if (data.videos && data.videos.length > 0) {
                setVideos(data.videos);
                setError(null);
            } else {
                setError('No videos found in the playlist');
            }
        } catch (error) {
            console.error('Error fetching playlist info:', error);
            setError('Error fetching playlist info');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter YouTube Playlist ID"
                value={playlistId}
                onChange={(e) => setPlaylistId(e.target.value)}
            />
            <button onClick={handleFetchPlaylist}>Fetch Playlist</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <ul>
                {videos.map((video) => (
                    <li key={video.videoId}>
                        <a href={video.url} target="_blank" rel="noopener noreferrer">
                            <Image src={video.thumbnail} alt={video.title} />
                            {video.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlaylistDownloader;
