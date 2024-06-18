import Setting from '@/components/common/setting/Setting';
import LoginArea from '@/components/login/LoginArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <>
            <Wrapper>
                <div className="ms-all-content ms-all-content-space">
                    <main>
                        <LoginArea />
                        <Setting />
                    </main>
                </div>
            </Wrapper>
        </>
    );
};

export default page;