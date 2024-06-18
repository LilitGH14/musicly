"use client"
import React from 'react';
import BannerImg1 from '../../../public/assets/img/banner/banner-thumb-04.png';
import BannerImg2 from '../../../public/assets/img/banner/banner-thumb-05.png';
import BannerImg3 from '../../../public/assets/img/banner/banner-thumb-06.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import JoinInformationForm from '@/form/join-information-form';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';

const JoinAreaMainArea = () => {
    return (
        <>
            <section className="ms-join-area pb-60 pt-130 p-relative">
                <div className="ms-join-position p-absolute text-center">
                    <h2 className="ms-title2 white-text mb-50">Join With us</h2>
                    <div className="ms-banner3-item-wrap ms-join-img-grid">
                        <div className="ms-banner3-item d-none d-md-block">
                            <div className="ms-banner3-img1 ms-opacity-2 p-relative m-img">
                                <div className="ms-overlay2 p-absolute"></div>
                                <Image src={BannerImg1} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                    alt="banner image" />
                            </div>
                        </div>
                        <div className="ms-banner3-item d-none d-md-block">
                            <div className="ms-banner3-img2 m-img p-relative">
                                <Image src={BannerImg2} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                    alt="banner image" />
                            </div>
                        </div>
                        <div className="ms-banner3-item d-none d-md-block">
                            <div className="ms-banner3-img3 ms-opacity-2 p-relative m-img">
                                <div className="ms-overlay2 p-absolute"></div>
                                <Image src={BannerImg3} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                    alt="banner image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ms-join-wrap ms-join-space mb-70 ms-bg-2">
                                <h3 className="white-text ms-title3 mb-60">Add Your Information</h3>
                                <JoinInformationForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PartnerAreaMain />
        </>
    );
};

export default JoinAreaMainArea;