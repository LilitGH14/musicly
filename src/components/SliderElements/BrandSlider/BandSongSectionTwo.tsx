"use client"
import brand_data from '@/data/brand-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';

const BandSongSectionTwo = () => {

    return (
        <>
            <section className="ms-song-area pb-130">
                <div className="container">
                    <div className="ms-song-border pt-65 pb-65 bdFadeUp">
                        <div className="ms-song2-active fix">
                            <div>
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={30}
                                    loop={false}
                                    speed={6000}
                                    autoplay={{
                                        delay: 0
                                    }}
                                    breakpoints={
                                        {
                                            1800: {
                                                slidesPerView: 5
                                            },
                                            1600: {
                                                slidesPerView: 6
                                            },
                                            1400: {
                                                slidesPerView: 5
                                            },
                                            1200: {
                                                slidesPerView: 5
                                            },
                                            992: {
                                                slidesPerView: 4
                                            },
                                            768: {
                                                slidesPerView: 3
                                            },
                                            576: {
                                                slidesPerView: 2
                                            },
                                            450: {
                                                slidesPerView: 2
                                            },
                                            0: {
                                                slidesPerView: 1
                                            },
                                        }
                                    }
                                >
                                    {
                                        brand_data.slice(0, 7).map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className="ms-song-item">
                                                    <div className="ms-song-img p-relative">
                                                        <Link href={`/genres-details/${item.id}`}>
                                                            <Image loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: "100%", height: "auto" }} src={item.image} alt="brand-song" />
                                                        </Link>
                                                        <span className="ms-song-num">{item.songNum}</span>
                                                    </div>
                                                    <div className="ms-song-content">
                                                        <h3 className="ms-song-title"><Link href={`/genres-details/${item.id}`}>{item.songTitle}</Link>
                                                        </h3>
                                                        <span className="ms-song-text">{item.songText}</span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BandSongSectionTwo;