import styles from '../../styles/modules/videoSection.module.css';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '../../hooks/UseMediaQuery';
import { useBackVideo } from '../../hooks/UseBackVideo';

import { PlayIcon } from '../../assets/icons/PlayIcon';
import { PauseIcon } from '../../assets/icons/PauseIcon';
import { MuteIcon } from '../../assets/icons/MuteIcon';
import { UnmuteIcon } from '../../assets/icons/UnmuteIcon';

export const VideoSection = () => {
    const isMobile = useMediaQuery('(max-width: 575px)');

    const videoRef = useBackVideo(1);
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    /* Control de estado para media queris */
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const source = isMobile ? '/videos/video-ver.mp4' : '/videos/video-hor.mp4';

        const wasPaused = video.paused;
        const currentTime = video.currentTime;

        video.src = source;
        video.load();

        video.currentTime = currentTime;

        if (!wasPaused) {
            video.play().catch(() => {});
        }
    }, [isMobile, videoRef]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onPlay = () => setIsPaused(false);
        const onPause = () => setIsPaused(true);

        video.addEventListener('play', onPlay);
        video.addEventListener('pause', onPause);

        return () => {
            video.removeEventListener('play', onPlay);
            video.removeEventListener('pause', onPause);
        };
    }, [videoRef]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onVolumeChange = () => {
            setIsMuted(video.muted);
        };

        video.addEventListener('volumechange', onVolumeChange);

        return () => {
            video.removeEventListener('volumechange', onVolumeChange);
        };
    }, [videoRef]);

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = !video.muted;
    };

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        video.paused ? video.play() : video.pause();
    };

    return (
        <section className={styles.sectionContainer}>
            <video
                ref={videoRef}
                className={styles.videoBackground}
                autoPlay
                loop
                muted
                playsInline
                onClick={!isMobile ? togglePlay : undefined}
                poster={isMobile ? '/videos/video-ver.webp' : '/videos/video-hor.webp'}
            >
                <source src={isMobile ? '/videos/video-ver.webm' : '/videos/video-hor.webm'} type="video/webm" />
                <source src={isMobile ? '/videos/video-ver.mp4' : '/videos/video-hor.mp4'} type="video/mp4" />
            </video>

            {/* Controles */}
            <div className={styles.controls}>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                    }}
                    aria-label={isPaused ? 'Reproducir video' : 'Pausar video'}
                >
                    {isPaused ? <PlayIcon className={styles.icono1} /> : <PauseIcon className={styles.icono1} />}
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                    }}
                    aria-label={isMuted ? 'Activar sonido' : 'Silenciar video'}
                >
                    {isMuted ? <MuteIcon className={styles.icono2} /> : <UnmuteIcon className={styles.icono2} />}
                </button>
            </div>
        </section>
    );
};
