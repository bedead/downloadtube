'use client'

import Link from "next/link";

const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Playlist Downloader", path: "/playlistdownloader" },
    { name: "Video Downloader Guide", path: "/howtouse/youtubevideo" },
    { name: "Playlist Downloader Guide", path: "/howtouse/youtubeplaylist" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Contact Us", path: "/contactus" },
    // Add more pages as needed
];

export default function NavBar() {
    const toggleMobileNav = () => {
        const mobileNav = document.getElementById("hidden_mobile_nav");
        mobileNav.classList.toggle("hidden");
    };

    return (
        <nav className="w-full flex p-10 fixed top-0 z-20 bg-gradient-to-b from-white to-black">
            <div className="w-full flex justify-between items-center mx-auto">
                <h1 className="font-extrabold text-xl md:text-2xl">
                    <Link href='/' >DownloadTube</Link>
                </h1>
                <div>
                    <span onClick={toggleMobileNav}>
                        ||||
                    </span>
                    <div id="hidden_mobile_nav" className="hidden absolute top-full right-10 rounded-xl font-semibold text-md bg-black p-4 border-[2px] border-separate border-indigo-600 shadow-lg">
                        <ul className="flex flex-col space-y-2">
                            {pages.map((page) => (
                                <li key={page.path}>
                                    <Link href={page.path}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}