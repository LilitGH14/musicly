"use client"
import React from 'react';
import ShopBradcrumb from '../common/breadcrumb/ShopBradcrumb';
import Link from 'next/link';
import { ProductsType, idType } from '@/types/types';
import products_data from '@/data/products-data';
import thumb1 from "../../../public/assets/img/shop/product-02.png";
import thumb2 from "../../../public/assets/img/shop/product-03.png";
import thumb3 from "../../../public/assets/img/shop/product-04.png";
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import ProductContent from './ProductContent';
import ShopMedia from './ShopMedia';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';
import { cart_product, decrease_quantity } from '@/redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { wishlist_product } from '@/redux/slices/wishlist-slice';

const ShopDetailsMain = ({ id }: idType) => {
    const product: any = products_data.find((item) => item.id == id);
    const dispatch = useAppDispatch();
    const handleAddToCart = (product: ProductsType) => {
        dispatch(cart_product(product));
    };
    const handleDecressCart = (product: ProductsType) => {
        dispatch(decrease_quantity(product));
    };
    const handleAddToWishlist = (product: ProductsType) => {
        dispatch(wishlist_product(product));
    };

    const cartProducts = useAppSelector((state) => state.cart.cartProducts);
    const productQuantity = cartProducts.find((item) => item.id === product.id);

    return (
        <>
            <ShopBradcrumb title='Denon DJ LC6000 Prime...' />
            <div className="ms-product-area pt-130 pb-130 p-relative">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-lg-6">
                            <div className="product__modal-box product-dbox-grid mb-60">
                                <ul className="nav nav-tabs border-0" id="modalTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="nav1-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1"
                                            aria-selected="false">
                                            {
                                                product?.image && <Image
                                                    loader={imageLoader} placeholder="blur" loading='lazy'
                                                    src={product.image}
                                                    style={{ width: "100%", height: "auto" }}
                                                    alt="product image"
                                                />

                                            }
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="nav2-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2"
                                            aria-selected="false">
                                            <Image
                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                src={thumb1}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="product image"
                                            />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="nav3-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav3" type="button" role="tab" aria-controls="nav3"
                                            aria-selected="false">
                                            <Image
                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                src={thumb2}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="product image"
                                            />
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="nav4-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav4" type="button" role="tab" aria-controls="nav4"
                                            aria-selected="true">
                                            <Image
                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                src={thumb3}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="product image"
                                            />
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content br-15 ms-bg-2 d-flex align-items-center" id="modalTabContent">
                                    <div className="tab-pane fade active show" id="nav1" role="tabpanel"
                                        aria-labelledby="nav1-tab">
                                        <div className="product__modal-img w-img">
                                            {
                                                product?.image && <Image
                                                    loader={imageLoader} placeholder="blur" loading='lazy'
                                                    src={product.image}
                                                    style={{ width: "100%", height: "auto" }}
                                                    alt="product image"
                                                />

                                            }
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                                        <div className="product__modal-img w-img">
                                            <Image
                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                src={thumb1}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="product image"
                                            />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav3" role="tabpanel" aria-labelledby="nav3-tab">
                                        <div className="product__modal-img w-img">
                                            <Image
                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                src={thumb2}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="product image"
                                            />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav4" role="tabpanel" aria-labelledby="nav4-tab">
                                        <div className="product__modal-img w-img">
                                            <Image
                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                src={thumb3}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="product image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-product-modal-content mb-60">
                                <div className="d-flex align-items-center justify-content-between mb-35 mr-40">
                                    <h3 className="ms-product-price">${product?.price}</h3>
                                    <button onClick={() => handleAddToWishlist(product)} className="ms-product-whishlist"><i
                                        className="flaticon-heart"></i></button>
                                </div>
                                <h2 className="ms-product-title2 mb-30">
                                    <Link href="/shop-details">{product?.title}</Link>
                                </h2>
                                <div className="ms-is-product-stock mb-25">
                                    <span><i className="fa-solid fa-check"></i> In stock</span>
                                </div>
                                <div className="ms-product-stock sku ms-border2 d-inline-block pb-10 mb-30">
                                    <div className="ms-product-stock-item mb-20">
                                        <span className="ms-product-sku">UPC</span> {" "}
                                        <span className="ms-product-sku-text">694318025154</span>
                                    </div>
                                    <div className="ms-product-stock-item mb-20">
                                        <span className="ms-product-sku">EAN-13</span> {" "}
                                        <span className="ms-product-sku-text">0694318025154</span>
                                    </div>
                                    <div className="ms-product-stock-item mb-20">
                                        <span className="ms-product-sku">Model</span> {" "}
                                        <span className="ms-product-sku-text">LC6000PRIMEXUS</span>
                                    </div>
                                </div>
                                <div className="ms-product-short-desc mb-25">
                                    <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit
                                        eorum claritatem. Investigationes demonstraverunt</p>
                                </div>
                                <div className="ms-product-tags mb-55">
                                    <span>Includes:</span>
                                    <Link href="#">Denon DJ Prime Go,</Link>{" "}
                                    <Link href="#">Display Cleaning Cloth,</Link>{" "}
                                    <Link href="#">USB Cable,</Link>{" "}
                                    <Link href="#">Power Adapter,</Link>{" "}
                                    <Link href="#">Engine DJ Software Download Card</Link>
                                </div>
                                <div className="product__modal-form">
                                    <div className="product-quantity-cart ms-product-quantity-flex mb-30">
                                        <div className="product-quantity-form">
                                            <form onSubmit={(e) => e.preventDefault()}>
                                                <button onClick={() => handleDecressCart(product)} className="cart-minus">
                                                    <i className="far fa-minus"></i>
                                                </button>
                                                <input className="cart-input" readOnly type="text" value={productQuantity?.quantity || 0} />
                                                <button onClick={() => handleAddToCart(product)} className="cart-plus">
                                                    <i className="far fa-plus"></i>
                                                </button>
                                            </form>
                                        </div>
                                        <Link href="/cart" className="ms-addto-cart-btn"><span>View Cart</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ms-product-ddesc ms-border2">
                                <ul className="nav nav-tabs pt-30" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                            data-bs-target="#home-tab-pane" type="button" role="tab"
                                            aria-controls="home-tab-pane" aria-selected="true">Description</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                            data-bs-target="#profile-tab-pane" type="button" role="tab"
                                            aria-controls="profile-tab-pane" aria-selected="false">Media
                                            Review</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                        aria-labelledby="home-tab" tabIndex={0}>
                                        <ProductContent />
                                    </div>
                                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                                        aria-labelledby="profile-tab" tabIndex={0}>
                                        <ShopMedia />
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

export default ShopDetailsMain;