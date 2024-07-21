import React from 'react';
import WorkBgImg from '../../../../public/assets/img/bg/main-bg.jpg';

type TTeam = {
    teamTitle: string;
}
const BradcrumbTwo = ({ teamTitle }: TTeam) => {
    return (
        <>
            <section className="page-title-area page-title-spacing p-relative zindex-1 "
                style={{ backgroundImage: `url(${WorkBgImg.src})` }}>
                <div className="bb-overlay ms-overlay8 p-absolute zindex--1"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-9">
                            <div className="page-title-wrapper text-center pt-15">
                                <div className="page-title-icon mx-auto mb-30">
                                    <i className="flaticon-star"></i>
                                </div>
                                <h3 className="bb-page-title lh-1">{teamTitle}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BradcrumbTwo;