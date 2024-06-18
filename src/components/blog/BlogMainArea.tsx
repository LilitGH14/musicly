"use client"
import React, { useState } from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import PaginationTwo from '../common/pagination/PaginationTwo';
import latest_news_data from '@/data/latest-news-data';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import ModalVideo from 'react-modal-video';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';

const BlogMainArea = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);
    return (
        <>
            <Breadcrumb title='Musicly Latest Blog' />
            <section className="ms-news-area pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12">
                            <div className="ms-news-wrap mb-70">
                                {
                                    latest_news_data.slice(24, 28).map((item) => (
                                        <div className="ms-news-box mb-25" key={item.id}>
                                            <div className="ms-news-img m-img fix ms-br-15 mb-30">
                                                <Link href={`/blog-details/${item.id}`}>
                                                    <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                                        alt="news images" />
                                                </Link>
                                                <span className="ms-news-cat"><Link href={`/blog-details/${item.id}`}>{item.category}</Link></span>
                                                {
                                                    item.videoUrl &&
                                                    <button onClick={() => { openVideoModal() }} className="popup-video ms-news-video" ><i
                                                        className="fa-sharp fa-solid fa-play"></i></button>
                                                }
                                            </div>
                                            <div className="ms-news-content">
                                                <div className="ms-news-meta-wrap mb-20">
                                                    <span className="ms-news-by">By :</span>
                                                    <div className="ms-news-meta d-inline-block">
                                                        <span><Link href="news-details.html">Musicly</Link></span>
                                                        <span>{item.date}</span>
                                                        <span><Link href="news-details.html">{item.comment} Comments</Link></span>
                                                    </div>
                                                </div>
                                                <h3 className="ms-news-title2 mb-30"><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h3>
                                                <p className="mb-45">{item.description}</p>
                                                <div className="ms-news-btn">
                                                    <Link className="ms-border-btn" href={`/blog-details/${item.id}`}>Continue
                                                        Reading</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="basic-pagination">
                                    <PaginationTwo />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-8">
                            <BlogSidebar spacingClass='mb-70' />
                        </div>
                    </div>
                </div>
            </section>
            <PartnerAreaMain borderWrapperClass='ms-border5' spacingClass='pt-130' />
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="3FWSZ6lvaSk" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default BlogMainArea;