import genres_listing_data from '@/data/genres-listing-data';
import GetRatting from '@/hooks/GetRating';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/bundle';

const BrandLikeArea = () => {
    return (
        <>
            <section className="ms-like-area pt-125">
                <div className="container">
                    <div className="row mb-25">
                        <div className="col-lg-6">
                            <h2 className="section__title mb-35">You May also like</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-like-nav ms-like-nav-gap d-flex justify-content-lg-end mb-35">
                                <div className="ms-slider-round ms-like-prev"><i className="fas fa-chevron-left"></i>
                                </div>
                                <div className="ms-slider-round ms-like-next"><i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ms-like-active fix">
                                <div>
                                    <Swiper
                                        modules={[Navigation]}
                                        slidesPerView={2}
                                        spaceBetween={30}
                                        loop={true}
                                        navigation={
                                            {
                                                nextEl: ".ms-like-next",
                                                prevEl: ".ms-like-prev",
                                            }
                                        }
                                        breakpoints={{
                                            1600: { slidesPerView: 2 },
                                            1400: { slidesPerView: 2 },
                                            1200: { slidesPerView: 2 },
                                            992: { slidesPerView: 1 },
                                            768: { slidesPerView: 1 },
                                            576: { slidesPerView: 1 },
                                            0: { slidesPerView: 1 },
                                        }}
                                    >
                                        {
                                            genres_listing_data.slice(26, 31).map((item) => (
                                                <SwiperSlide key={item.id}>
                                                    <div className="ms-genres-item ms-genres-flex mb-25">
                                                        <div className="ms-genres-img ms-br-15 fix w-img genres-img-214">
                                                            <Link href={`/genres-details/${item.id}`}>
                                                                <Image src={item.image} loader={imageLoader} placeholder="blur"
                                                                    loading='lazy' style={{ width: '100%', height: "auto" }}
                                                                    alt="genres img" />
                                                            </Link>
                                                            {
                                                                item.videoUrl &&
                                                                <Link className="popup-video ms-genres-video"
                                                                    href={item.videoUrl}><i
                                                                        className="fa-sharp fa-solid fa-play"></i></Link>
                                                            }
                                                            <span className="ms-genres-price">From ${item.price}</span>
                                                        </div>
                                                        <div className="ms-genres-content p-relative">
                                                            <span className="ms-genres-star"><i className="fa-light fa-star"></i></span>
                                                            <h4 className="ms-genres-title"><Link href={`/genres-details/${item.id}`}>
                                                                {item.title}</Link></h4>
                                                            <p className="mb-30">{item.description}</p>
                                                            <div className="ms-fun-brand-bottom ms-genres-rating">
                                                                <div className="ms-fun-brand-location">
                                                                    <Link href={item.mapLink} target="_blank">
                                                                        <i className="flaticon-pin"></i>{item.location}</Link>
                                                                </div>
                                                                <div className="ms-fun-brand-rating">
                                                                    <GetRatting
                                                                        averageRating={item.ratings}
                                                                    />
                                                                    <span>({item.ratingNum})</span>
                                                                </div>
                                                            </div>
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
                </div>
            </section >
        </>
    );
};

export default BrandLikeArea;