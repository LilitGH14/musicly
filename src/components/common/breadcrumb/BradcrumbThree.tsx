import React from 'react';
import EventBg from '../../../../public/assets/img/event/event-bg-4.jpg';
type TProps = {
    title: string | undefined
}
const BradcrumbThree = ({ title }: TProps) => {
    return (
        <>
            <section className="page-title-area page-title-spacing p-relative zindex-1 "
                style={{ backgroundImage: `url(${EventBg.src})` }}>
                <div className="ms-overlay ms-overlay9 p-absolute zindex--1"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-9">
                            <h3 className="ms-page-title text-center lh-1">{title}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BradcrumbThree;