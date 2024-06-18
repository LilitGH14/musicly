"use client"
import trending_genre_data from '@/data/trending-genres-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const TrandingAreaThree = () => {
    return (
        <>
            <section className="trending__area p-relative z-index-11 pt-130 pb-60">
                <div className="container">
                    <div className="row align-items-end mb-25 bdFadeUp">
                        <div className="col-lg-8">
                            <div className="section__title-wrapper mb-40 bd-title-anim">
                                <span className="section__subtitle">Trending Genres</span>
                                <h2 className="section__title">Most <span className="ms-text1">Trending
                                    genres</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trending-btn mb-40 d-flex justify-content-lg-end">
                                <Link className="border__btn" href="/genres">View All Genres</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row ms-trending3-wrap bdFadeUp">
                        <PhotoProvider
                            speed={() => 800}
                            easing={(type) =>
                                type === 2
                                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                            }
                        >
                            {
                                trending_genre_data.slice(16, 19).map((item) => (
                                    <div className="col-xl-4 col-md-6" key={item.id}>
                                        <div className="ms-trending3-item p-relative fix mb-40">
                                            <div className="ms-trending3-img w-img ms-br-15 p-relative fix mb-30">
                                                <Link href={`/genres-details/${item.id}`}>
                                                    <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                                        alt="trending image" />
                                                </Link>
                                                <div className="trending__arrow">
                                                    <PhotoView src={item.image.src}>
                                                        <button className="popup-image"><i
                                                            className="fa-regular fa-arrow-right-long"></i></button>
                                                    </PhotoView>
                                                </div>
                                                <span className="trending__title">{item.title}</span>
                                                <div className="trending__number">
                                                    <span>{item.serialNumber}</span>
                                                </div>
                                                <div className="trending__price">
                                                    <span>From ${item.price}</span>
                                                </div>
                                            </div>
                                            <div className="ms-trending3-content">
                                                <h3 className="ms-trending3-title mb-25">
                                                    <Link href={`/genres-details/${item.id}`}>{item.subTitle}</Link></h3>
                                                <p className="ms-trending3-text">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </PhotoProvider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrandingAreaThree;