import Setting from '@/components/common/setting/Setting';
import IdeasAdviceDetailsMain from '@/components/ideas-advice-details/IdeasAdviceDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    const id = 3;
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <IdeasAdviceDetailsMain id={id} />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;