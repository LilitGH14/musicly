"use client"
import { imageLoader } from '@/hooks/ImageLoader';
import useCart from '@/hooks/useCart';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { cart_product, decrease_quantity, remove_cart_product } from '@/redux/slices/cartSlice';
import { wishlist_product } from '@/redux/slices/wishlist-slice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CartProductSection = () => {
    const dispatch = useAppDispatch();
    const { UseTotalPrice } = useCart()
    const TotalPrice = UseTotalPrice()
    const cartProducts = useAppSelector((state) => state.cart.cartProducts);
    const totalPriceWithDiscount = TotalPrice + (TotalPrice * 0.25);
    const vat = TotalPrice * 0.025;
    const totalPriceWithVAT = totalPriceWithDiscount + vat;


    return (
        <>
            {cartProducts.length === 0 && (
                <div className="container">
                    <div className="pt-100 pb-60 text-center">
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            )}
            {
                cartProducts.length >= 1 && (
                    <div className="ms-product-area pt-130 pb-70 p-relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="ms-product-table-wrap mb-60">
                                        <div className="ms-product-table mb-45">
                                            <table className="table table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Products Name</th>
                                                        <th>Quantity</th>
                                                        <th>Price</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        cartProducts?.map((item, index) => {
                                                            const totalPrice = item.price * item.quantity
                                                            return (
                                                                <tr key={index}>
                                                                    <td className="ms-product-name-flex"><Link href={`/shop-details/${item.id}`}>
                                                                        <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy' width={60} height={47}
                                                                            alt="product" />
                                                                        <h6 className="ms-product-title">{item.title}</h6>
                                                                    </Link>
                                                                    </td>
                                                                    <td className="product-quantity text-center">
                                                                        <div className="product-quantity d-inline-block">
                                                                            <div className="product-quantity-form cp-cart-quantity">
                                                                                <form onSubmit={(e) => e.preventDefault()}>
                                                                                    <button onClick={() => dispatch(decrease_quantity(item))} className="cart-minus"><i
                                                                                        className="far fa-minus"></i></button>
                                                                                    <input className="cart-input" readOnly value={item?.quantity} />
                                                                                    <button onClick={() => dispatch(cart_product(item))} className="cart-plus"><i
                                                                                        className="far fa-plus"></i></button>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>${totalPrice}</td>
                                                                    <td>
                                                                        <button onClick={() => dispatch(wishlist_product(item))} className="ms-table-action"><i
                                                                            className="flaticon-heart"></i></button>
                                                                        <button onClick={() => dispatch(remove_cart_product(item))} className="ms-table-action"><i className="flaticon-bin"></i></button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Subtotal</th>
                                                        <th>{cartProducts.length} items</th>
                                                        <th>${TotalPrice.toFixed(2)}</th>
                                                        <th></th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div className="ms-table-btn text-center">
                                            <Link className="ms-border-btn" href="#">Continue Shopping</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12">
                                    <div className="ms-product-total mb-60">
                                        <h3 className="ms-title3 white-text ms-border2 pb-35 mb-50">Order Summary</h3>
                                        <div className="ms-product-total-item mb-60">
                                            <ul>
                                                <li>
                                                    <span className="ms-pitem-name">Subtotal ({cartProducts.length} items)</span>
                                                    <span className="ms-pitem-price">${TotalPrice.toFixed(2)}</span>
                                                </li>
                                                <li>
                                                    <span className="ms-pitem-name">Shipping Fee</span>
                                                    <span className="ms-pitem-price">$25</span>
                                                </li>
                                                <li>
                                                    <span className="ms-pitem-name">Vat</span>
                                                    <span className="ms-pitem-price">$2.5%</span>
                                                </li>
                                                <li className="ms-border5">
                                                    <span className="ms-pitem-name">Subtotal</span>
                                                    <span className="ms-pitem-price">${totalPriceWithVAT.toFixed(2)}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="ms-coupon-form">
                                            <form>
                                                <input type="text" placeholder="Apply Coupon Code" />
                                                <button type="submit">Apply</button>
                                            </form>
                                        </div>
                                        <div className="ms-submit-btn text-center mt-50">
                                            <button className="unfill__btn" type="submit">Proceed To Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default CartProductSection;