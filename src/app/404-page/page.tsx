import React from 'react';
import errorImg from '../../../public/assets/img/error/404.png';
import Image from 'next/image';
import Link from 'next/link';
const page = () => {
    return (

        <main>
            <div className="header-adjustment bg-common-black">
                <div className="adjust-header-space bg-common-black"></div>
            </div>
            <div className="ms-error-area section-spacing pt-100 pb-100">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-12">
                            <div className="ms-error-wrapper fade_bottom">
                                <div className="ms-error-thumb">
                                    <Image src={errorImg} style={{ width: '100%', height: 'auto' }} alt='error image' />
                                </div>
                                <div className="ms-error-content">
                                    <h4 className="ms-error-content-subtitle">Sorry Page Not Found</h4>
                                    <div className="unfill__btn feature-unfill_btn">
                                        <Link href="/" className="border-btn">Back To Home</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default page;