"use client";
import { forgotten_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import ErrorMsg from "../../form/error-msg";
import { toast } from "react-toastify";
import { sendMail } from "@/services/auth";

type ForgetFormType = {
  dict: { [key: string]: string } | null;
};
const ForgetForm = ({ dict }: ForgetFormType) => {
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: forgotten_schema,
      onSubmit: (values, { resetForm }) => {
        sendMail(values).then((res) => {
          if (res.ResponseCode === 200) {
            toast.success(dict?.One_time_password);
            resetForm();
          }
        });
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="ms-input2-box mb-50">
        <input
          id="name"
          type="text"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={dict?.Enter_your_email}
          required
        />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="ms-submit-btn mb-40">
        <button type="submit" className="unfill__btn d-block w-100">
          {dict?.Send_request}
        </button>
      </div>
      <div className="ms-not-account mb-35 text-center">
        <p>
          {dict?.Remember_password} <Link href="/login">{dict?.Login}</Link>
        </p>
      </div>
    </form>
  );
};

export default ForgetForm;
