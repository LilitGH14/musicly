"use client";
import { login_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import ErrorMsg from "./error-msg";
import { toast } from "react-toastify";

const LoginForm = () => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: login_schema,
    onSubmit: (values, { resetForm }) => {
      toast.success("Login successfully");
      resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="ms-input2-box mb-25">
        <input
          id="name"
          type="text"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>

      <div className="ms-input2-box mb-50">
        <input
          id="pass"
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          required
        />
        {touched.password && <ErrorMsg error={errors.password} />}
      </div>
      <div className="ms-submit-btn mb-40">
        <button className="unfill__btn d-block w-100" type="submit">
          Log in
        </button>
      </div>
      <div className="ms-divided-btn mb-45">
        <span>or</span>
      </div>
      <div className="ms-fb mb-40">
        <button className="ms-fb-btn text-center" type="submit">
          <i className="fa-brands fa-facebook"></i>
          Log in with facebook
        </button>
      </div>
      <div className="ms-not-account mb-35 text-center">
        <p>
          Don’t have an account? <Link href="/signup">Register Now</Link>
        </p>
      </div>

      <div className="ms-forget-pass text-center">
        <Link href="/forgot-password">Forgot Your Password?</Link>
      </div>
    </form>
  );
};

export default LoginForm;
