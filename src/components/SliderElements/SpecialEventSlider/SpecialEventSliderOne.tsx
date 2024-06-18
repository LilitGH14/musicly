"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import EventBgImg from '../../../../public/assets/img/event/event-bg-2.png';
import EventTestimonialBg from '../../../../public/assets/img/event/event-testimonial-bg.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css/bundle';
import ModalVideo from 'react-modal-video';

const SpecialEventSliderOne = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)

    return (
        <>
            <section className="ms-event-area pt-130 pb-70">
                <div className="container">
                    <div className="row align-items-end mb-25 bdFadeUp">
                        <div className="col-lg-8">
                            <div className="section__title-wrapper mb-40 bd-title-anim">
                                <span className="section__subtitle">Special Events</span>
                                <h2 className="section__title"><span className="animated-underline active">Special
                                    event</span> {" "}
                                    coming up
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trending-btn mb-40 d-flex justify-content-lg-end">
                                <Link className="border__btn" href="/event">View All Event</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row bdFadeUp">
                        <div className="col-xl-8">
                            <div className="ms-event-bg p-relative mb-60"
                                style={{ backgroundImage: `url(${EventTestimonialBg.src})` }}
                                data-background="assets/img/event/event-testimonial-bg.png">
                                <div className="ms-event-overlay p-absolute"></div>
                                <div className="ms-event-wrap">
                                    <div className="ms-event-inner-box">
                                        <div className="ms-event-active swiper-container">

                                            <Swiper
                                                modules={[Pagination, Autoplay]}
                                                speed={4000}
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                autoplay={{
                                                    delay: 6000
                                                }}
                                                vocab='false'
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                className="ms-event-dots"
                                            >
                                                <SwiperSlide>
                                                    <div className="ms-event-item">
                                                        <div className="ms-event-item-top">
                                                            <h3 className="ms-event-title">
                                                                <Link href="/event-details">Wedding entertainment ideas</Link></h3>
                                                            <p className="ms-event-text">Our hand-picked acts will guarantee
                                                                you fantastic wedding
                                                                entertainment for each part.
                                                                {`We'll`} provide help and support 24 hours a day, 7 days a
                                                                week, right up
                                                                until</p>
                                                            <div className="ms-event-inner">
                                                                <div className="ms-event-location">
                                                                    <Link href="https://www.google.com/maps" target="_blank"><i
                                                                        className="flaticon-pin"></i>Chicago</Link>
                                                                </div>
                                                                <div className="ms-event-date">
                                                                    <span>7:00 PM, Saturday, February 18, 2023</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ms-event-item-bottom">
                                                            <h3 className="ms-event-title"><Link href="/event-details">Corporate
                                                                entertainment ideas</Link>
                                                            </h3>
                                                            <p className="ms-event-text">Our hand-picked acts will guarantee
                                                                you fantastic
                                                                wedding
                                                                entertainment for each part.
                                                                {`We'll`} provide help and support 24 hours a day, 7 days a
                                                                week, right up
                                                                until</p>
                                                            <div className="ms-event-inner">
                                                                <div className="ms-event-location">
                                                                    <Link href="https://www.google.com/maps" target="_blank"><i
                                                                        className="flaticon-pin"></i>Chicago</Link>
                                                                </div>
                                                                <div className="ms-event-date">
                                                                    <span>7:00 PM, Saturday, February 26, 2023</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="ms-event-item">
                                                        <div className="ms-event-item-top">
                                                            <h3 className="ms-event-title"><Link href="/event-details">Party
                                                                entertainment
                                                                ideas</Link></h3>
                                                            <p className="ms-event-text">Our hand-picked acts will guarantee
                                                                you fantastic
                                                                wedding
                                                                entertainment for each part.
                                                                {` We'll`} provide help and support 24 hours a day, 7 days a
                                                                week, right up
                                                                until</p>
                                                            <div className="ms-event-inner">
                                                                <div className="ms-event-location">
                                                                    <Link href="https://www.google.com/maps" target="_blank"><i
                                                                        className="flaticon-pin"></i>Chicago</Link>
                                                                </div>
                                                                <div className="ms-event-date">
                                                                    <span>7:00 PM, Saturday, February 18, 2023</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ms-event-item-bottom">
                                                            <h3 className="ms-event-title"><Link href="/event-details">Corporate
                                                                entertainment ideas</Link>
                                                            </h3>
                                                            <p className="ms-event-text">Our hand-picked acts will guarantee
                                                                you fantastic
                                                                wedding
                                                                entertainment for each part.
                                                                {`We'll`} provide help and support 24 hours a day, 7 days a
                                                                week, right up
                                                                until</p>
                                                            <div className="ms-event-inner">
                                                                <div className="ms-event-location">
                                                                    <Link href="https://www.google.com/maps" target="_blank"><i
                                                                        className="flaticon-pin"></i>Chicago</Link>
                                                                </div>
                                                                <div className="ms-event-date">
                                                                    <span>7:00 PM, Saturday, February 26, 2023</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="ms-event-item">
                                                        <div className="ms-event-item-top">
                                                            <h3 className="ms-event-title"><Link href="/event-details">Party
                                                                entertainment
                                                                ideas</Link></h3>
                                                            <p className="ms-event-text">Our hand-picked acts will guarantee
                                                                you fantastic
                                                                wedding
                                                                entertainment for each part.
                                                                {`We'll`} provide help and support 24 hours a day, 7 days a
                                                                week, right up
                                                                until</p>
                                                            <div className="ms-event-inner">
                                                                <div className="ms-event-location">
                                                                    <Link href="https://www.google.com/maps" target="_blank"><i
                                                                        className="flaticon-pin"></i>Chicago</Link>
                                                                </div>
                                                                <div className="ms-event-date">
                                                                    <span>7:00 PM, Saturday, February 18, 2023</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ms-event-item-bottom">
                                                            <h3 className="ms-event-title"><Link href="/event-details">New
                                                                Year’s Eve party
                                                                bands</Link></h3>
                                                            <p className="ms-event-text">Our hand-picked acts will guarantee
                                                                you fantastic
                                                                wedding
                                                                entertainment for each part.
                                                                {`We'll`} provide help and support 24 hours a day, 7 days a
                                                                week, right up
                                                                until</p>
                                                            <div className="ms-event-inner">
                                                                <div className="ms-event-location">
                                                                    <Link href="https://www.google.com/maps" target="_blank"><i
                                                                        className="flaticon-pin"></i>Chicago</Link>
                                                                </div>
                                                                <div className="ms-event-date">
                                                                    <span>7:00 PM, Saturday, February 26, 2023</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className="ms-event-dots ms-round-dots"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="ms-event-play d-inline-block p-relative mb-60">
                                <div className="ms-event-play-overlay p-absolute"></div>
                                <Image loader={imageLoader} placeholder="blur" loading='lazy' width={401} height={466} src={EventBgImg}
                                    alt="event img" />
                                <button onClick={() => { openVideoModal() }}
                                    className="ms-play-border ms-event-play-btn popup-video">play</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="vx2u5uUu3DE" onClose={() => setIsOpen(false)} />

        </>
    );
};

export default SpecialEventSliderOne;

