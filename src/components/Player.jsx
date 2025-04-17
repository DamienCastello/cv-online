import React from 'react';
import ReactPlayer from 'react-player';

const Player = () => {
    const isMobile = window.innerWidth < 768;
    return (
        <ReactPlayer width='95%' height={isMobile ? "250px" : "60%"} url="https://www.youtube.com/watch?v=4aCKjjwNr9w" />
    );
}

export default Player;