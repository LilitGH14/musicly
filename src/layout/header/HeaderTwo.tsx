"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from '../../../public/assets/img/logo/logo.svg';
import singerImg from '../../../public/assets/img/header/singer.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song_data from '@/data/song-data';
import OffcanvasArea from '@/components/common/offcanvas-area/OffcanvasArea';
import useStickyHeader from '@/hooks/sticky-header';


const HeaderTwo = () => {
    const [isOpenInfoSidebar, setIsOpenInfoSidebar] = useState(false)
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const isSticky = useStickyHeader();
    const someCondition = true;
    useEffect(() => {
        if (someCondition) {
            setCurrentSongIndex((prevIndex) => (prevIndex + 1) % song_data.length);
        }
    }, [someCondition])
    const currentSong = song_data[currentSongIndex];

    const handleSongEnd = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % song_data.length);
    };
    const handleInfoToggle = () => {
        setIsOpenInfoSidebar(!isOpenInfoSidebar)
    }


    return (
        <>
            <header>
                <div id='header-sticky2'
                    className={`ms-header2 ms-header-transparent zindex-500 transition-03 ms-header-fixed mt-40 ${isSticky ? "sticky2" : ""}`}>
                    <div className="ms-header2-wrap d-flex align-items-center justify-content-between">
                        <div className="ms-header2-item">
                            <div className="ms-header2-logo">
                                <Link href="/">
                                    <Image loader={imageLoader} priority width={143} height={45} src={Logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="ms-header2-item d-none d-xl-block">
                            <div className="ms-header2-singer-wrap d-flex align-items-center">
                                <div className="ms-header2-song">
                                    <div className="jp-audio">
                                        <div className="jp-type-playlist">
                                            <div className="ms-header2-singer">
                                                <div className="ms-header2-singer-img">
                                                    <Link href="#">
                                                        <Image loader={imageLoader} priority style={{ width: "100%", height: "auto" }} src={singerImg} alt="singer" />
                                                    </Link>
                                                </div>
                                                <div className="ms-header2-singer-text">
                                                    <h4><Link href="/genres-details">Lazy Soul</Link></h4>
                                                    <div className="jp-title">{currentSong.title}</div>
                                                </div>
                                            </div>
                                            <div className="jp-gui">
                                                <AudioPlayer
                                                    className='audio_player'
                                                    src={currentSong.mp3}
                                                    autoPlayAfterSrcChange={false}
                                                    onEnded={handleSongEnd}
                                                    autoPlay={false}
                                                />
                                            </div>
                                            <div className="jp-playlist d-none">
                                                <ul>
                                                    <li>&nbsp;</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-header2-item">
                            <div className="ms-header2-right d-flex align-items-center">
                                <div className="ms-dot-menu ms-cp d-flex align-items-center">
                                    <div onClick={handleInfoToggle} className="sidebar__toggle lh-1">
                                        <div className="ms-dot-list">
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <span className="ms-dot-menu-text">Menu</span>
                                    </div>
                                </div>
                                <div className="ms-header2-services ml-65">
                                    <Link className="ms-border-btn" href="/services"><i className="fa-solid fa-plus"></i> List Your
                                        Service</Link>
                                </div>
                                <div className="ms-header2-profile ml-20">
                                    <Link className="ms-profile-btn" href="/login"><i className="flaticon-user"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasArea isOpenInfoSidebar={isOpenInfoSidebar} setIsOpenInfoSidebar={setIsOpenInfoSidebar} />
            <div onClick={() => setIsOpenInfoSidebar(false)}
                className={isOpenInfoSidebar ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"}></div>
        </>
    );
};

export default HeaderTwo;