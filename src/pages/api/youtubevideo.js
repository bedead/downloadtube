// pages/api/youtubevideo.js
import youtubedl from 'youtube-dl-exec';

export default async function handler(req, res) {
    const { videoId } = req.query;

    try {
        if (!videoId) {
            throw new Error('Invalid video ID');
        }

        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

        const info = await youtubedl(videoUrl, {
            dumpSingleJson: true,
            noWarnings: true,
            noCheckCertificate: true,
            preferFreeFormats: true,
            youtubeSkipDashManifest: true,
        });

        // Separate video-only and audio-only formats
        const videoFormats = info.formats.filter(f => f.vcodec !== 'none' && f.acodec === 'none');
        const audioFormats = info.formats.filter(f => f.acodec !== 'none' && f.vcodec === 'none');

        res.status(200).json({ videoFormats, audioFormats });
    } catch (error) {
        console.error('Error fetching video info:', error.stderr || error);
        res.status(500).json({ error: 'Error fetching video info' });
    }
}
