import ProductActionBtn from '@/components/Shop/ProductActionBtn';
import Setting from '@/components/common/setting/Setting';
import ProductShippingMain from '@/components/product-shipping/ProductShippingMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <>
            <Wrapper>
                <div className="ms-all-content ms-all-content-space">
                    <main>
                        <ProductShippingMain />
                        <Setting />
                    </main>
                </div>
            </Wrapper>
            <ProductActionBtn />
        </>
    );
};

export default page;