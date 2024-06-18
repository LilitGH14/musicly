import React from 'react';
import ShopBradcrumb from '../common/breadcrumb/ShopBradcrumb';
import ProductArea from './ProductArea';

const ShopMainArea = () => {
    return (
        <>
            <ShopBradcrumb title='Shop' />
            <ProductArea />
        </>
    );
};

export default ShopMainArea;