import Footer from "@/components/footer"
import NavBar from "@/components/navbar"
import { styles } from "../style"
import CommingSoon from "@/components/commingsoon"

export const metadata = {
    title: 'DownloadTube - Playlist Downloader',
    description: '',
}

function DownloaderComp() {
    return (
        <div className={`${styles.padding}`} >
            Comming Soon
        </div>
    )
}

export default function PlaylistDownloader() {
    return (
        <>
            <NavBar />
            {/* <DownloaderComp /> */}
            <CommingSoon />
            <Footer />
        </>
    )
}