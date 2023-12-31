import Footer from "@/components/footer"
import NavBar from "@/components/navbar"
import { styles } from "../style"

export const metadata = {
    title: 'About DownloadTube',
    description: 'Learn more about DownloadTube',
}

function AboutComp() {
    return (
        <div className={`${styles.padding} `} >
            Comming Soon
        </div>
    )
}

export default function About() {
    return (
        <>
            <NavBar />
            <AboutComp />
            <Footer />
        </>
    )
}