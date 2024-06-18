"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogSidebar from '../blog/BlogSidebar';
import Link from 'next/link';
import CommentForm from '@/form/comment-form';
import CommentSection from './CommentSection';
import NewsContent from './NewsContent';
import newsImg from '../../../public/assets/img/news/news-06.jpg';
import authorImg from '../../../public/assets/img/news/author.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import { TLetestNews, idType } from '@/types/types';
import latest_news_data from '@/data/latest-news-data';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';

const BlogDetailsMainArea = ({ id }: idType) => {
    const news: TLetestNews | undefined = latest_news_data.find((item) => item.id == id);
    return (
        <>
            <Breadcrumb title={news?.title} />
            <section className="ms-news-area pb-80 pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12">
                            <div className="ms-news-dwrap mb-50">
                                <div className="ms-news-dbox mb-45">
                                    <div className="ms-news-img m-img fix ms-br-15 mb-30">
                                        <Image src={newsImg} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                            alt="news images" />
                                        <span className="ms-news-cat"><Link href="/blog-details">{news?.category}</Link></span>
                                    </div>
                                    <NewsContent news={news} />
                                </div>
                                <div className="md-author-area mb-65">
                                    <div className="ms-author-img">
                                        <Link href="#">
                                            <Image src={authorImg} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                                alt="author img" />
                                        </Link>
                                    </div>
                                    <div className="ms-author-content">
                                        <h3>Written By: <Link href="#">Adam smith</Link></h3>
                                        <p>{news?.description}</p>
                                    </div>
                                </div>
                                <div className="ms-comment-box mb-65">
                                    <h3 className="ms-title4 mb-55">Comments: 02</h3>
                                    <CommentSection />
                                </div>
                                <div className="ms-comment-form">
                                    <h3 className="ms-title4 mb-35">Leave a Comments</h3>
                                    <CommentForm />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-8">
                            <BlogSidebar spacingClass='mb-50' />
                        </div>
                    </div>
                </div>
            </section>
            <PartnerAreaMain borderWrapperClass='ms-border5' spacingClass='pt-130' />
        </>
    );
};

export default BlogDetailsMainArea;