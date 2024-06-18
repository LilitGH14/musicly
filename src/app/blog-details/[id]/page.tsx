import Setting from '@/components/common/setting/Setting';
import BlogDetailsMainArea from '@/components/blog-details/BlogDetailsMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <BlogDetailsMainArea id={id} />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;