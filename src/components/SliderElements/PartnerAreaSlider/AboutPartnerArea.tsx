"use client"
import React from 'react';
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import future_partner_data from '../../../data/future-partner-data';

const AboutPartnerArea = () => {
    return (
        <>
            <div className="bb-partner-area fix pb-130">
                <div className="container">

                    <div className="bb-border5 pt-130">
                        <div className="bb-partner-active">
                            <Swiper
                                modules={[Autoplay]}
                                loop={false}
                                spaceBetween={45}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 5000
                                }}
                                speed={5000}
                                observeParents={true}
                                observer={true}
                                breakpoints={{
                                    1600: {
                                        slidesPerView: 5
                                    },
                                    1400: {
                                        slidesPerView: 5
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                        spaceBetween: 70,
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
                                    0: {
                                        slidesPerView: 1
                                    }
                                }
                                }
                            >
                                {
                                    future_partner_data.slice(0, 12).map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <Image loader={imageLoader} src={item.image} placeholder="blur" loading='lazy' height={40} width={201}
                                                alt="partner image" />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPartnerArea;