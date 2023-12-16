export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="items-center p-5">
        <h1 className="font-semibold text-4xl">DownloadTube</h1>
        <p className="font-semibold ">No bullshit youtube video downloader</p>
      </div>
      <div className="p-2 w-full flex items-center justify-center">
        <input type="text" placeholder="Video Link Here" className="w-auto md:w-[50%] border-separate border-[2px] rounded-lg py-3 px-3 bg-gray-950 border-indigo-600 placeholder-white-500 text-white" />
      </div>
    </main>
  )
}
