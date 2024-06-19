import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import Setting from '@/components/common/setting/Setting';
import ForgotForm from '@/form/forgot-form';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <Breadcrumb title='Forgotten Password' />
                    <section className="ms-login-area pb-20 pt-130">
                        <div className="container">
                            <div className="ms-maxw-510 mx-auto">
                                <div className="ms-login-wrap  ms-login-space ms-bg-2">
                                    <h3 className="ms-title4 mb-50 text-center">Welcome Again</h3>
                                    <ForgotForm />
                                </div>
                            </div>
                        </div>
                    </section>
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;