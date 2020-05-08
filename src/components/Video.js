import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={`${videoSrcURL}?modestbranding=1&amp;playsinline=1&amp;disablekb=0&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;showinfo=0&amp;modestbranding=1&amp;disablekb=1&amp;enablejsapi=1&amp`}
      title={videoTitle}
      allow="autoplay; encrypted-media; gyroscope;"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="100%"
      height="800px"
    />
  </div>
)
export default Video