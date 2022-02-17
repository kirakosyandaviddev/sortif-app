import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';

import { PrimaryButton, PrimaryInput } from "../../components";
import { SortifLogoMD } from "../../environment";
import { routes } from "../../consts";


interface SignUpformValues {
    name: string;
    email: string;
    password: string;
}

export const SignUp: React.FC = () => {
    const navigate = useNavigate();

    const signUpFormSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Email is not valid').required('Email is required'),
        password: yup.string().required('Password is required.').min(8, 'Must be at least 8 characters.'),
    });

    const signUpForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: signUpFormSchema,
        onSubmit: (formValues: SignUpformValues) => {
            navigate(routes.emailVerification(formValues.email));
        },
    });

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = signUpForm;

    return (
        <div className="flex flex-col-reverse md:flex-col justify-between md:justify-start items-center min-h-screen w-full relative">
            <div className="flex flex-col md:flex-row gap-4 md:pt-10 lg:pt-24 w-full px-3 md:px-8">
                <div className="w-full md:w-1/3 border-t-4 border-gray900 pt-2.5">
                    <div className="text-size_14 font-inter-med text-gray700">Your details</div>
                    <div className="text-size_14 font-inter-reg text-gray500">Please provide your name and email</div>
                </div>
                <div className="w-full md:w-1/3 border-t-4 border-gray200 pt-2.5">
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
                    <span className="text-size_24 font-inter-semi text-gray900 mb-3 text-center">
                        Create your account
                    </span>
                    <span className="text-size_16 font-inter-reg text-gray500 text-center mb-8">
                        Sign up in less than 2 minutes.
                    </span>
                    <form onSubmit={handleSubmit} className="flex items-center flex-col w-full">
                        <PrimaryInput
                            name="name"
                            type="name"
                            value={values.name}
                            placeholder="Enter your name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.name ? errors.name : undefined}
                            inputClassName="w-full"
                            className="mb-5"
                        />
                        <PrimaryInput
                            name="email"
                            type="email"
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
                            placeholder="Create a password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.password ? errors.password : undefined}
                            inputClassName="w-full"
                            className="mb-6"
                        />
                        <PrimaryButton
                            type="submit"
                            title="Get started"
                            disabled={errors.email || errors.password ? true : false}
                            className="w-full py-2.5 px-5 mb-6"
                        />
                        <div className="flex justify-center gap-2 mb-6 w-full">
                            <span className="text-size_14 font-inter-reg text-gray500">Already have an account?</span>
                            <NavLink to={routes.signIn} className="text-size_14 font-inter-med text-purple700">
                                Log in
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};