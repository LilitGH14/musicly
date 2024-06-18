'use client'
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import IdeasAdviceSidebar from './IdeasAdviceSidebar';
import PaginationTwo from '../common/pagination/PaginationTwo';
import ideas_advice_data from '@/data/ideas-advice-data';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';

const IdeasAdviceMain = () => {
    return (
        <>
            <Breadcrumb title='Ideas & advice' />
            <section className="ms-news-area pb-40 pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-8">
                            <IdeasAdviceSidebar />
                        </div>
                        <div className="col-xl-8 col-lg-12">
                            <div className="ms-ideas-item-wrap mb-70">
                                <div className="ms-ideas-item-grid mb-65">
                                    {
                                        ideas_advice_data.slice(0, 6).map((item) => (
                                            <div className="ms-ideas-item" key={item.id}>
                                                <div className="ms-ideas-img w-img ms-br-15 mb-30">
                                                    <Link href={`/ideas-advice-details/${item.id}`}>
                                                        <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                                            alt="ideas advice image" />
                                                    </Link>
                                                </div>
                                                <h3 className="ms-title3 white-text"><Link href={`/ideas-advice-details/${item.id}`}>
                                                    {item.title}
                                                </Link></h3>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="basic-pagination ms-border5">
                                    <PaginationTwo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PartnerAreaMain />
        </>
    );
};

export default IdeasAdviceMain;