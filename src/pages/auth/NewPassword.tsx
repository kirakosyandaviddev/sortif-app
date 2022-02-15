import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';

import { IconButton, PrimaryButton, PrimaryInput } from "../../components";
import { ArrowLeftIcon, SortifLogoMD } from "../../environment";
import { routes } from "../../consts";


interface NewPasswordFormValues {
    password: string;
    confirmPassword: string;
}

export const NewPassword: React.FC = () => {
    const navigate = useNavigate();

    const newPasswordFormSchema = yup.object().shape({
        password: yup.string().required('Password is required.').min(8, 'Password is too short - should be 8 chars minimum.'),
        confirmPassword: yup.string().label('Password Confirm').required().oneOf([yup.ref('password')], 'Passwords does not match'),
    });

    const newPasswordForm = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: newPasswordFormSchema,
        onSubmit: (formValues: NewPasswordFormValues) => {
            console.log('submit')
            navigate(routes.passwordReset)
        },
    });

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = newPasswordForm;

    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <div className="flex flex-col items-center max-w-sm w-full px-3 py-3">
                <div className="mb-6">
                    <SortifLogoMD />
                </div>
                <div className="flex flex-col items-center w-full">
                    <span className="text-size_24 sm:text-size_30 font-inter-semi text-gray900 mb-3 text-center">
                        Set new password
                    </span>
                    <span className="text-size_16 font-inter-reg text-gray500 text-center mb-8">
                        Your new password must be different to previously used passwords.
                    </span>
                    <form onSubmit={handleSubmit} className="flex items-center flex-col w-full">
                        <PrimaryInput
                            name="password"
                            type="password"
                            label="Password"
                            value={values.password}
                            placeholder="Enter your new password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.password ? errors.password : undefined}
                            inputClassName="w-full"
                            className="mb-6"
                        />
                        <PrimaryInput
                            name="confirmPassword"
                            type="password"
                            label="Confirm password"
                            value={values.confirmPassword}
                            placeholder="Enter password again"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.confirmPassword ? errors.confirmPassword : undefined}
                            inputClassName="w-full"
                            className="mb-6"
                        />
                        <PrimaryButton
                            type="submit"
                            title="Reset password"
                            disabled={errors.password || errors.confirmPassword ? true : false}
                            className="w-full py-2.5 px-5 mb-8"
                        />
                        <NavLink to={routes.signIn} className="text-size_14 font-inter-med text-gray500">
                            <IconButton className="flex items-center gap-2">
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