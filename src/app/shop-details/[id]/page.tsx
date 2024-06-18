import ProductActionBtn from '@/components/Shop/ProductActionBtn';
import Setting from '@/components/common/setting/Setting';
import ShopDetailsMain from '@/components/shop-details/ShopDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <>
            <Wrapper>
                <div className="ms-all-content ms-all-content-space">
                    <main>
                        <ShopDetailsMain id={id} />
                        <Setting />
                    </main>
                </div>
            </Wrapper>
            <ProductActionBtn />
        </>

    );
};

export default page;