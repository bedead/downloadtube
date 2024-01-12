// pages/api/youtubeinfo.js
import ytdl from 'ytdl-core';

export default async function handler(req, res) {
    const { videoUrl } = req.query;

    try {
        const info = await ytdl.getInfo(videoUrl);
        const title = info.videoDetails.title;
        const thumbnail = info.videoDetails.thumbnails[0].url;

        res.status(200).json({ title, thumbnail });
    } catch (error) {
        console.error('Error fetching video info:', error);
        res.status(500).json({ error: 'Error fetching video info' });
    }
}
