import React from 'react'
import HomeVedioData from '../Data/RecomendedVedioData/HomeVedioData';
import './Recomended.css'
import VedioCard from './VedioCard'

function Recomended() {
    return (
        <div className="recomended">
            <h1 className="recomended__h1">Recomended</h1>
            <div className="recomended__vedios">
            {
                HomeVedioData.map((vediodata,index)=>
                <VedioCard 
                key={index}
                mainImage={vediodata.mainImage}
                channelAvatar={vediodata.channelAvatar}
                vedioTitle={vediodata.vedioTitle}
                channelName={vediodata.channelName}
                views={vediodata.views}
                time={vediodata.time}
                vedioLink={vediodata.vedioLink}
                />
                )
            }
            </div>
            
        </div>
    )
}

export default Recomended;
