import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { IconButton, PrimaryButton, VerificationInputs } from "../../components";
import { ArrowLeftIcon, SortifLogoMD } from "../../environment";
import { routes } from "../../consts";

export const EmailVerification: React.FC = () => {
    const navigate = useNavigate();
    const { email } = useParams();
    const [verificationCode, setVerificationCode] = useState<String[] | string>();

    const handleSubmit = (e: React.FormEvent) => {
        console.log(verificationCode);
        e.preventDefault();
        navigate(routes.mailBoxConection);
    };

    return (
        <div className="flex flex-col-reverse md:flex-col justify-between md:justify-start items-center min-h-screen w-full relative">
            <div className="flex flex-col md:flex-row gap-4 md:pt-10 lg:pt-24 w-full px-3 md:px-8">
                <div className="w-full md:w-1/3 border-t-4 border-gray900 pt-2.5">
                    <div className="text-size_14 font-inter-med text-gray700">Your details</div>
                    <div className="text-size_14 font-inter-reg text-gray500">Please provide your name and email</div>
                </div>
                <div className="w-full md:w-1/3 border-t-4 border-gray900 pt-2.5">
                    <div className="text-size_14 font-inter-med text-gray700">Verify account</div>
                </div>
                <div className="w-full md:w-1/3 border-t-4 border-gray200 pt-2.5 mb-6">
                    <div className="text-size_14 font-inter-med text-gray700">Connect your Mailbox and import</div>
                </div>
            </div>
            <div className="flex flex-col items-center max-w-sm w-full px-3 pd:py-3 pt-10 pb-3 z-10">
                <div className="mb-6">
                    <SortifLogoMD />
                </div>
                <div className="flex flex-col items-center w-full">
                    <span className="text-size_24 sm:text-size_30 font-inter-semi text-gray900 mb-3 text-center">
                        Check your email
                    </span>
                    <span className="text-size_16 font-inter-reg text-gray500 text-center mb-8">
                        We sent a verification link to <br /> {email}
                    </span>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-8">
                            <VerificationInputs
                                length={4}
                                onComplete={(code) => setVerificationCode(code)}
                            />
                        </div>
                        <PrimaryButton
                            type="submit"
                            title="Verify email"
                            className="w-full py-2.5 px-5 mb-8"
                        />
                    </form>
                    <div className="flex justify-center gap-2 mb-8 w-full">
                        <span className="text-size_14 font-inter-reg text-gray500">Didn’t receive the email?</span>
                        <NavLink to={routes.forgotPassword} className="text-size_14 font-inter-med text-purple700">
                            Click to resend
                        </NavLink>
                    </div>
                    <NavLink to={routes.signIn} className="text-size_14 font-inter-med text-gray500">
                        <IconButton className="flex items-center gap-2">
                            <ArrowLeftIcon />
                            <span>Back to log in</span>
                        </IconButton>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};