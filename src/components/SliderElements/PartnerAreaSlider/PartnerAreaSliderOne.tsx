"use client"
import future_partner_data from '../../../data/future-partner-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import React from 'react';
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';

const PartnerAreaSliderOne = () => {

    return (
        <>
            <section className="ms-partner-area fix pb-130">
                <div className="container">
                    <div className="row justify-content-center ms-partner-opacity bdFadeUp">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper mb-65 text-center bd-title-anim">
                                <span className="section__subtitle">Our Partners</span>
                                <h2 className="section__title">Valuable <span
                                    className="animated-underline active">Featured</span> {" "}
                                    Partners
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="ms-partner-active">
                        <div>
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
                                            <Image loader={imageLoader} src={item.image}
                                                placeholder="blur" loading='lazy' height={40} width={201}
                                                alt="partner image" />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default PartnerAreaSliderOne;