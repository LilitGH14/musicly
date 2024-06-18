"use client"
import React from 'react';
import testimonialLineImg from '../../../../public/assets/img/testimonial/testimonial-line.png';
import image1 from '../../../../public/assets/img/testimonial/testimonial-07.png';
import image2 from '../../../../public/assets/img/testimonial/testimonial-08.png';
import image3 from '../../../../public/assets/img/testimonial/testimonial-09.png';
import image4 from '../../../../public/assets/img/testimonial/testimonial-10.png';
import image5 from '../../../../public/assets/img/testimonial/testimonial-11.png';
import image6 from '../../../../public/assets/img/testimonial/testimonial-12.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import { TImageData } from '@/types/types';
import testimonial_data from '@/data/testimonial-data';
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css/bundle';

const TestimonialSliderThree = () => {
    const imageData: TImageData[] = [
        {
            id: 1,
            wrapperClass: "ms-tm2-img1",
            image: image1
        },
        {
            id: 2,
            wrapperClass: "ms-tm2-img2",
            image: image2
        },
        {
            id: 3,
            wrapperClass: "ms-tm2-img3",
            image: image3
        },
        {
            id: 4,
            wrapperClass: "ms-tm2-img4",
            image: image4
        },
        {
            id: 5,
            wrapperClass: "ms-tm2-img5",
            image: image5
        },
        {
            id: 6,
            wrapperClass: "ms-tm2-img6",
            image: image6
        },
    ]
    return (
        <>
            <section className="ms-tm2-area p-relative fix pt-10 pb-125">
                <div className="ms-tm2-line p-absolute">
                    <Image loader={imageLoader} placeholder="blur" loading='lazy'
                        style={{ width: 'auto', height: "auto" }} src={testimonialLineImg}
                        alt="testimonial line" />
                </div>
                <div className="container">
                    <div className="row justify-content-center bdFadeUp">
                        <div className="col-xl-6">
                            <div className="section__title-wrapper text-center mb-65 bd-title-anim">
                                <span className="section__subtitle">Awesome Feedbacks</span>
                                <h2 className="section__title">Peoples <span className="animated-underline active">Think
                                    About</span>
                                    us
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="ms-tm2-imgs-wrap p-relative">
                        {
                            imageData.map((img) => (
                                <div className={`${img.wrapperClass} ms-tm2-shadow p-absolute w-img d-none d-md-block`} key={img.id}>
                                    <Image loader={imageLoader} src={img.image} placeholder="blur" loading='lazy'
                                        style={{ width: '100%', height: "auto" }} alt="testimonial image" />
                                </div>
                            ))
                        }
                        <div className="row justify-content-center bdFadeUp">
                            <div className="col-xl-8">
                                <div className="ms-tm2-wrap">
                                    <div className="ms-tm2-active">
                                        <Swiper
                                            modules={[Autoplay, Pagination]}
                                            slidesPerView={1}
                                            speed={300}
                                            autoplay={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            className='ms-event-dots'
                                        >
                                            {
                                                testimonial_data.slice(3, 6).map((item) => (
                                                    <SwiperSlide key={item.id}>
                                                        <div className="ms-tm2-item text-center">
                                                            <div className="ms-tm2-img-main">
                                                                <div className="ms-tm2-img-wrap p-relative d-inline-block mx-auto">
                                                                    <div className="ms-tm2-signature w-img">
                                                                        {item.signatureImg &&
                                                                            <Image src={item.signatureImg} loader={imageLoader} placeholder="blur" loading='lazy'
                                                                                style={{ width: '100%', height: "auto" }}
                                                                                alt="testimonial signature" />
                                                                        }
                                                                    </div>
                                                                    <div className="ms-tm2-author-img m-img">
                                                                        {item.image &&
                                                                            <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy'
                                                                                style={{ width: '100%', height: "auto" }}
                                                                                alt="testimonial image" />
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="ms-tm2-content pt-35">
                                                                    <div className="ms-tm2-quotation mb-25">
                                                                        <i className="flaticon-quotation"></i>
                                                                    </div>
                                                                    <p className="ms-tm2-text mb-30">{item.description}</p>
                                                                    <div className="ms-tm2-author">
                                                                        <span className="ms-tm2-name">{item.authorName}</span>
                                                                        <span className="ms-tm2-designation">{item.designation}</span>
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
                </div>
            </section >
        </>
    );
};

export default TestimonialSliderThree;