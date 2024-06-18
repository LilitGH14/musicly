import Link from 'next/link';
import React from 'react';

const TermsCondition = () => {
    return (
        <>
            <div className="terms_conditions_content">
                <h2 className="warpper_title mb-25">
                    Terms and Conditions Agreement
                </h2>
                <p>
                    A terms and conditions agreement outlines the website
                    administrator’s rules regarding user behaviour and
                    provides information about the actions the website
                    administrator can and will perform. Essentially, your
                    terms and conditions text is a{" "}
                    <Link className="link" href="/contact">
                        contract between your website and its users
                    </Link>
                    . In the event of a legal dispute, arbitrators will look
                    at it to determine whether each party acted within their
                    rights.
                </p>
                <p>
                    Condition is not a new concept. Humans have always
                    desired privacy in their social as well as private
                    lives. But the idea of privacy as a human right is a
                    relatively modern phenomenon.
                </p>
                <h4 className="info_title">
                    Here are some of the main reasons
                </h4>
                <ul className="icon_list unordered_list_block">
                    <li>
                        <span className="list_item_icon">
                            <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                            <strong className="musicly_list_item">
                                Abusive users :
                            </strong>{" "}
                            Terms and Conditions agreements allow you to
                            establish what constitutes appropriate activity on
                            your site or app, empowering you to remove abusive
                            users and content
                        </span>
                    </li>
                    <li>
                        <span className="list_item_icon">
                            <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                            <strong className="musicly_list_item">
                                Intellectual property theft :
                            </strong>{" "}
                            Asserting your claim to the creative assets of
                            your site in your terms and conditions will prevent
                            ownership disputes and copyright infringement.
                        </span>
                    </li>
                    <li>
                        <span className="list_item_icon">
                            <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                            <strong className="musicly_list_item">
                                Potential litigation :
                            </strong>{" "}
                            If a user lodges a legal complaint against your
                            business, showing that they were presented with
                            clear terms and conditions before they used your
                            site will help you immensely in court.
                        </span>
                    </li>
                </ul>
                <h4 className="info_title">
                    Product Information
                </h4>
                <ul className="icon_list unordered_list_block">
                    <li>
                        <span className="list_item_icon">
                            <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                            We strive to provide accurate descriptions, images, and specifications for all products listed on our website. However, we do not warrant that the product descriptions or other content on our website are accurate, complete, reliable, current, or error-free.
                        </span>
                    </li>
                    <li>
                        <span className="list_item_icon">
                            <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                            The colors and appearance of products may vary slightly from what you see on your screen due to factors such as monitor settings and lighting conditions.
                        </span>
                    </li>
                </ul>
                <h4 className="info_title">To Set Liabilities Limits</h4>
                <p>
                    Almost every terms and conditions agreement has a
                    warranty or limitations of liability disclaimer. We’ll
                    cover it in more detail in our section about{" "}
                    <Link className="link" href="/privacy-policy">
                        what clauses to include in your terms and conditions
                    </Link>
                    , but this clause essentially limits what customers can
                    hold you liable for.
                </p>

                <h4 className="info_title">
                    Most companies restrict liability for:
                </h4>
                <ul className="icon_list unordered_list_block">
                    <li>
                        <span className="list_item_text">
                            1. Inaccuracies and errors
                        </span>
                    </li>
                    <li>
                        <span className="list_item_text">
                            2. Lack of enjoyment
                        </span>
                    </li>
                    <li>
                        <span className="list_item_text">
                            3. Product or website downtime
                        </span>
                    </li>
                    <li>
                        <span className="list_item_text">
                            4. Viruses, spyware, and product damage
                        </span>
                    </li>
                </ul>

                <h4 className="info_title">
                    To Outline Policies and Avoid Abusive Behavior
                </h4>
                <p className="mb-1">
                    You may direct questions, comments or reports to:
                </p>
                <p>
                    <Link
                        className="author_mail"
                        href="mailto:howdy@musicly.com"
                    >
                        howdy@musicly.com
                    </Link>
                </p>
                <h4 className="info_title">
                    Revisions to this Teams & Condition without Notice
                </h4>
                <p className="mb-0">
                    This Privacy Policy is dynamic. It will continually
                    change. You may not assume that it remains the same and
                    you agree to check the policy each time you visit the
                    site for changes. Unless, in the sole opinion of the
                    website, this policy changes so drastically as to
                    suggest a posted notification on the site or via email,
                    you will receive no notification of changes to this
                    Privacy Policy nor, under any circumstances, does this
                    site promise notification. Your continued use of this
                    site always evidences your acceptance of the terms this
                    Privacy Policy or any modifications.
                </p>
            </div>
        </>
    );
};

export default TermsCondition;