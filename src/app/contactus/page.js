import Footer from "@/components/footer"
import NavBar from "@/components/navbar"
import { styles } from "../style"
import CommingSoon from "@/components/commingsoon"

export const metadata = {
    title: 'DownloadTube - ContactUs',
    description: '',
}

function ContactComp() {
    return (
        <div className={`${styles.padding}`} >
            Comming Soon
        </div>
    )
}

export default function About() {
    return (
        <>
            <NavBar />
            {/* <ContactComp /> */}
            <CommingSoon />
            <Footer />
        </>
    )
}