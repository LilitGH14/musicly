'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import headerLogo from "../../../public/assets/img/logo/logo.svg";
import genresImg from "../../../public/assets/img/genres/genres-01.jpg";
import genresImg2 from "../../../public/assets/img/genres/genres-02.jpg";
import genresImg3 from "../../../public/assets/img/genres/genres-03.jpg";
import genresImg4 from "../../../public/assets/img/genres/genres-04.jpg";
import genresImg5 from "../../../public/assets/img/genres/genres-05.jpg";
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import Menus from './menus';
import OffcanvasArea from '@/components/common/offcanvas-area/OffcanvasArea';
import { usePathname } from 'next/navigation';
import useStickyHeader from '@/hooks/sticky-header';

const HeaderOne = () => {
    const isSticky = useStickyHeader();
    const [isOpenInfoSidebar, setIsOpenInfoSidebar] = useState(false)
    const handleInfoToggle = () => {
        setIsOpenInfoSidebar(!isOpenInfoSidebar)
    }
    const pathName = usePathname()
    return (
        <>
            <header>
                <div id='header-sticky' className={`header__area header-1 ms-header-fixed ms-bg-body ${isSticky ? "sticky" : ""}`}>
                    <div className="container-fluid ms-maw-1710">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="mega__menu-wrapper p-relative">
                                    <div className={pathName === '/' ? "header__main d-flex ms-border2 align-items-center justify-content-between" :
                                        "header__main d-flex align-items-center justify-content-between"}>
                                        <div className="header__logo pt-25 pb-25">
                                            <Link href="#">
                                                <Image loader={imageLoader} priority width={143} height={45} src={headerLogo} alt="logo not found" />
                                            </Link>
                                        </div>
                                        <div className="d-none d-xxl-inline-block">
                                            <div className="browse-filter p-relative ms-browse-act-wrap">
                                                <div className="ms-browse-icon ms-cp">
                                                    <Link className="browse-filter__text" href="#"><i
                                                        className="flaticon-options-lines"></i>
                                                        <span> Browse Acts</span>
                                                    </Link>
                                                </div>
                                                <div className="ms-browse-act-item-wrap p-absolute">
                                                    <div className="ms-song-item">
                                                        <div className="ms-song-img p-relative">
                                                            <Link href="/genres">
                                                                <Image loader={imageLoader} priority style={{ width: "100%", height: "auto" }} src={genresImg} alt="brand-song" />
                                                            </Link>
                                                        </div>
                                                        <div className="ms-song-content">
                                                            <h3 className="ms-song-title"><Link href="/genres">The Different
                                                                Lights</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="ms-song-item">
                                                        <div className="ms-song-img p-relative">
                                                            <Link href="/genres">
                                                                <Image loader={imageLoader} priority style={{ width: "100%", height: "auto" }} src={genresImg2} alt="brand-song" />
                                                            </Link>
                                                        </div>
                                                        <div className="ms-song-content">
                                                            <h3 className="ms-song-title"><Link href="/genres">The Sweet
                                                                lockdown</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="ms-song-item">
                                                        <div className="ms-song-img p-relative">
                                                            <Link href="/genres">
                                                                <Image loader={imageLoader} priority style={{ width: "100%", height: "auto" }} src={genresImg3} alt="brand-song" />
                                                            </Link>
                                                        </div>
                                                        <div className="ms-song-content">
                                                            <h3 className="ms-song-title"><Link href="/genres">The Sonics
                                                                Corporate
                                                                Band</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="ms-song-item">
                                                        <div className="ms-song-img p-relative">
                                                            <Link href="/genres">
                                                                <Image loader={imageLoader} priority style={{ width: "100%", height: "auto" }} src={genresImg4} alt="brand-song" />
                                                            </Link>
                                                        </div>
                                                        <div className="ms-song-content">
                                                            <h3 className="ms-song-title"><Link href="/genres">The
                                                                Northern
                                                                Lights</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="ms-song-item">
                                                        <div className="ms-song-img p-relative">
                                                            <Link href="/genres">
                                                                <Image loader={imageLoader} priority style={{ width: "100%", height: "auto" }} src={genresImg5} alt="brand-song" />
                                                            </Link>
                                                        </div>
                                                        <div className="ms-song-content">
                                                            <h3 className="ms-song-title"><Link href="/genres">The Sweet The
                                                                Jets</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header__right">
                                            <div className="mean__menu-wrapper">
                                                <div className="main-menu main-menu-ff-space d-none d-lg-inline-block">
                                                    <nav>
                                                        <ul>
                                                            <Menus />
                                                        </ul>
                                                    </nav>
                                                    {/* -- for wp -- */}
                                                    <div className="header__hamburger ml-50 d-none">
                                                        <button type="button" className="hamburger-btn offcanvas-open-btn">
                                                            <span>01</span>
                                                            <span>01</span>
                                                            <span>01</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="header__action-inner d-flex align-items-center">
                                                <div className="enquiry__list ml-10 mr-10 ms-browse-act-wrap p-relative">
                                                    <div className="ms-enquiry-box p-relative d-none d-xl-inline-flex">
                                                        <Link href="#"><i className="flaticon-star icon"></i> <span className="text">My
                                                            enquiry list</span> <span className="number">03</span></Link>
                                                    </div>
                                                    <div className="ms-browse-act-item-wrap p-absolute">
                                                        <div className="ms-song-item">
                                                            <div className="ms-song-img p-relative">
                                                                <Link href="/genres">
                                                                    <Image loader={imageLoader} priority style={{ width: "100%", height: "auto" }} src={genresImg3} alt="brand-song" />
                                                                </Link>
                                                            </div>
                                                            <div className="ms-song-content">
                                                                <h3 className="ms-song-title"><Link href="/genres">The
                                                                    Sonics
                                                                    Corporate
                                                                    Band</Link>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="ms-song-item">
                                                            <div className="ms-song-img p-relative">
                                                                <Link href="/genres">
                                                                    <Image loader={imageLoader} priority style={{ width: "100%", height: "auto" }} src={genresImg4} alt="brand-song" />
                                                                </Link>
                                                            </div>
                                                            <div className="ms-song-content">
                                                                <h3 className="ms-song-title"><Link href="/genres">The
                                                                    Northern
                                                                    Lights</Link>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="ms-song-item">
                                                            <div className="ms-song-img p-relative">
                                                                <Link href="/genres">
                                                                    <Image loader={imageLoader} priority style={{ width: "100%", height: "auto" }} src={genresImg4} alt="brand-song" />
                                                                </Link>
                                                            </div>
                                                            <div className="ms-song-content">
                                                                <h3 className="ms-song-title"><Link href="/genres">The
                                                                    Sweet
                                                                    The
                                                                    Jets</Link>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="header__btn">
                                                    <Link href="/join" className="ms-border-btn"><i
                                                        className="fa-regular fa-plus"></i>List
                                                        Your Service</Link>
                                                </div>
                                                <div className="user__acount d-none d-xxl-inline-flex">
                                                    <span>
                                                        <Link href="/login"><i className="flaticon-user"></i></Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="header__hamburger">
                                                <div className="sidebar__toggle">
                                                    <button onClick={handleInfoToggle} className="bar-icon">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasArea isOpenInfoSidebar={isOpenInfoSidebar} setIsOpenInfoSidebar={setIsOpenInfoSidebar} />
            <div onClick={() => setIsOpenInfoSidebar(false)}
                className={isOpenInfoSidebar ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"}></div>
        </>
    );
};

export default HeaderOne;