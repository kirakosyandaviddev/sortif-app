import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';

import { IconButton, PrimaryButton, PrimaryInput } from "../../components";
import { ArrowLeftIcon, SortifLogoMD } from "../../environment";
import { routes } from "../../consts";


interface ForgotPasswordFormValues {
    email: string;
}

export const ForgotPassword: React.FC = () => {
    const navigate = useNavigate();

    const forgotPasswordFormSchema = yup.object().shape({
        email: yup.string().email('Email is not valid').required('Email is required'),
    });

    const forgotPasswordForm = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: forgotPasswordFormSchema,
        onSubmit: (formValues: ForgotPasswordFormValues) => {
            navigate(routes.checkEmail(formValues.email))
        },
    });

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = forgotPasswordForm;

    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <div className="flex flex-col items-center max-w-sm w-full px-3 py-3">
                <div className="mb-6">
                    <SortifLogoMD />
                </div>
                <div className="flex flex-col items-center w-full">
                    <span className="text-size_24 sm:text-size_30 font-inter-semi text-gray900 mb-3 text-center">
                        Forgot password?
                    </span>
                    <span className="text-size_16 font-inter-reg text-gray500 text-center mb-8">
                        No worries, we’ll send you reset instructions.
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
                            className="mb-6"
                        />
                        <PrimaryButton
                            type="submit"
                            title="Reset password"
                            disabled={errors.email ? true : false}
                            className="w-full py-2.5 px-5 mb-8"
                        />
                        <NavLink to={routes.signIn} className="text-size_14 font-inter-med text-gray500">
                            <IconButton className="flex items-center gap-2 w-40">
                                <ArrowLeftIcon />
                                <span>Back to log in</span>
                            </IconButton>
                        </NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
};