import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import "./ChannelRow.css"
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Button from './Button';
import VerifiedIcon from '@material-ui/icons/CheckCircleRounded';

function ChannelRow({ image,   channel, verified,subs,noOfVideos,description,}) {
   
    return (
        <div className="channelRow">
           
           <Avatar className="channelRow__avatar" alt={channel} src={image} />
           
             
           <div className="channelRow__info">
               
             <h4>{channel} {verified && <VerifiedIcon className="channelRow__checkIcon"/>}</h4>
            
               <p> 
                  {subs} • { noOfVideos} videos
              </p>
              <p>{description}</p>
           </div>
            <div className="channelRow__subButton">
                     
                     <Button />
                      <NotificationsNoneOutlinedIcon className="bell"/>
                     
                
            </div>

            
        </div>
    )
}

export default ChannelRow
