import Setting from '@/components/common/setting/Setting';
import IdeasAdviceMain from '@/components/ideas-advice/IdeasAdviceMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <IdeasAdviceMain />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;