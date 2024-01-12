'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CgMenuOreos } from "react-icons/cg";
import { FiMenu, FiX } from 'react-icons/fi';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Playlist Downloader', path: '/playlistdownloader' },
    { name: 'Video Downloader Guide', path: '/howtouse/youtubevideo' },
    { name: 'Playlist Downloader Guide', path: '/howtouse/youtubeplaylist' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Contact Us', path: '/contactus' },
    // Add more pages as needed
];

const NavBar = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen((prev) => !prev);
    };

    return (
        <nav className="w-full flex p-10 fixed top-0 z-20 bg-gradient-to-b from-white to-transparent">
            <div className="w-full flex justify-between items-center mx-auto">
                <h1 className="font-extrabold text-xl md:text-2xl">
                    <Link href="/">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            DownloadTube&nbsp;
                            <span className="text-gray-800 px-2 text-xl md:text-2xl text-center rounded-xl bg-white">
                                BETA
                            </span>
                        </motion.div>
                    </Link>
                </h1>
                <div className="cursor-pointer md:text-2xl" onClick={toggleMobileNav}>
                    <motion.div whileHover={{ scale: 1.35 }} whileTap={{ scale: 0.75 }}>
                        {isMobileNavOpen ? (
                            <FiX size={24} color="white" />
                        ) : (
                            <CgMenuOreos size={24} color="white" />
                        )}
                    </motion.div>
                </div>
                <AnimatePresence>
                    {isMobileNavOpen && (
                        <motion.div
                            id="hidden_mobile_nav"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full right-10 rounded-xl font-semibold text-md bg-black p-4 border-[2px] border-separate border-indigo-600 shadow-lg"
                        >
                            <ul className="flex flex-col space-y-2">
                                {pages.map((page) => (
                                    <motion.li
                                        key={page.name}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Link href={page.path}>
                                            <motion.span
                                                whileHover={{ color: 'gray' }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                {page.name}
                                            </motion.span>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default NavBar;
