"use client"
import latest_news_data from '@/data/latest-news-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LatestNewsTwo = () => {
    return (
        <>
            <section className="ms-news-area ms-bg-2 pt-130 pb-90">
                <div className="container">
                    <div className="row justify-content-center bdFadeUp">
                        <div className="col-xl-6">
                            <div className="section__title-wrapper text-center mb-65 bd-title-anim">
                                <span className="section__subtitle">Latest News</span>
                                <h2 className="section__title">Musicly
                                    <span className="animated-underline active">Morning Insight</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row bdFadeUp">
                        {
                            latest_news_data.slice(3, 6).map((item) => (
                                <div className="col-xl-4 col-md-6" key={item.id}>
                                    <div className="ms-news-item p-relative zindex-1 mb-40">
                                        <div className="ms-news-overlay p-absolute"></div>
                                        <div className="ms-news-thumb w-img">
                                            <Link href={`/blog-details/${item.id}`}>
                                                <Image loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }} src={item.image}
                                                    alt="news image" />
                                            </Link>
                                        </div>
                                        <div className="ms-news-content ms-news-position p-absolute">
                                            <Link className="ms-news2-cat mb-30" href={`/blog-details/${item.id}`}>{item.category}</Link>
                                            <h3 className="ms-news-title mb-15"><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h3>
                                            <div className="ms-news-meta d-inline-block">
                                                <span>{item.date}</span>
                                                <span><Link href={`/blog-details/${item.id}`}>{item.comment} Comments</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default LatestNewsTwo;