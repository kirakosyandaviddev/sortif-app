import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { IconButton, PrimaryButton } from "../../components";
import { ArrowLeftIcon, SortifLogoMD } from "../../environment";
import { routes } from "../../consts";

export const CheckEmail: React.FC = () => {
    const { email } = useParams();
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <div className="flex flex-col items-center max-w-sm w-full px-3 py-3">
                <div className="mb-6">
                    <SortifLogoMD />
                </div>
                <div className="flex flex-col items-center w-full">
                    <span className="text-size_24 sm:text-size_30 font-inter-semi text-gray900 mb-3 text-center">
                        Check your email
                    </span>
                    <span className="text-size_16 font-inter-reg text-gray500 text-center mb-8">
                        We sent a password reset link to <br /> {email}
                    </span>
                    <PrimaryButton
                        type="button"
                        title="Open email app"
                        className="w-full py-2.5 px-5 mb-8"
                        onClick={() => navigate(routes.newPassword)}
                    />
                    <div className="flex justify-center gap-2 mb-8 w-full">
                        <span className="text-size_14 font-inter-reg text-gray500">Didn’t receive the email?</span>
                        <NavLink to={routes.forgotPassword} className="text-size_14 font-inter-med text-purple700">
                            Click to resend
                        </NavLink>
                    </div>
                    <NavLink to={routes.signIn} className="text-size_14 font-inter-med text-gray500">
                        <IconButton className="flex items-center gap-2 w-40">
                            <ArrowLeftIcon />
                            <span>Back to log in</span>
                        </IconButton>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};