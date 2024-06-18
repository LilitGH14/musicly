import SignupMainArea from '@/components/SignUp/SignupMainArea';
import Setting from '@/components/common/setting/Setting';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <SignupMainArea />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;