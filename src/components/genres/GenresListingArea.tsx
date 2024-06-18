"use client"
import genres_listing_data from '@/data/genres-listing-data';
import GetRatting from '@/hooks/GetRating';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PaginationData from '../common/pagination/pagination-data';
import NiceSelect from '../common/NiceSelect';
type TNiceSelectData = {
    id: number;
    optionName: string
}

const GenresListingArea = () => {
    const genres_select: TNiceSelectData[] = [
        { id: 1, optionName: "Most popular" },
        { id: 2, optionName: "Recent" },
        { id: 3, optionName: "Most View" },
        { id: 4, optionName: "trending" }
    ]
    const selectHandler = () => { }
    return (
        <>
            <div className="ms-genres-listing pt-130 pb-110 ">
                <div className="container">
                    <div className="ms-border2 pb-30 mb-65">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="ms-genres-filter ms-genres-select ms-genres-nice-select">
                                    <span className="ms-genres-text">Short by :</span>
                                    <div className="ms-nice-select float-none">
                                        <NiceSelect
                                            options={genres_select}
                                            defaultCurrent={0}
                                            onChange={selectHandler}
                                            name=""
                                            className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <ul className="nav nav-tabs border-0 ms-genres-tab justify-content-sm-end d-none d-xl-flex"
                                    id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                            data-bs-target="#home-tab-pane" type="button" role="tab"
                                            aria-controls="home-tab-pane" aria-selected="true">
                                            <span className="ms-genres-tab-bar">
                                                <span></span>
                                                <span></span>
                                            </span>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                            data-bs-target="#profile-tab-pane" type="button" role="tab"
                                            aria-controls="profile-tab-pane" aria-selected="false">
                                            <span className="ms-genres-tab-bar">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                            aria-labelledby="home-tab" tabIndex={0}>
                            <div className="row">
                                {
                                    genres_listing_data.slice(0, 14).map((item) => (
                                        <div className="col-xl-6" key={item.id}>
                                            <div className="ms-genres-item ms-genres-flex mb-25">
                                                <div className="ms-genres-img ms-br-15 fix w-img genres-img-214">
                                                    <Link href={`/genres-details/${item.id}`}>
                                                        <Image src={item.image} loader={imageLoader} placeholder="blur"
                                                            loading='lazy' style={{ width: '100%', height: "auto" }}
                                                            alt="genres img" />
                                                    </Link>
                                                    {
                                                        item.videoUrl &&
                                                        <Link className="popup-video ms-genres-video"
                                                            href={item.videoUrl}><i
                                                                className="fa-sharp fa-solid fa-play"></i></Link>
                                                    }
                                                    <span className="ms-genres-price">From ${item.price}</span>
                                                </div>
                                                <div className="ms-genres-content p-relative">
                                                    <span className={`ms-genres-star ${item.activeClass}`}><i className="fa-light fa-star"></i></span>
                                                    <h4 className="ms-genres-title">
                                                        <Link href={`/genres-details/${item.id}`}>{item.title}</Link>
                                                    </h4>
                                                    <p className="mb-30">{item.description}</p>
                                                    <div className="ms-fun-brand-bottom ms-genres-rating">
                                                        <div className="ms-fun-brand-location">
                                                            <Link href={item.mapLink} target="_blank"> <i
                                                                className="flaticon-pin"></i>{item.location}</Link>
                                                        </div>
                                                        <div className="ms-fun-brand-rating">
                                                            <GetRatting
                                                                averageRating={item.ratings}
                                                            />
                                                            <span>({item.ratingNum})</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <PaginationData />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                            tabIndex={0}>
                            <div className="row">
                                {
                                    genres_listing_data.slice(14, 23).map((item) => (
                                        <div className="col-xl-4 col-lg-6" key={item.id}>
                                            <div className="ms-genres-item mb-25">
                                                <div className="ms-genres-img ms-br-15 fix w-img mb-30">
                                                    <Link href={`/genres-details/${item.id}`}>
                                                        <Image src={item.image} loader={imageLoader} placeholder="blur"
                                                            loading='lazy' style={{ width: '100%', height: "auto" }}
                                                            alt="genres img" />
                                                    </Link>
                                                    {
                                                        item.videoUrl &&
                                                        <Link className="popup-video ms-genres-video"
                                                            href={item.videoUrl}>
                                                            <i className="fa-sharp fa-solid fa-play"></i></Link>
                                                    }
                                                    <span className="ms-genres-price">From ${item.price}</span>
                                                </div>
                                                <div className="ms-genres-content p-relative">
                                                    <span className={`ms-genres-star ${item.activeClass}`}><i className="fa-light fa-star"></i></span>
                                                    <h4 className="ms-genres-title">
                                                        <Link href={`/genres-details/${item.id}`}>{item.title}</Link></h4>
                                                    <p className="mb-30">{item.description}</p>
                                                    <div className="ms-fun-brand-bottom ms-genres-rating">
                                                        <div className="ms-fun-brand-location">
                                                            <Link href={item.mapLink} target="_blank"> <i
                                                                className="flaticon-pin"></i>{item.location}</Link>
                                                        </div>
                                                        <div className="ms-fun-brand-rating">
                                                            <GetRatting
                                                                averageRating={item.ratings}
                                                            />
                                                            <span>({item.ratingNum})</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <PaginationData />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GenresListingArea;