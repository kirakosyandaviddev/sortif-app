import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';

import { PrimaryButton, PrimaryInput } from "../../components";
import { SignInIcon, SortifLogoMD } from "../../environment";
import { routes } from "../../consts";


interface SignInformValues {
    email: string;
    password: string;
}

export const SignIn: React.FC = () => {
    const navigate = useNavigate();

    const signInFormSchema = yup.object().shape({
        email: yup.string().email('Email is not valid').required('Email is required'),
        password: yup.string().required('Password is required.').min(8, 'Must be at least 8 characters.'),
    });

    const signInForm = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: signInFormSchema,
        onSubmit: (formValues: SignInformValues) => {
            navigate(routes.home)
        },
    });

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = signInForm;

    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <div className="flex flex-col items-center max-w-sm w-full px-3 py-3">
                <div className="relative mb-8">
                    <SignInIcon />
                    <div className="absolute top-14 right-12">
                        <SortifLogoMD />
                    </div>
                </div>
                <div className="flex flex-col items-center w-full">
                    <span className="text-size_24 sm:text-size_30 font-inter-semi text-gray900 mb-3 text-center">
                        Log in to your account
                    </span>
                    <span className="text-size_16 font-inter-reg text-gray500 text-center mb-8">
                        Welcome back! Please enter your details.
                    </span>
                    <form onSubmit={handleSubmit} className="flex items-center flex-col w-full">
                        <PrimaryInput
                            name="email"
                            type="email"
                            label="Email"
                            value={values.email}
                            placeholder="Enter your email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.email ? errors.email : undefined}
                            inputClassName="w-full"
                            className="mb-5"
                        />
                        <PrimaryInput
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.password ? errors.password : undefined}
                            inputClassName="w-full"
                            className="mb-6"
                        />

                        <div className="flex justify-between gap-2 mb-6 w-full">
                            <label className="flex gap-1.5 items-end cursor-pointer hover:opacity-90 transition-opacity auth_checkbox">
                                <input type="checkbox" />
                                <span />
                                <span className="text-size_14 font-inter-med text-gray700">Remember for 30 days</span>
                            </label>
                            <NavLink to={routes.forgotPassword} className="text-size_14 font-inter-med text-purple700">
                                Forgot password
                            </NavLink>
                        </div>
                        <PrimaryButton
                            type="submit"
                            title="Sign in"
                            disabled={errors.email || errors.password ? true : false}
                            className="w-full py-2.5 px-5 mb-8"
                        />
                        <div className="flex justify-center gap-2">
                            <span className="text-size_14 font-inter-reg text-gray500">Don’t have an account?</span>
                            <NavLink to={routes.signUp} className="text-size_14 font-inter-med text-purple700">
                                Sign up
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};