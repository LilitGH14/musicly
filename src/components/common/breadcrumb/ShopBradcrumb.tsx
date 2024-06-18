import React from 'react';
import ShopPageTitleImg from '../../../../public/assets/img/shop/shop-page-title.jpg';
type TShopTitle = {
    title: string
}

const ShopBradcrumb = ({ title }: TShopTitle) => {
    return (
        <>
            <section className="page-title-area page-title-spacing p-relative zindex-1"
                style={{ backgroundImage: `url(${ShopPageTitleImg.src})` }}>
                <div className="ms-overlay ms-overlay9 p-absolute zindex--1"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-11">
                            <h3 className="ms-page-title text-center">{title}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopBradcrumb;