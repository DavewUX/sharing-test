"use client"

import Image from 'next/image'

const handleShare = async () => {
  const shareData = {
    title: "Pentagon Play's online shop",
    text: "Pentagon Play's online shop",
    url: "https://www.pentagonplay.co.uk/products/shop-online",
  };

  if (navigator.share) {
    navigator
      .share(shareData)
      .then(() => console.log("Shared successfully"))
      .catch((error) => console.log("Error sharing", error));
  } else {
    alert("Web Share API not supported in your browser")
    console.log("Web Share API not supported in your browser");
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button className='p-3 bg-blue-700 text-white rounded-xl my-3 cursor-pointer' onClick={() => handleShare()}>Share this page</button>
      </div>
    </main>
  )
}
