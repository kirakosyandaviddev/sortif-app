import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
    Main,
    SignIn,
    ForgotPassword,
    CheckEmail,
    NewPassword,
    PasswordReset,
    SignUp,
    EmailVerification,
    MailBoxConnection,
    UserHome,
} from "../pages";

export const Router: React.FC = () => {

    const routes = {
        root: '/',
        signIn: '/sing-in',
        forgotPassword: '/forgot-password',
        checkEmail: '/check-email/:email',
        newPassword: '/new-password',
        passwordReset: '/password-reset',

        signUp: '/sign-up',
        emailVerification: '/email-verification/:email',
        mailBoxConection: '/mailbox-conection',

        userHome: '/home',
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.root} element={<Main />} />
                <Route path={routes.signIn} element={<SignIn />} />
                <Route path={routes.forgotPassword} element={<ForgotPassword />} />
                <Route path={routes.checkEmail} element={<CheckEmail />} />
                <Route path={routes.newPassword} element={<NewPassword />} />
                <Route path={routes.passwordReset} element={<PasswordReset />} />

                <Route path={routes.signUp} element={<SignUp />} />
                <Route path={routes.emailVerification} element={<EmailVerification />} />
                <Route path={routes.mailBoxConection} element={<MailBoxConnection />} />

                <Route path={routes.userHome} element={<UserHome />} />
            </Routes>
        </BrowserRouter>
    );
};