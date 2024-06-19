import LoginForm from "@/form/login-form";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

const LoginArea = () => {
    return (
        <>
            <Breadcrumb title="Login" />
            <section className="ms-login-area pb-20 pt-130">
                <div className="container">
                    <div className="ms-maxw-510 mx-auto">
                        <div className="ms-login-wrap  ms-login-space ms-bg-2">
                            <h3 className="ms-title4 mb-50 text-center">Welcome Again</h3>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default LoginArea;