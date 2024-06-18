"use client"
import { subscribeSchema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';

const FooterSubscribe = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, values } =
        useFormik({
            initialValues: {
                email: "",
            },
            validationSchema: subscribeSchema,
            onSubmit: (values, { resetForm }) => {
                toast.success("You've successfully subscribed!");
                resetForm();
            },
        });
    return (
        <>
            <form onSubmit={handleSubmit} className="ms-subscribe-form mb-20">
                <i className="flaticon-mail"></i>
                <input type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="email"
                    placeholder="Enter your mail" />
                <button type="submit" className="ms-subscribe-btn"><i
                    className="fa-sharp fa-solid fa-paper-plane"></i>
                </button>
            </form>
        </>
    );
};

export default FooterSubscribe;