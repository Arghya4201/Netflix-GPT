import React from 'react'
import { useSelector } from 'react-redux'

const TrailerAndMore = () => {
  const videos = useSelector((state) => state.moreinfo.videos)
  if(!videos) return
  const videoKeys = videos.map(video => video.key)

  // Shuffle and get up to 6 keys
  const randomKeys = videoKeys
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.min(6, videoKeys.length))

  const getGridClasses = (count) => {
    if (count === 1) return "grid-cols-1"
    if (count === 2) return "grid-cols-2"
    return "grid-cols-3"
  }

  const getJustifyClass = (count, index) => {
    if (count === 3 && index === 2) return "col-span-1 col-start-2"
    if (count === 5 && index >= 3) return index === 3 ? "col-start-2" : ""
    return ""
  }

  return (
    <div className={`grid gap-6 mt-10 ${getGridClasses(randomKeys.length)}`}>
      {randomKeys.map((key, index) => (
        <div
          key={index}
          className={`aspect-video w-full overflow-hidden ${getJustifyClass(randomKeys.length, index)}`}
        >
          <iframe
            className="w-full h-full rounded border-0"
            src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0`}
            title={`YouTube video ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  )
}

export default TrailerAndMore
