import Setting from '@/components/common/setting/Setting';
import HomeThreeMain from '@/components/home-3/HomeThreeMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content pt-0">
                <main>
                    <HomeThreeMain />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;