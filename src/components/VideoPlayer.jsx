import React from 'react';
import {useState, useRef} from "react";
import '../css/player.css'

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <div className="video-container">
                <video ref={videoRef} className="video" width="600">
                    <source src="/path/to/video-file.mp4" type="video/mp4"/>
                    Ваш браузер не поддерживает видео.
                </video>
                <div className="overlay">
                    <button className="play-button" onClick={handlePlayPause}>
                        {isPlaying ? 'Пауза' : 'Воспроизвести'}
                    </button>
                    <p className="overlay-text">Ваш кастомный текст</p>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;