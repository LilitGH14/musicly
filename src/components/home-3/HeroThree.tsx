"use client"
import React from 'react';
import bannerThumb from "../../../public/assets/img/banner/banner-thumb-04.png";
import bannerThumbTwo from "../../../public/assets/img/banner/banner-thumb-05.png";
import bannerThumbThree from "../../../public/assets/img/banner/banner-thumb-06.png";
import bannerShape from "../../../public/assets/img/banner/banner-round-shape.png";
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const HeroThree = () => {
    return (
        <>
            <div className="ms-banner3-area fix pl-40 pr-40 mb-0">
                <div className="ms-banner3-item-wrap ms-mih-400 d-flex align-items-center justify-content-center">
                    <div className="ms-banner3-item d-none d-lg-block">
                        <div className="ms-banner3-img1 ms-opacity-2 p-relative m-img">
                            <div className="ms-overlay2 p-absolute"></div>
                            <Image src={bannerThumb} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                alt="banner image" />
                        </div>
                    </div>
                    <div className="ms-banner3-item">
                        <div className="ms-banner3-img2 m-img p-relative">
                            <Image src={bannerThumbTwo} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                alt="banner image" />
                            <div className="ms-banner3-round zindex--1 p-absolute m-img">
                                <Image src={bannerShape} loader={imageLoader} loading='lazy' width={616} height={616} alt="banner round shape" />
                            </div>
                        </div>
                    </div>
                    <div className="ms-banner3-item d-none d-lg-block">
                        <div className="ms-banner3-img3 ms-opacity-2 p-relative m-img">
                            <div className="ms-overlay2 p-absolute"></div>
                            <Image src={bannerThumbThree} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }} alt="banner image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroThree;