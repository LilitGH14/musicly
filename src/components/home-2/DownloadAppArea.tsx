"use client"
import Link from 'next/link';
import React from 'react';
import AppStoreImg from '../../../public/assets/img/cta/app-store.png';
import amazonmusicImg from '../../../public/assets/img/cta/amazonmusic.png';
import playStoreImg from '../../../public/assets/img/cta/play-store.png';
import circleBgImg from '../../../public/assets/img/bg/app-cricle-bg.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const DownloadAppArea = () => {
    return (
        <>
            <section className="ms-app-area fix pb-70">
                <div className="container">
                    <div className="row align-items-center bdFadeUp">
                        <div className="col-xl-6">
                            <div className="ms-app-left mb-45">
                                <div className="section__title-wrapper mb-40 bd-title-anim">
                                    <span className="section__subtitle">Download Musicly</span>
                                    <h2 className="section__title">Best way to <span className="animated-underline active">Hire to
                                        Musician</span>
                                    </h2>
                                </div>
                                <p className="ms-app-text mb-65">Our hand-picked acts will guarantee you fantastic
                                    wedding
                                    entertainment for
                                    each part. {`We'll`}
                                    provide help and support 24
                                    hours a day, 7 days a week, right up until</p>
                                <div className="ms-app-inner ms-app-list ms-app-opacity">
                                    <Link href="#" target="_blank">
                                        <Image loader={imageLoader} placeholder="blur"
                                            loading='lazy' width={175} height={51} src={AppStoreImg}
                                            alt="app store" />
                                    </Link>
                                    <Link href="#" className="active" target="_blank">
                                        <Image loader={imageLoader} placeholder="blur"
                                            loading='lazy' width={175} height={51} src={amazonmusicImg}
                                            alt="amazon music" />
                                    </Link>
                                    <Link href="#" target="_blank">
                                        <Image loader={imageLoader} placeholder="blur"
                                            loading='lazy' width={175} height={51} src={playStoreImg}
                                            alt="play store" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="ms-app-right m-img mb-60">
                                <Image loader={imageLoader}
                                    loading='lazy' style={{ width: '100%', height: "auto" }} src={circleBgImg}
                                    alt="app circle" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DownloadAppArea;