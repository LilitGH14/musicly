import ProductActionBtn from '@/components/Shop/ProductActionBtn';
import CartMain from '@/components/cart/CartMain';
import Setting from '@/components/common/setting/Setting';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <>
            <Wrapper>
                <div className="ms-all-content ms-all-content-space">
                    <main>
                        <CartMain />
                        <Setting />
                    </main>
                </div>
            </Wrapper>
            <ProductActionBtn />
        </>
    );
};

export default page;