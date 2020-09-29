import React, { useState } from 'react'
import "./VideoRow.css"

function VideoRow(
    {
        views,
        subs,
        description,
        timestamp,
        channel,
        title,
        image,
        gif
    }
) {
    const [isShown, setIsShown] = useState(false);
    return (
        <div className="videoRow">
            <img src={image} alt="" 
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            />
            {isShown && (
               <image src={gif} alt=""/>
            )}
            <div className="videowRow__text">
                 <h3>{title}</h3>
                 <p  className="videowRow__headLine">  
                       {channel} •<span  className="videowRow__subs">
                       <span  className="videowRow__subsNumber">{subs}</span>   Subscribers
                           </span>   {views} views • {timestamp} 
                 </p>
                 <p className="videowRow__description">{description}</p>
            </div>
     

        </div>
    )
}

export default VideoRow
