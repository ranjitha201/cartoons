import React from 'react'

const VideoList = (props) => {
    let{thumbnailUrl,title}=props.lio
  return (
    <div className="video-item"  onClick={()=>{props.fun(props.lio)}} >
        <img  height={200} width={200} src={thumbnailUrl} alt="" />
        <h1>{title}</h1>
    </div>
  )
}

export default VideoList