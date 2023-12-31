// pages/api/sitemap.xml.js
import fs from 'fs/promises';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

async function generateSitemap() {
    const baseUrl = 'https://downloadtube-iota.vercel.app'; // Replace with your website URL
    const pages = [
        '/api',
        '/about',
        '/playlistdownloader',
        '/howtouse/youtubevideo',
        '/howtouse/youtubeplaylist',
        '/disclaimer',
        '/contactus',

    ]; // Add your dynamic pages here

    const stream = new SitemapStream({ hostname: baseUrl });
    pages.forEach((page) => {
        stream.write({ url: `${baseUrl}${page}`, changefreq: 'daily', priority: 0.7 });
    });
    stream.end();

    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    const xmlString = await streamToPromise(stream).then((data) => data.toString());
    await fs.writeFile(sitemapPath, xmlString);
}

export default async function handler(req, res) {
    await generateSitemap();

    res.setHeader('Content-Type', 'application/xml');
    res.write(await fs.readFile('./public/sitemap.xml'));
    res.end();
}
