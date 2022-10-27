import React from 'react';
import './YoutubeEmbeded.css'

const YoutubeEmbeded = () => {
    return (
        <div className="video-responsive ">
             <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zrCLRC3Ci1c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
       
    );
    
};

export default YoutubeEmbeded;