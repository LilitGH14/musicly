import Setting from '@/components/common/setting/Setting';
import HomeTwoMainArea from '@/components/home-2/HomeTwoMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <main>
                <HomeTwoMainArea />
                <Setting />
            </main>
        </Wrapper>
    );
};

export default page;