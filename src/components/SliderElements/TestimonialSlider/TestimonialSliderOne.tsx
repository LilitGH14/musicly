"use client"
import React from 'react';
import imageOne from "../../../../public/assets/img/testimonial/testimonial-01.jpg";
import imageTwo from "../../../../public/assets/img/testimonial/testimonial-02.jpg";
import imageThree from "../../../../public/assets/img/testimonial/testimonial-03.jpg";
import imageFour from "../../../../public/assets/img/testimonial/testimonial-04.jpg";
import imageFive from "../../../../public/assets/img/testimonial/testimonial-05.png";
import signatureImage from "../../../../public/assets/img/testimonial/testimonial-signature.png";
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css/bundle';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import testimonial_data from '@/data/testimonial-data';
import { TImageData } from '@/types/types';

const TestimonialSliderOne = () => {
    const imageData: TImageData[] = [
        {
            id: 1,
            wrapperClass: "ms-tm-img1",
            image: imageOne
        },
        {
            id: 2,
            wrapperClass: "ms-tm-img2",
            image: imageTwo
        },
        {
            id: 3,
            wrapperClass: "ms-tm-img3",
            image: imageThree
        },
        {
            id: 4,
            wrapperClass: "ms-tm-img4",
            image: imageFour
        },
        {
            id: 5,
            wrapperClass: "ms-tm-img5",
            image: imageTwo
        }
    ]
    return (
        <>
            <section className="ms-tm-area">
                <div className="container">
                    <div className="ms-tm-border pt-130 pb-70">
                        <div className="row align-items-center bdFadeUp">
                            <div className="col-xl-5">
                                <div className="ms-tm-img-wrap ms-tm-space p-relative mb-60">
                                    <div className="ms-tm-img-main p-relative m-img">
                                        <div className="ms-tm-bg-shape"></div>
                                        <div className="ms-tm-signature">
                                            <Image style={{ width: '100%', height: "auto" }} src={signatureImage}
                                                alt="testimonial signature" />
                                        </div>
                                        <Image loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }} src={imageFive}
                                            alt="testimonial image" />
                                    </div>
                                    {
                                        imageData.map((img) => (
                                            <div className={`${img.wrapperClass} p-absolute w-img`} key={img.id}>
                                                <Image src={img.image} loader={imageLoader} placeholder="blur" loading='lazy'
                                                    style={{ width: '100%', height: "auto" }}
                                                    alt="testimonial image" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="ms-tm-content-wrap ms-tm-content-space mb-60">
                                    <div className="ms-tm-quotation text-end">
                                        <i className="flaticon-quotation"></i>
                                    </div>
                                    <div className="section__title-wrapper mb-30 bd-title-anim">
                                        <span className="section__subtitle">Clients Feedback</span>
                                        <h2 className="section__title"><span className="animated-underline active">Public
                                            Awesome</span> {" "}
                                            Comments
                                        </h2>
                                    </div>
                                    <div className="ms-tm-content">
                                        <div className="ms-tm-active">
                                            <Swiper
                                                modules={[Autoplay, Pagination]}
                                                speed={1000}
                                                slidesPerView={1}
                                                loop={true}
                                                autoplay={{
                                                    delay: 6000,
                                                }}
                                                pagination={{
                                                    el: '.ms-tm-dots',
                                                    clickable: true,
                                                }}
                                                spaceBetween={0}
                                                freeMode={false}
                                            >
                                                {
                                                    testimonial_data.slice(0, 3).map((item) => (
                                                        <SwiperSlide key={item.id}>
                                                            <div className="ms-tm-slick">
                                                                <div className="ms-tm-slick-item">
                                                                    <p>{item.description}</p>
                                                                    <div className="ms-tm-author">
                                                                        <h4 className="ms-tm-author-title">{item.authorName}</h4>
                                                                        <span className="ms-tm-author-subtitle">{item.title}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                            </Swiper>
                                        </div>
                                        <div className='ms-tm-dots'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
};

export default TestimonialSliderOne;