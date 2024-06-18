"use client"
import popular_categories from '../../../data/popular-categories-data';
import { imageLoader } from '@/hooks/ImageLoader';
import TrandingBgImg from '../../../../public/assets/img/trending/tranding-bg.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';

const PopularAreaTwo = () => {
    return (
        <>
            <section className="ms-popular__area pt-130 pb-100 p-relative include__bg"
                style={{ backgroundImage: `url(${TrandingBgImg.src})` }}>
                <div className="ms-overlay ms-overlay4 p-absolute"></div>
                <div className="container">
                    <div className="row align-items-end mb-25 bdFadeUp">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper mb-40 bd-title-anim">
                                <span className="section__subtitle">Popular Categories</span>
                                <h2 className="section__title">
                                    Handpicked <span className="ms-text1">party  bands</span> for 2023
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-popular__tab p-relative zindex-1 ms-popular-flex mb-40">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-popular-1-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-popular-1" type="button" role="tab"
                                            aria-controls="nav-popular-1" aria-selected="true">Musical Acts</button>
                                        <button className="nav-link" id="nav-popular-2-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-popular-2" type="button" role="tab"
                                            aria-controls="nav-popular-2" aria-selected="false">Entertainers</button>
                                        <button className="nav-link" id="nav-popular-3-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-popular-3" type="button" role="tab"
                                            aria-controls="nav-popular-3" aria-selected="false">Event
                                            Services</button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row bdFadeUp">
                        <div className="col-xxl-12">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-popular-1" role="tabpanel"
                                    aria-labelledby="nav-popular-1-tab" tabIndex={0}>
                                    <div className="ms-popular2-active">
                                        <Swiper
                                            modules={[Autoplay]}
                                            loop={true}
                                            spaceBetween={25}
                                            slidesPerView={6}
                                            autoplay={true}
                                            speed={6000}
                                            observeParents={true}
                                            observer={true}
                                            breakpoints={{
                                                1800: {
                                                    slidesPerView: 6,
                                                },
                                                1600: {
                                                    slidesPerView: 5,
                                                },
                                                1400: {
                                                    slidesPerView: 4,
                                                },
                                                1200: {
                                                    slidesPerView: 4,
                                                },
                                                992: {
                                                    slidesPerView: 3,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                },
                                                576: {
                                                    slidesPerView: 2,
                                                },
                                                0: {
                                                    slidesPerView: 1,
                                                },
                                            }}
                                        >
                                            {
                                                popular_categories.slice(24, 32).map((item) => (
                                                    <SwiperSlide key={item.id}>
                                                        <div className="ms-popular__item p-relative mb-30">
                                                            <div className="ms-popular__thumb">
                                                                <div className="ms-popular-overlay"></div>
                                                                <Link href={`/genres-details/${item.id}`}>
                                                                    <Image loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }} src={item.image} alt="popular band" />
                                                                </Link>
                                                                <Link href={`/genres-details/${item.id}`} className="ms-popular__link">
                                                                    <span className="ms-popular-icon"><i
                                                                        className="fa-regular fa-arrow-right-long"></i></span>
                                                                </Link>
                                                            </div>
                                                            <h4 className="ms-popular__title"><Link
                                                                href={`/genres-details/${item.id}`}>{item.title}</Link>
                                                            </h4>
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-popular-2" role="tabpanel"
                                    aria-labelledby="nav-popular-2-tab" tabIndex={0}>
                                    <div className="ms-popular2-active">
                                        <Swiper
                                            modules={[Autoplay]}
                                            loop={true}
                                            spaceBetween={25}
                                            slidesPerView={6}
                                            autoplay={true}
                                            speed={6000}
                                            observeParents={true}
                                            observer={true}
                                            breakpoints={{
                                                1800: {
                                                    slidesPerView: 6,
                                                },
                                                1600: {
                                                    slidesPerView: 5,
                                                },
                                                1400: {
                                                    slidesPerView: 4,
                                                },
                                                1200: {
                                                    slidesPerView: 4,
                                                },
                                                992: {
                                                    slidesPerView: 3,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                },
                                                576: {
                                                    slidesPerView: 2,
                                                },
                                                0: {
                                                    slidesPerView: 1,
                                                },
                                            }}
                                        >
                                            {
                                                popular_categories.slice(32, 40).map((item) => (
                                                    <SwiperSlide key={item.id}>
                                                        <div className="ms-popular__item p-relative mb-30">
                                                            <div className="ms-popular__thumb">
                                                                <div className="ms-popular-overlay"></div>
                                                                <Link href={`/genres-details/${item.id}`}>
                                                                    <Image loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }} src={item.image} alt="popular band" />
                                                                </Link>
                                                                <Link href={`/genres-details/${item.id}`} className="ms-popular__link">
                                                                    <span className="ms-popular-icon"><i
                                                                        className="fa-regular fa-arrow-right-long"></i></span>
                                                                </Link>
                                                            </div>
                                                            <h4 className="ms-popular__title"><Link
                                                                href={`/genres-details/${item.id}`}>{item.title}</Link>
                                                            </h4>
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-popular-3" role="tabpanel"
                                    aria-labelledby="nav-popular-3-tab" tabIndex={0}>
                                    <div className="ms-popular2-active">
                                        <Swiper
                                            modules={[Autoplay]}
                                            loop={true}
                                            spaceBetween={25}
                                            slidesPerView={6}
                                            autoplay={true}
                                            speed={6000}
                                            observeParents={true}
                                            observer={true}
                                            breakpoints={{
                                                1800: {
                                                    slidesPerView: 6,
                                                },
                                                1600: {
                                                    slidesPerView: 5,
                                                },
                                                1400: {
                                                    slidesPerView: 4,
                                                },
                                                1200: {
                                                    slidesPerView: 4,
                                                },
                                                992: {
                                                    slidesPerView: 3,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                },
                                                576: {
                                                    slidesPerView: 2,
                                                },
                                                0: {
                                                    slidesPerView: 1,
                                                },
                                            }}
                                        >
                                            {
                                                popular_categories.slice(40, 48).map((item) => (
                                                    <SwiperSlide key={item.id}>
                                                        <div className="ms-popular__item p-relative mb-30">
                                                            <div className="ms-popular__thumb">
                                                                <div className="ms-popular-overlay"></div>
                                                                <Link href={`/genres-details/${item.id}`}>
                                                                    <Image loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }} src={item.image} alt="popular band" />
                                                                </Link>
                                                                <Link href={`/genres-details/${item.id}`} className="ms-popular__link">
                                                                    <span className="ms-popular-icon"><i
                                                                        className="fa-regular fa-arrow-right-long"></i></span>
                                                                </Link>
                                                            </div>
                                                            <h4 className="ms-popular__title"><Link
                                                                href={`/genres-details/${item.id}`}>{item.title}</Link>
                                                            </h4>
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PopularAreaTwo;