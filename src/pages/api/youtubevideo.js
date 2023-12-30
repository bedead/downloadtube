// pages/api/youtubevideo.js
import ytdl from 'ytdl-core';

export default async function handler(req, res) {
    const { videoId } = req.query;

    try {
        if (!videoId) {
            throw new Error('Invalid video ID');
        }

        const info = await ytdl.getInfo(videoId);

        const videoFormats = ytdl.filterFormats(info.formats, 'video');
        const audioFormats = ytdl.filterFormats(info.formats, 'audio');

        res.status(200).json({ videoFormats, audioFormats });
    } catch (error) {
        console.error('Error fetching video info:', error);
        res.status(500).json({ error: 'Error fetching video info' });
    }
}
