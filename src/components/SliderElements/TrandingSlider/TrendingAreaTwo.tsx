"use client"
import Link from 'next/link';
import React from 'react';
import trending_genre_data from '../../../data/trending-genres-data';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import trandingBg from '../../../../public/assets/img/trending/tranding-bg.png';
import { PhotoProvider, PhotoView } from 'react-photo-view';
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';

const TrendingAreaTwo = () => {
    return (
        <>
            <section className="trending__area p-relative fix pt-130 include__bg pb-130"
                style={{ backgroundImage: `url(${trandingBg.src})` }}>
                <div className="ms-overlay ms-overlay4 p-absolute"></div>
                <div className="container">
                    <div className="row align-items-end mb-25 bdFadeUp ">
                        <div className="col-lg-8">
                            <div className="section__title-wrapper mb-40 bd-title-anim">
                                <span className="section__subtitle">Trending Genres</span>
                                <h2 className="section__title"><span className="animated-underline active">Most
                                    Trending</span>
                                    genres</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trending-btn mb-40 d-flex justify-content-lg-end">
                                <Link className="border__btn zindex-5" href="/genres">View All Genres</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ms-trending-active-wrap bdFadeUp">
                    <div className="ms-trending-active">
                        <div>
                            <PhotoProvider
                                speed={() => 800}
                                easing={(type) =>
                                    type === 2
                                        ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                        : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                                }
                            >
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={false}
                                    spaceBetween={24}
                                    autoplay={{
                                        delay: 3000
                                    }}
                                    speed={6000}
                                    observeParents={true}
                                    observer={true}
                                    breakpoints={{
                                        1600: { slidesPerView: 4, },
                                        1400: { slidesPerView: 3, },
                                        1200: { slidesPerView: 3, },
                                        992: { slidesPerView: 2, },
                                        768: { slidesPerView: 2, },
                                        576: { slidesPerView: 2, },
                                        450: { slidesPerView: 1, },
                                        0: { slidesPerView: 1, }
                                    }}
                                >
                                    {
                                        trending_genre_data.slice(6, 16).map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className="ms-trending2-item fix">
                                                    <div className="ms-trending2-overlay p-absolute"></div>
                                                    <span className="trending__title">{item.title}</span>
                                                    <div className="trending__price">
                                                        <span>From ${item.price}</span>
                                                    </div>
                                                    <div className="ms-trending2-img w-img">
                                                        <Link href={`/genres-details/${item.id}`}>
                                                            <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy'
                                                                style={{ width: '100%', height: "auto" }} alt="trending image" />
                                                        </Link>
                                                    </div>
                                                    <div className="ms-trending2-content">
                                                        <div className="ms-trending2-shape">
                                                            {item.shapeImg &&
                                                                <Image src={item.shapeImg} loader={imageLoader} loading='lazy'
                                                                    style={{ width: '100%', height: "auto" }} alt="trending shape" />
                                                            }
                                                        </div>
                                                        <div className="ms-trending2-title-wrap">
                                                            <Link className="ms-trending2-title p-relative ms-title-border"
                                                                href={`/genres-details/${item.id}`}>{item.subTitle}</Link>
                                                            <PhotoView src={item.image.src}>
                                                                <button className="ms-round-btn popup-image">
                                                                    <i className="flaticon-right-arrow-1"></i></button>
                                                            </PhotoView>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </PhotoProvider>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default TrendingAreaTwo;