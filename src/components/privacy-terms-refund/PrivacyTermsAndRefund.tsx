import React from 'react';
import RefundPolicy from './RefundPolicy';
import TermsCondition from './TermsCondition';
import PrivacyPolicy from './PrivacyPolicy';

type TPrivacyTermsRefundProps = {
    refundActive?: string;
    termsActive?: string;
    policyActive?: string;
}
const PrivacyTermsAndRefund = ({ refundActive, termsActive, policyActive }: TPrivacyTermsRefundProps) => {
    return (
        <>
            <section className="terms_conditions_section section_space_lg pt-120 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <ul
                                className="nav tabs_nav_boxed unordered_list_block mb-60"
                                role="tablist"
                            >
                                <li role="presentation">
                                    <button
                                        className={policyActive ? policyActive : ""}
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab_privacy_policy"
                                        type="button"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        <i className="fas fa-circle"></i>
                                        <span>Privacy & Policy</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button
                                        className={termsActive ? termsActive : ""}
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab_terms_conditions"
                                        type="button"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        <i className="fas fa-circle"></i>
                                        <span>Terms & Conditions</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button
                                        className={refundActive ? refundActive : ""}
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab_refund_policy"
                                        type="button"
                                        role="tab"
                                        aria-selected="false"
                                    >
                                        <i className="fas fa-circle"></i>
                                        <span>Refund Policy</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="tab-content mb-60">
                                <div
                                    className={`tab-pane fade show ${policyActive ? policyActive : ""}`}
                                    id="tab_privacy_policy"
                                    role="tabpanel"
                                >
                                    <PrivacyPolicy />
                                </div>
                                <div
                                    className={`tab-pane fade show ${termsActive ? termsActive : ""}`}
                                    id="tab_terms_conditions"
                                    role="tabpanel"
                                >
                                    <TermsCondition />
                                </div>
                                <div
                                    className={`tab-pane fade show ${refundActive ? refundActive : ""}`}
                                    id="tab_refund_policy"
                                    role="tabpanel"
                                >
                                    <RefundPolicy />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyTermsAndRefund;