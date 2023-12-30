// These styles apply to every route in the application
import './global.css'

export const metadata = {
  title: 'DownloadTube',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}