// components/VideoDownloader.js
'use client'

import { useState } from 'react';

export default function VideoDownloader() {
    const [videoUrl, setVideoUrl] = useState('');
    const [videoFormats, setVideoFormats] = useState([]);
    const [audioFormats, setAudioFormats] = useState([]);
    const [error, setError] = useState(null);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [videoInfo, setVideoInfo] = useState(null);

    const handleDownload = async () => {
        try {
            const videoIdMatch = videoUrl.match(/[?&]v=([^&]+)/);

            if (!videoIdMatch) {
                console.error('Invalid YouTube video URL');
                setError('Invalid YouTube video URL');
                setShowErrorModal(true);
                return;
            }

            const videoId = videoIdMatch[1];

            const response = await fetch(`/api/youtubevideo?videoId=${videoId}`);

            if (!response.ok) {
                throw new Error('Failed to fetch video download Formats');
            }

            const responseVideoInfo = await fetch(`/api/youtubeinfo?videoUrl=${videoUrl}`);

            if (!responseVideoInfo.ok) {
                throw new Error('Failed to fetch video info');
            }

            const datavideoIndo = await responseVideoInfo.json();
            setVideoInfo(datavideoIndo);

            const data = await response.json();
            setVideoFormats(data.videoFormats);
            setAudioFormats(data.audioFormats);

            setError(null);
        } catch (error) {
            console.error('Error fetching video info:', error);
            setError('Error fetching video info');
            setShowErrorModal(true);
        }
    };

    const handleDownloadClick = (format) => {
        try {
            const { url, qualityLabel, container } = format;

            // Create a temporary link element
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.target = '_blank'

            // Set the download attribute with a suggested file name
            downloadLink.download = `DownloadTube_${qualityLabel}_${container}.${container}`;

            // Append the link to the document
            document.body.appendChild(downloadLink);

            // Trigger the click event on the link
            downloadLink.click();

            // Remove the link from the document
            document.body.removeChild(downloadLink);

            setError(null);
        } catch (error) {
            console.error('Error initiating download:', error);
            setError('Error initiating download');
        }
    };

    const closeErrorModal = () => {
        setShowErrorModal(false);
    };


    return (
        <main className="flex min-h-screen flex-col items-center p-8 pt-40 md:p-40">

            {/* Top link header, input, and button */}
            <div className="items-center p-5">
                <h1 className="font-semibold text-4xl text-center flex justify-center space-x-2 items-center">DownloadTube
                    <span> {' '}</span>
                    <span className='text-gray-800 px-1 text-2xl md:text-3xl text-center rounded-xl bg-white '>BETA</span>
                </h1>
                <p className="font-semibold text-center mt-2 md:mt-0">No bullshit youtube video and audio downloader</p>
            </div>
            <div className="p-2 w-full flex items-center justify-center relative">
                <input
                    type="text"
                    placeholder="Video Link Here"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="w-auto md:w-[50%] border-separate border-[2px] rounded-lg py-3 px-3 bg-gray-950 border-indigo-600 placeholder-white-500 text-white"
                />
            </div >
            <button type='button' className='bg-indigo-600 px-3 py-2 rounded-lg hover:bg-indigo-800 active:bg-indigo-800' onClick={handleDownload}>Download</button>

            {/* Display video title and thumbnail */}
            {videoInfo && (
                <div className="mt-5">
                    <h3 className="font-semibold text-xl my-2 text-center">
                        Video Information:
                    </h3>
                    <div className="flex flex-col items-center">
                        <p className="text-white mb-2 ">{videoInfo.title}</p>
                        <img
                            src={videoInfo.thumbnail}
                            alt="Video Thumbnail"
                            className="rounded-lg mb-2 w-full"
                        />
                    </div>
                </div>
            )}

            {/* video and audio download options */}
            <div className='flex flex-wrap md:flex-nowrap justify-center md:space-x-4'>
                {videoFormats.length > 0 && (
                    <div className='mt-5'>
                        <h3 className='font-semibold text-xl my-2 text-center'>Video Formats:</h3>
                        <ul className='space-y-2 items-center'>
                            {videoFormats.map((format, index) => (
                                <li className='flex justify-between text-[10px] border-indigo-600 border-separate border-[2px] round px-2 py-1 rounded-lg' key={index}>
                                    <p>{format.qualityLabel} - {format.mimeType} {' '}</p>
                                    <button className='px-3 py-2 rounded-lg bg-indigo-600' onClick={() => handleDownloadClick(format)}>
                                        Download Now
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {audioFormats.length > 0 && (
                    <div className='mt-5'>
                        <h3 className='font-semibold text-xl my-2 text-center'>Audio Formats:</h3>
                        <ul className='space-y-2 items-center'>
                            {audioFormats.map((format, index) => (
                                <li className='flex justify-between text-[10px] border-indigo-600 border-separate border-[2px] round px-2 py-1 rounded-lg' key={index}>
                                    <p>{format.qualityLabel} - {format.mimeType} {' '}</p>
                                    <button className='px-3 py-2 rounded-lg bg-indigo-600' onClick={() => handleDownloadClick(format)}>
                                        Download Now
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Error Modal */}
            {showErrorModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="flex flex-row space-x-5 justify-center items-center bg-black border-indigo-600 border-separate border-[2px] p-4 md:p-8 rounded-lg">
                        <p className="text-red-600 md:text-xl">{error}</p>
                        <button
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                            onClick={closeErrorModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </main>
    )
}