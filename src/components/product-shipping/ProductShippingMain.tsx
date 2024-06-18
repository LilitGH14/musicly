"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';
import cardProductImg from '../../../public/assets/img/shop/product-05.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const ProductShippingMain = () => {
    return (
        <>
            <Breadcrumb title='Product Shipping' />
            <div className="step-area">
                <div className="container">
                    <div className="table-responsive mb-115 mt-115">
                        <div className="list-steps">
                            <div className="item-step line-active">
                                <div className="rounded-step">
                                    <div className="icon-step step-1 active"></div>
                                    <p className="step-text mb-1">Order Placed</p>
                                    <h3 className="time-stamp">05 Jan 1.50 PM</h3>
                                </div>
                            </div>

                            <div className="item-step line-active">
                                <div className="rounded-step">
                                    <div className="icon-step step-2 active"></div>
                                    <p className="step-text mb-1">In Production</p>
                                    <h3 className="time-stamp">07 Jan 3.15 PM</h3>
                                </div>
                            </div>

                            <div className="item-step line-active">
                                <div className="rounded-step">
                                    <div className="icon-step step-3 active"></div>
                                    <p className="step-text mb-1">Shipping</p>
                                    <h3 className="time-stamp">09 Jan 2.29 PM</h3>
                                </div>
                            </div>

                            <div className="item-step line-active">
                                <div className="rounded-step">
                                    <div className="icon-step step-4 active"></div>
                                    <p className="step-text mb-1">Delivered</p>
                                    <h3 className="time-stamp">10 Jan 5.26 PM</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                </div>
                <div className="ms-product-area pb-70 p-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="ms-product-table-wrap mb-60">
                                    <div className="ms-product-table mb-45">
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Products Name</th>
                                                    <th>Unit Price</th>
                                                    <th>Quantity</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="ms-product-name-flex">
                                                        <Image src={cardProductImg} loader={imageLoader} placeholder="blur" loading='lazy'
                                                            width={60} height={47}
                                                            alt="product" />
                                                    </td>
                                                    <td className="product-quantity text-center">
                                                        <h6 className="ms-product-title">ADJ
                                                            Starburst 6-Colour LED Sphere Lighting Effect</h6>
                                                    </td>
                                                    <td>$114</td>
                                                    <td>4</td>
                                                    <td>
                                                        <button className="delivery_status_btn"> Delivered</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PartnerAreaMain />
        </>
    );
};

export default ProductShippingMain;