"use client"
import { forgotten_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import ErrorMsg from './error-msg';
import { toast } from 'react-toastify';

const ForgotForm = () => {

    const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: forgotten_schema,
        onSubmit: (values, { resetForm }) => {
            toast.success("Login successfully")
            resetForm()
        }
    })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="ms-input2-box mb-50">
                    <input id="name" type="text"
                        name='email'
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter Your Email"
                        required
                    />
                    {touched.email && <ErrorMsg error={errors.email} />}
                </div>
                <div className="ms-submit-btn mb-40">
                    <button type='submit'
                        className="unfill__btn d-block w-100">Send Request</button>
                </div>
                <div className="ms-not-account mb-35 text-center">
                    <p>
                        Remember your password? {" "}
                        <Link href="/login">Login</Link>
                    </p>
                </div>
            </form>
        </>
    );
};

export default ForgotForm;