"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import genresBg from '../../../public/assets/img/genres/genres-bg-3.jpg';
import singerImg from '../../../public/assets/img/header/singer.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import AudioPlayer from 'react-h5-audio-player';
import song_playlist from '@/data/song-playlist-data';

const NavProfileTab = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const songToggleData = (id: number) => {
        const clickedIndex = song_playlist.findIndex(item => item.id === id);
        if (clickedIndex === currentSongIndex) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentSongIndex(clickedIndex);
            setIsPlaying(true);
        }
    };
    const currentSong = song_playlist[currentSongIndex];
    const handlePlay = () => {
        setIsPlaying(true);
    };
    const handlePause = () => {
        setIsPlaying(false);
    };

    return (
        <div className="ms-genres-tab2-text ms-genres-tab2-padding ms-bg-2 ms-br-15">
            <h4 className="ms-title3 white-text text-center mb-25">Happy –
                Pharrell
                Williams</h4>
            <div className="ms-genres-img fix m-img ms-br-15 mb-60 d-inline-block">
                <Image src={genresBg} loader={imageLoader} placeholder="blur"
                    loading='lazy' style={{ width: '100%', height: "auto" }}
                    alt="genres img" />
            </div>
            <div className="ms-border2 mb-30">
                <h4 className="ms-title3 white-text text-center mb-30">Demo
                    Tracks
                </h4>
            </div>
            <div className="ms-genres-audio ms-wrapper-audio-player">
                <div className="ms-header2-song">
                    <div id="jquery_jplayer_1" className="jp-jplayer"></div>
                    <div id="jp_container_1" className="jp-audio" role="application"
                        aria-label="media player">
                        <div className="jp-type-playlist">
                            <div className="ms-header2-singer d-none">
                                <div className="ms-header2-singer-img">
                                    <Link href="#">
                                        <Image src={singerImg} loader={imageLoader} placeholder="blur"
                                            loading='lazy' style={{ width: '100%', height: "auto" }}
                                            alt="singer" />
                                    </Link>
                                </div>
                                <div className="ms-header2-singer-text">
                                    <h4><Link href="/genres-details">Lazy
                                        Soul</Link></h4>
                                    <div className="jp-title"></div>
                                </div>
                            </div>
                            <div className="jp-gui">
                                <AudioPlayer
                                    className='audio_player'
                                    src={currentSong ? currentSong.mp3 : ""}
                                    autoPlayAfterSrcChange={true}
                                    onPlaying={handlePlay}
                                    onPause={handlePause}
                                />
                            </div>
                            <div className="jp-playlist">
                                <ul>
                                    {
                                        song_playlist.map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() => songToggleData(item.id)}>
                                                <span className='audio-playlist-current'>
                                                    <i className={index === currentSongIndex && isPlaying ? "fa-solid fa-pause" : 'fa-sharp fa-solid fa-play'}></i>
                                                </span>
                                                {item.title}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavProfileTab;
