"use client"
import React from 'react';
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';
import { text_scroll_data, text_scroll_two } from '@/data/text-scroll-data';
import TextScrollBg from '../../../../public/assets/img/bg/text-scroll-bg.png';

const TextScrollArea = () => {

    return (
        <section className="text__scroll-area include__bg ms-ts-space p-relative fix"
            style={{ backgroundImage: `url(${TextScrollBg.src})` }}
            data-background="assets/img/bg/text-scroll-bg.png">
            <div className="text__scroll-wrapper">
                <div className="ms-text-line-1">
                    <div className="ms-st-active scroll__text pt-20 pb-20">
                        <div className="ms-st-active-wrapper">
                            <Swiper
                                modules={[Autoplay]}
                                loop={true}
                                spaceBetween={0}
                                slidesPerView="auto"
                                autoplay={{
                                    delay: 100,
                                    disableOnInteraction: true
                                }}
                                simulateTouch={false}
                                speed={6000}
                            >
                                {
                                    text_scroll_data.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <h3><span className={item.color ? item.color : ""}>{item.title}</span></h3>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="ms-text-line-2">
                    <div className="ms-str-active scroll__text pt-20 pb-20">
                        <div className="ms-str-active-wrapper">
                            <Swiper
                                modules={[Autoplay]}
                                loop={true}
                                spaceBetween={0}
                                slidesPerView="auto"
                                simulateTouch={false}
                                autoplay={{
                                    delay: 100,
                                    disableOnInteraction: true,
                                    reverseDirection: true
                                }}
                                speed={6000}
                            >
                                {
                                    text_scroll_two.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <h3><span className={item.color ? item.color : ""}>{item.title}</span></h3>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default TextScrollArea;