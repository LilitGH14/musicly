"use client"
import latest_news_data from '@/data/latest-news-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';


const LatestNewsThree = () => {
    return (
        <>
            <section className="ms-news3-area ms-bg-2 p-relative fix pt-130 pb-90">
                <div className="container">
                    <div className="row justify-content-center bdFadeUp">
                        <div className="col-xl-6">
                            <div className="section__title-wrapper text-center mb-25 bd-title-anim">
                                <span className="section__subtitle">Latest News</span>
                                <h2 className="section__title"><span className="ms-text1">Musicly</span>
                                    Morning Insight
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ms-news3-wrap bdFadeUp">
                    <div className="ms-news3-active">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={"auto"}
                            speed={10000}
                            loop={true}
                            autoplay={{
                                delay: 0
                            }}
                            allowTouchMove={false}
                            effect='slide'
                            breakpoints={{
                                1800: {
                                    slidesPerView: 4,
                                },
                                1400: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 1,
                                },
                                480: {
                                    centeredSlides: false,
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {
                                latest_news_data.slice(6, 15).map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="ms-news3-slick">
                                            <div className="ms-news3-item p-relative">
                                                <Link className="ms-news3-cat" href={`/blog-details/${item.id}`}>{item.category}</Link>
                                                <h3 className="ms-news3-title"><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h3>
                                                <div className="ms-news-meta">
                                                    <ul>
                                                        <li><span>{item.date}</span></li>
                                                        <li><Link href={`/blog-details/${item.id}`}>{item.comment} Comments</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="ms-news3-img w-img ms-br-15 fix">
                                                    <Link href={`/blog-details/${item.id}`}>
                                                        <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                                            alt="news image" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                    </div>
                </div>
            </section >
        </>
    );
};

export default LatestNewsThree;