import React from 'react'

const VideoPlayer = ({vid}) => {
  return (
    <div >
        <video  height={200} width={400} controls muted autoPlay src={vid}></video>
    </div>
  )
}

export default VideoPlayer