import { styles } from "@/app/style"
import Footer from "@/components/footer"
import NavBar from "@/components/navbar"

export const metadata = {
    title: 'DownloadTube - How to use Playlist Downloader',
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
            <DownloaderComp />
            <Footer />
        </>
    )
}