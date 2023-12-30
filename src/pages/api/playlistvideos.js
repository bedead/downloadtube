// pages/api/playlist.js
import ytdl from 'ytdl-core';

export default async function handler(req, res) {
    const { playlistId } = req.query;

    try {
        if (!playlistId) {
            throw new Error('Invalid playlist ID');
        }

        // Fetch playlist information using ytdl-core
        const playlistInfo = await ytdl.getPlaylist(playlistId);

        // Extract video information from the playlist
        const videos = playlistInfo.items.map(video => ({
            title: video.title,
            videoId: video.id,
            url: `https://www.youtube.com/watch?v=${video.id}`,
            thumbnail: video.thumbnail,
        }));

        res.status(200).json({ videos });
    } catch (error) {
        console.error('Error fetching playlist info:', error);
        res.status(500).json({ error: 'Error fetching playlist info' });
    }
}
