"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import FooterLogo from '../../../../public/assets/img/logo/footer-logo.png';
import FooterDot from '../../../../public/assets/img/header/menu-dot.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';
import OffcanvasArea from '@/components/common/offcanvas-area/OffcanvasArea';
import SearchPopup from '@/components/home-3/SearchPopup';

const NavigationSliderArea = () => {
    const [isOpenInfoSidebar, setIsOpenInfoSidebar] = useState(false)
    const [openSearchPopup, setOpenSearchPopup] = useState(false)
    const handleInfoToggle = () => {
        setIsOpenInfoSidebar(!isOpenInfoSidebar)
    }
    const SerchPopupToggle = () => {
        setOpenSearchPopup(!openSearchPopup)
    }
    return (
        <>
            <div className="ms-navigation-area fix">
                <div className=" ms-navigation-wrap ms-bg-3">
                    <div className="d-none d-xl-block">
                        <div className="ms-nl-wrap ms-bg-5">
                            <div className="ms-nl-item">
                                <div className="ml-nl-logo ms-mw-142 m-img">
                                    <Link href="/">
                                        <Image src={FooterLogo} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                            alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="ms-nl-item">
                                <button onClick={handleInfoToggle} className="ms-dot-toggle ms-cp sidebar__toggle">
                                    <Image src={FooterDot} loader={imageLoader} loading='lazy' width={40} height={38}
                                        alt="menu dot" />
                                </button>
                            </div>
                            <div className="ms-nl-item">
                                <div className="ms-nl-search">
                                    <button onClick={SerchPopupToggle} className="ms-search-btn"><i className="flaticon-loupe"></i> Find
                                        Acts</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-navigation-slider">
                        <div className="ms-ns-active marquee-slide">
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
                            >

                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">dancer</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Singer</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Bands</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">magician</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">dancer</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Singer</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Bands</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Party</Link></h3>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div >
            <OffcanvasArea isOpenInfoSidebar={isOpenInfoSidebar} setIsOpenInfoSidebar={setIsOpenInfoSidebar} />
            <div onClick={() => setIsOpenInfoSidebar(false)}
                className={isOpenInfoSidebar ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"}></div>

            <SearchPopup openSearchPopup={openSearchPopup} setOpenSearchPopup={setOpenSearchPopup} />
            <div onClick={() => setOpenSearchPopup(false)}
                className={openSearchPopup ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"}></div>

        </>
    );
};

export default NavigationSliderArea;