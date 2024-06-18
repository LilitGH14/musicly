import React from 'react';
import ShopBradcrumb from '../common/breadcrumb/ShopBradcrumb';
import CartProductSection from './CartProductSection';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';

const CartMain = () => {
    return (
        <>
            <ShopBradcrumb title='Cart' />
            <CartProductSection />
            <PartnerAreaMain />
        </>
    );
};

export default CartMain;