import { imageLoader } from '@/hooks/ImageLoader';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import thumb1 from "../../../../public/assets/img/shop/product-02.png";
import thumb2 from "../../../../public/assets/img/shop/product-03.png";
import thumb3 from "../../../../public/assets/img/shop/product-04.png";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ProductsType } from '@/types/types';
import { cart_product, decrease_quantity } from '@/redux/slices/cartSlice';

interface productDataType {
    id: number;
    image: StaticImageData;
    title: string;
    price: number;
    quantity: number;
}

const ShopModal: React.FC<{ modaldata: productDataType }> = ({ modaldata }) => {
    const dispatch = useAppDispatch();
    const handleAddToCart = (product: ProductsType) => {
        dispatch(cart_product(product));
    };
    const handleDecressCart = (product: ProductsType) => {
        dispatch(decrease_quantity(product));
    };

    const cartProducts = useAppSelector(
        (state) => state.cart.cartProducts
    );
    const Product = cartProducts.find((item) => item.id === modaldata.id);

    return (
        <>
            <div className="modal fade ms-model1 zindex-99999" id="productModalId" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="ms-product-modal-wrapper p-relative">
                                <button data-bs-dismiss="modal" type="button" className="ms-model-close ms-pclose-btn"><i
                                    className="fa-sharp fa-solid fa-xmark"></i></button>
                                <div className="product__modal-inner">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="product__modal-box pr-30">
                                                <div className="tab-content" id="modalTabContent">
                                                    <div className="tab-pane fade active show" id="nav1" role="tabpanel"
                                                        aria-labelledby="nav1-tab">
                                                        <div className="product__modal-img ms-bg-body w-img">
                                                            {
                                                                modaldata?.image && <Image
                                                                    loader={imageLoader} placeholder="blur" loading='lazy'
                                                                    src={modaldata.image}
                                                                    style={{ width: "100%", height: "auto" }}
                                                                    alt="product image"
                                                                />

                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="nav2" role="tabpanel"
                                                        aria-labelledby="nav2-tab">
                                                        <div className="product__modal-img ms-bg-body w-img">
                                                            <Image
                                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                                src={thumb1}
                                                                style={{ width: "100%", height: "auto" }}
                                                                alt="product image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="nav3" role="tabpanel"
                                                        aria-labelledby="nav3-tab">
                                                        <div className="product__modal-img ms-bg-body w-img">
                                                            <Image
                                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                                src={thumb2}
                                                                style={{ width: "100%", height: "auto" }}
                                                                alt="product image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="nav4" role="tabpanel"
                                                        aria-labelledby="nav4-tab">
                                                        <div className="product__modal-img ms-bg-body w-img">
                                                            <Image
                                                                loader={imageLoader} placeholder="blur" loading='lazy'
                                                                src={thumb3}
                                                                style={{ width: "100%", height: "auto" }}
                                                                alt="product image"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="nav nav-tabs border-0" id="modalTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="nav1-tab" data-bs-toggle="tab"
                                                            data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1"
                                                            aria-selected="false">
                                                            {
                                                                modaldata?.image && <Image
                                                                    loader={imageLoader} placeholder="blur" loading='lazy'
                                                                    src={modaldata.image}
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
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="ms-product-modal-content">
                                                <h3 className="ms-product-price mb-35">{`$${modaldata?.price}`}</h3>
                                                <h2 className="ms-product-title2 mb-30">
                                                    <Link href={`/shop-details/${modaldata.id}`}>{modaldata.title}</Link>
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
                                                </div>
                                                <div className="ms-product-short-desc mb-25">
                                                    <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit
                                                        eorum claritatem. Investigationes demonstraverunt</p>
                                                </div>
                                                <div className="ms-product-tags mb-55">
                                                    <span>Includes:</span>
                                                    <Link href="#">Denon DJ Prime Go,</Link>
                                                    <Link href="#">Display Cleaning Cloth,</Link>
                                                    <Link href="#">USB Cable,</Link>
                                                    <Link href="#">Power Adapter,</Link>,
                                                    <Link href="#">Engine DJ Software Download Card</Link>
                                                </div>
                                                <div className="product__modal-form">
                                                    <div className="product-quantity-cart ms-product-quantity-flex mb-30">
                                                        <div className="product-quantity-form">
                                                            <form onSubmit={(e) => e.preventDefault()}>
                                                                <button onClick={() => handleDecressCart(modaldata)} className="cart-minus">
                                                                    <i className="far fa-minus"></i>
                                                                </button>
                                                                <input className="cart-input" readOnly type="text" value={Product?.quantity || 0} />
                                                                <button onClick={() => handleAddToCart(modaldata)} className="cart-plus">
                                                                    <i className="far fa-plus"></i>
                                                                </button>
                                                            </form>
                                                        </div>
                                                        <Link className="ms-addto-cart-btn" href="/cart"><span>View Cart</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopModal;