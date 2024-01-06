// These styles apply to every route in the application
import Script from 'next/script'
import './global.css'

export const metadata = {
  title: 'DownloadTube',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2Z9QN49SME"/>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-2Z9QN49SME');
        `}
        </Script>
      <body>{children}</body>
    </html>
  )
}