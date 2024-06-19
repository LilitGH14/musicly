import React from "react";
import RegisterForm from "@/form/register-form";

const SignupMainArea = () => {
  return (
    <section className="ms-login-area pb-30 pt-30">
      <div className="container">
        <div className="ms-maxw-510 mx-auto">
          <div className="ms-login-wrap ms-login-space ms-bg-2">
            <h3 className="ms-title4 mb-50 text-center">Create Your account</h3>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupMainArea;
