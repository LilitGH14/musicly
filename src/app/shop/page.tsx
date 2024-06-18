
import ProductActionBtn from '@/components/Shop/ProductActionBtn';
import ShopMainArea from '@/components/Shop/ShopMainArea';
import Setting from '@/components/common/setting/Setting';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <>
            <Wrapper>
                <div className="ms-all-content ms-all-content-space">
                    <main>
                        <ShopMainArea />
                        <Setting />
                    </main>
                </div>
            </Wrapper>
            <ProductActionBtn />
        </>
    );
};

export default page;