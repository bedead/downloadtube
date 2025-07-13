// pages/api/youtubeinfo.js
import youtubedl from 'youtube-dl-exec';

export default async function handler(req, res) {
    const { videoUrl } = req.query;

    if (!videoUrl) {
        return res.status(400).json({ error: 'Missing videoUrl parameter' });
    }

    try {
        const info = await youtubedl(videoUrl, {
            dumpSingleJson: true,
            noWarnings: true,
            noCheckCertificate: true,
            preferFreeFormats: true,
            youtubeSkipDashManifest: true,
        });

        const title = info.title;
        const thumbnail = info.thumbnail;

        res.status(200).json({ title, thumbnail });
    } catch (error) {
        console.error('Error fetching video info:', error.stderr || error);
        res.status(500).json({ error: 'Error fetching video info' });
    }
}
