"use client"
import trending_genre_data from '../../data/trending-genres-data';
import Link from 'next/link';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const TrendingareaOne = () => {
    return (
        <section className="trending__area p-relative z-index-11 x-clip pt-130 pb-130">
            <span className="trending-round-bg-1"></span>
            <span className="trending-round-bg-2"></span>
            <div className="container">
                <div className="row align-items-end mb-25 bdFadeUp">
                    <div className="col-lg-8">
                        <div className="section__title-wrapper mb-40 bd-title-anim">
                            <span className="section__subtitle">Trending Genres</span>
                            <div id="msg-title">
                                <h2 className="section__title"><span className="animated-underline active">Most
                                    Trending</span> {" "}
                                    genres</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="trending-btn mb-40 d-flex justify-content-lg-end">
                            <Link className="border__btn" href="/genres">View All Genres</Link>
                        </div>
                    </div>
                </div>
                <div className="row bdFadeUp">
                    <div className="trending-grid">
                        <PhotoProvider
                            speed={() => 800}
                            easing={(type) =>
                                type === 2
                                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                            }
                        >
                            {
                                trending_genre_data.slice(0, 6).map((item) => (
                                    <div className="trending-item" key={item.id}>
                                        <div className="trending__thumb" style={{ backgroundImage: `url(${item.image.src})` }}></div>
                                        <div className="trending__info">
                                            <div className="trending__number">
                                                <span>{item.serialNumber}</span>
                                            </div>
                                            <div className="trending__arrow">
                                                <PhotoView src={item.image.src}>
                                                    <button className="popup-image"><i
                                                        className="fa-regular fa-arrow-right-long"></i></button>
                                                </PhotoView>
                                            </div>
                                            <div className="trending__price">
                                                <span>From ${item.price}</span>
                                            </div>
                                            <span className="trending__title">{item.title}</span>
                                            <div className="trending__content">
                                                <h4><Link href={`/genres-details/${item.id}`}>{item.subTitle}</Link></h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </PhotoProvider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingareaOne;