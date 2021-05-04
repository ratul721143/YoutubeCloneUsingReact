import React from 'react'
import {Avatar} from '@material-ui/core';
import './VedioCard.css';


function VedioCard({mainImage,channelAvatar,vedioTitle,channelName,views,time,vedioLink}) {
    return (
        <div className="vedioCard">
            <a href={vedioLink}><img className="vedioImage" src={mainImage} alt="error" /></a>
            <div className="vedioCrad__lower">
                <Avatar src={channelAvatar} className="left__icons icon"/>
                <div className="vedio__details">
                    <h2>{vedioTitle}</h2>
                    <p>{channelName}</p>
                    <p>{views} views ▪ {time}</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default VedioCard;
