"use client"
import React, { useState } from 'react';
import bannerThumb from '../../../public/assets/img/banner/banner-thumb-03.png';
import bannerBgImg from '../../../public/assets/img/banner/banner-thumb-02.jpg';
import bannerBorder from '../../../public/assets/img/banner/banner-border.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import ModalVideo from 'react-modal-video';

const HeroTwo = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    return (
        <>
            <section className="ms-banner2-area fix">
                <div className="ms-banner2-wrap ms-banner2-height p-relative ms-bg"
                    style={{ backgroundImage: `url(${bannerBgImg.src})` }}>
                    <div className="ms-banner2-shape p-absolute"></div>
                    <div className="ms-banner2-cover-img p-absolute">
                        <Image loader={imageLoader} placeholder="blur" loading='lazy' width={457} height={546} src={bannerThumb}
                            alt="banner" />
                    </div>
                    <h2 className="ms-banner2-title">Musicly</h2>
                    <div className="ms-banner2-video mb-10">
                        <button onClick={() => { openVideoModal() }} className="popup-video ms-banner2-video-btn">
                            <Image className="ms-rotation-360" loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }} src={bannerBorder}
                                alt="banner" />
                            <span>play</span>
                        </button>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="vx2u5uUu3DE" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default HeroTwo;