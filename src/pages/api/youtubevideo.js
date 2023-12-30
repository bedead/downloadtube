// pages/api/youtube.js
import ytdl from 'ytdl-core';

export default async function handler(req, res) {
    const { videoId } = req.query;

    try {
        const info = await ytdl.getInfo(videoId);
        const formats = ytdl.filterFormats(info.formats, 'videoandaudio');

        res.status(200).json({ formats });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching video info' });
    }
}
