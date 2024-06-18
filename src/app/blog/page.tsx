import Setting from '@/components/common/setting/Setting';
import BlogMainArea from '@/components/blog/BlogMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <BlogMainArea />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;