"use client"
import Link from "next/link";
import ShopBradcrumb from "../common/breadcrumb/ShopBradcrumb";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import { remove_wishlist_product } from "@/redux/slices/wishlist-slice";
import { cart_product } from "@/redux/slices/cartSlice";
import PartnerAreaMain from "../common/PartnerArea/PartnerAreaMain";

const WishlistMain = () => {
    const dispatch = useAppDispatch()
    const wishlistProduct = useAppSelector((state) => state.wishlist.cartProducts)

    return (
        <>
            <ShopBradcrumb title="Wishlist" />
            {
                wishlistProduct.length === 0 && (
                    <div className="container">
                        <div className="pt-100 pb-60 text-center">
                            <h3>Your Wishlist is empty</h3>
                        </div>
                    </div>
                )

            }
            {
                wishlistProduct.length >= 1 && (
                    <div className="ms-product-area pt-130 pb-70 p-relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="ms-product-table-wrap mb-60">
                                        <div className="ms-product-table mb-50">
                                            <table className="table table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Products Name</th>
                                                        <th>Price</th>
                                                        <th>Date Added</th>
                                                        <th>Stock Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        wishlistProduct.map((item, index) => {

                                                            return (
                                                                <tr key={index}>
                                                                    <td className="ms-product-name-flex"><Link href={`/shop-details/${item.id}`}>
                                                                        <Image src={item?.image} loader={imageLoader} placeholder="blur" loading='lazy' width={60} height={47}
                                                                            alt="product" />
                                                                        <h6 className="ms-product-title">{item.title}</h6>
                                                                    </Link>
                                                                    </td>
                                                                    <td>${item.price}</td>
                                                                    <td>August 10, 2023</td>
                                                                    <td>200 in stock</td>
                                                                    <td>
                                                                        <button onClick={() => dispatch(cart_product(item))} className="ms-table-action"><i className="flaticon-trolley-cart"></i></button>
                                                                        <button onClick={() => dispatch(remove_wishlist_product(item))} className="ms-table-action"><i className="flaticon-bin"></i></button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="ms-table-btn text-center">
                                            <Link className="ms-border-btn" href="#">Continue Shopping</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <PartnerAreaMain />
        </>
    )
};

export default WishlistMain;