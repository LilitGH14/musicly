import latest_news_data from '../../data/latest-news-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sidebarBanner from '../../../public/assets/img/news/news-07.jpg';
import sidebarBannerLogo from '../../../public/assets/img/logo/white-logo.png';
type TSpacing = {
    spacingClass: string
}

const BlogSidebar = ({ spacingClass }: TSpacing) => {
    return (
        <>
            <div className={`${spacingClass} ms-news-sidebar`}>
                <div className="ms-news-widget">
                    <div className="ms-input2-box p-relative">
                        <input type="text" placeholder="Search Here . . ." />
                        <button className="ms-input2-search" type="submit"><i
                            className="flaticon-loupe"></i></button>
                    </div>
                </div>
                <div className="ms-news-widget">
                    <h3 className="ms-news-widget-title">Categories</h3>
                    <ul>
                        <li><Link href="/blog-details">Alternative Music</Link></li>
                        <li><Link href="/blog-details">Asian Pop (J-Pop, K-Pop)</Link></li>
                        <li><Link href="/blog-details">Classical Music</Link></li>
                        <li><Link href="/blog-details">Dance Music</Link></li>
                        <li><Link href="/blog-details">Easy Listening</Link></li>
                        <li><Link href="/blog-details">Electronic Music</Link></li>
                        <li><Link href="/blog-details">European Music (Folk/Pop)</Link></li>
                    </ul>
                </div>
                <div className="ms-news-widget">
                    <h3 className="ms-news-widget-title">Recent Post</h3>
                    <div className="ms-news-widget-content">

                        {
                            latest_news_data.slice(28, 32).map((item) => (
                                <div className="rc-post" key={item.id}>
                                    <div className="d-flex">
                                        <div className="rc-thumb mr-20">
                                            <Link href={`/blog-details/${item.id}`}>
                                                <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy' width={75} height={78}
                                                    alt="news rc image" />
                                            </Link>
                                        </div>
                                        <div className="rc-text widget-post-body">
                                            <div className="rc-meta widget-post-meta"> {item.date}
                                            </div>
                                            <h6 className="widget-post-title"><Link href={`/blog-details/${item.id}`}>
                                                {item.title}</Link></h6>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="ms-news-widget">
                    <h3 className="ms-news-widget-title">Tags</h3>
                    <div className="tagcloud">
                        <Link href="#">Music</Link>
                        <Link href="#">Entertainer</Link>
                        <Link href="#">Events</Link>
                        <Link href="#">Album</Link>
                        <Link href="#">Musician</Link>
                        <Link href="#">Bands</Link>
                    </div>
                </div>
                <div className="ms-news-widget">
                    <div className="ms-news-widget-banner p-relative d-inline-block">
                        <div className="ms-news-widget-img m-img ms-br-15 fix p-relative zindex-1">
                            <div className="ms-overlay ms-overlay11"></div>
                            <Image src={sidebarBanner} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                alt="banner image" />
                        </div>
                        <div className="ms-news-widget-banner-content p-absolute zindex-5">
                            <div className="ms-news-widget-log">
                                <Link href="/"><Image src={sidebarBannerLogo} width={146} height={57}
                                    alt="logo" /></Link>
                            </div>
                            <p>Musician & Band Party
                                Hiring agency</p>
                            <div className="ms-news-widget-btn">
                                <Link className="ms-purchase-btn" href="#">Purchase Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSidebar;