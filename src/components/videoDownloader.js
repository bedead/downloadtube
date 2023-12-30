// components/VideoDownloader.js
'use client'

import { useState } from 'react';

export default function VideoDownloader() {
    const [videoUrl, setVideoUrl] = useState('');
    const [downloadOptions, setDownloadOptions] = useState([]);
    const [error, setError] = useState(null);
    const [showErrorModal, setShowErrorModal] = useState(false);

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
                throw new Error('Failed to fetch video info');
            }

            const data = await response.json();

            setDownloadOptions(data.formats);
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


    return (
        <div className="flex min-h-screen flex-col items-center p-5 pt-10 md:p-24">
            <div className="items-center p-5">
                <h1 className="font-semibold text-4xl">DownloadTube</h1>
                <p className="font-semibold">No bullshit youtube video downloader</p>
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
            <button className='bg-indigo-600 px-3 py-2 rounded-lg ' onClick={handleDownload}>Download</button>
            {downloadOptions.length > 0 && (
                <div className='mt-5 text-center mx-auto'>
                    <h3 className='font-semibold text-xl my-2'>Download Options:</h3>
                    <ul className='flex justify-center flex-row'>
                        {downloadOptions.map((format, index) => (
                            <li className='w-[80%] md:w-auto border-indigo-600 border-separate border-[2px] px-3 py-1 rounded-lg' key={index}>
                                {format.qualityLabel} - {format.mimeType} {' '}
                                <button className='px-3 py-2 rounded-lg text-white bg-indigo-600' onClick={() => handleDownloadClick(format)}>
                                    Download Now
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Error Modal */}
            {showErrorModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-md">
                        <h2 className="text-xl font-semibold mb-4">Error</h2>
                        <p className="text-red-600">{error}</p>
                        <button
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4"
                            onClick={closeErrorModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}