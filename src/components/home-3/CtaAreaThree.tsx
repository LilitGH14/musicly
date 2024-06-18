"use client"
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import React from 'react';
import CtaImg from '../../../public/assets/img/cta/cta-01.png';
import PlayStoreImage from '../../../public/assets/img/cta/app-store.png';
import StoreImage from '../../../public/assets/img/cta/app-store.png';
import Link from 'next/link';

const CtaAreaThree = () => {
    return (
        <>
            <section className="ms-cta-area pt-130 pb-130 p-relative zindex-10">
                <div className="container">
                    <div className="ms-cta-bg black-bg fix">
                        <div className="ms-cta-wrap">
                            <div className="ms-cta-item">
                                <div className="ms-cta-content">
                                    <h2 className="section__title mb-25">Best way to Hire to Musician
                                    </h2>
                                    <p className="mb-0">Party Bands For Hire a Live Music Agency offering an
                                        unknown
                                        printer took a
                                        galley
                                        wtnd scrambled
                                        it
                                        to
                                        makeive centuriesbut
                                        also.</p>
                                </div>
                            </div>
                            <div className="ms-cta-item">
                                <div className="ms-cta-img">
                                    <Image src={CtaImg} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }} alt="cta image" />
                                </div>
                            </div>
                            <div className="ms-cta-item">
                                <div className="ms-cta-app">
                                    <Link target="_blank" href="#">
                                        <Image loader={imageLoader} loading='lazy' style={{ width: '100%', height: "auto" }} src={StoreImage} alt="app store" />
                                    </Link>
                                    <Link target="_blank" href="#">
                                        <Image loader={imageLoader} loading='lazy' style={{ width: '100%', height: "auto" }} src={PlayStoreImage} alt="App play store" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CtaAreaThree;