import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import RegisterForm from '@/form/register-form';

const SignupMainArea = () => {
    return (
        <>
            <Breadcrumb title='Sign Up' />
            <section className="ms-login-area pb-50 pt-130">
                <div className="container">
                    <div className="ms-maxw-510 mx-auto">
                        <div className="ms-login-wrap ms-login-space ms-bg-2">
                            <h3 className="ms-title4 mb-50 text-center">Create Your account</h3>
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignupMainArea;