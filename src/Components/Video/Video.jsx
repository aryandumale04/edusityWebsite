import React, { useRef } from 'react'
import './Video.css'
import video from '../../assets/v.mp4'

const Video = ({playState,setPlay}) => {
    const player=useRef(null);
    const closePlayer=(e)=>{
        if(e.target === player.current){
            setPlay(false);
        }
    }


  return (
    <div className={`videoPlayer ${playState? '' : 'hide'}`}
    ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls>

        </video>
      
    </div>
  )
}

export default Video
