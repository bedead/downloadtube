import { styles } from "@/app/style";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

export const metadata = {
    title: 'DownloadTube - How to use Video Downloader',
    description: '',
}

function GuideComp() {
    return (
        <div className={`${styles.padding} min-h-screen md:px-96 space-y-10 text-left`} >
            <h1 className="font-bold text-3xl text-center">DownloadTube: YouTube Video Downloader Guide</h1>
            <div>
                <h2 className="font-semibold text-2xl ">1. Visit the DownloadTube Website:</h2>
                <p>Open your web browser and go to the DownloadTube website.</p>
            </div>
            <div>
                <h2 className="font-semibold text-2xl ">2. Enter Video URL:</h2>
                <p>On the homepage, you'll find an input field. Paste the YouTube video URL that you want to download into this field.</p>
            </div>
            <div>
                <h2 className="font-semibold text-2xl ">3. Click &quot;Download&quot;:</h2>
                <p>Once you've entered the video URL, click the "Download" button.</p>
            </div>
            <div>
                <h2 className="font-semibold text-2xl ">4. View Download Options:</h2>
                <p>Download options for video and audio files will be listed below. These options include different resolutions and qualities.</p>
            </div>
            <div>
                <h2 className="font-semibold text-2xl ">5. Select Download Option:</h2>
                <p>Choose the desired download option for either video or audio. Each option will display the resolution, format, and other details.</p>
            </div>
            <div>
                <h2 className="font-semibold text-2xl ">6. Click &quot;Download&quot; Button:</h2>
                <p>After selecting an option, click the "Download" button next to it. This will initiate the download process.</p>
            </div>
            <div>
                <h2 className="font-semibold text-2xl ">7. Download Progress:</h2>
                <p>Monitor the download progress. Depending on your browser settings, the file may be automatically saved to your specified download location.</p>
            </div>
            <div>
                <h2 className="font-semibold text-2xl ">8. Enjoy Your Downloaded Content:</h2>
                <p>Once the download is complete, you can enjoy the video or audio file offline.</p>
            </div>
            <div className="border-[2px] border-separate border-indigo-600 p-5 rounded-lg ">
                <h2 className="font-bold text-2xl text-indigo-600">Tips:</h2>
                <ul>
                    <li>
                        Ensure the YouTube video URL is valid and in the correct format (e.g., https://www.youtube.com/watch?v=VIDEO_ID).
                    </li>
                    <li>
                        If you encounter any issues, check for error messages and verify the video URL.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default function useVideoDownloader() {
    return (
        <>
            <NavBar />
            <GuideComp />
            <Footer />
        </>
    )
};