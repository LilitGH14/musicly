"use client"
import { register_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import ErrorMsg from './error-msg';
import Link from 'next/link';

const RegisterForm = () => {
    const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            phoneNum: "",
            password: "",
            confirmPass: ""
        },
        validationSchema: register_schema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            toast.success("Register successfully")
            resetForm()
        }
    })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="ms-input2-box mb-25">
                    <input type="text" placeholder="Name" name='name'
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required />
                    {touched.name && <ErrorMsg error={errors.name} />}
                </div>
                <div className="ms-input2-box mb-25">
                    <input type="email" placeholder="Email" name='email'
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                    />
                    {touched.email && <ErrorMsg error={errors.email} />}
                </div>
                <div className="ms-input2-box mb-25">
                    <input
                        type="text"
                        placeholder="Phone no"
                        name="phoneNum"
                        value={values.phoneNum}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                    />
                    {touched.phoneNum && <ErrorMsg error={errors.phoneNum} />}
                </div>
                <div className="ms-input2-box mb-25">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                    />
                    {touched.password && <ErrorMsg error={errors.password} />}
                </div>
                <div className="ms-input2-box mb-50">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPass"
                        value={values.confirmPass}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                    />
                    {touched.confirmPass && <ErrorMsg error={errors.confirmPass} />}
                </div>
                <div className="ms-submit-btn mb-40 text-center">
                    <button className="unfill__btn d-block w-100" type="submit">Create
                        Account</button>
                </div>
                <div className="ms-divided-btn mb-45">
                    <span>or</span>
                </div>
                <div className="ms-fb mb-40 text-center">
                    <button className="ms-fb-btn" type="submit"><i className="fa-brands fa-facebook"></i>
                        Log in with facebook</button>
                </div>
                <div className="ms-not-account mb-35 text-center">
                    <p>Already have an account? <Link href="/login">Log
                        in</Link></p>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;