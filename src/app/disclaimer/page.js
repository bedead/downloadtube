import Footer from "@/components/footer"
import NavBar from "@/components/navbar"
import { styles } from "../style"
import CommingSoon from "@/components/commingsoon"

export const metadata = {
    title: 'DownloadTube - Disclaimer',
    description: '',
}

function DisclaimerComp() {
    return (
        <div className={`${styles.padding}`} >
            Comming Soon
        </div>
    )
}

export default function Disclaimer() {
    return (
        <>
            <NavBar />
            {/* <DisclaimerComp /> */}
            <CommingSoon />
            <Footer />
        </>
    )
}