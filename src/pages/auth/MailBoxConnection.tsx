import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Slider from '@mui/material/Slider';

import { PrimaryButton, PrimaryInput } from "../../components";
import { SortifLogo } from "../../environment";
import { routes } from "../../consts";


interface MailBoxConnectionFormValues {
    email: string;
    password: string;
    incomingPortFirst: string;
    incomingPortSecond: string;
    incomingPortThird: string;
    incomingPortFourth: string;
}

export const MailBoxConnection: React.FC = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState([0, 75]);


    const onSliderChange = (event: any, newValue: any, activeThumb: any) => {
        const minDistance = 1;
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    const mailBoxConnectionFormSchema = yup.object().shape({
        email: yup.string().email('Email is not valid').required('Email is required'),
        password: yup.string().required('Password is required.').min(8, 'Password is too short - should be 8 chars minimum.'),
        incomingPortFirst: yup.string().required('Incoming port is required'),
        incomingPortSecond: yup.string().required('Incoming port is required'),
        incomingPortThird: yup.string().required('Incoming port is required'),
        incomingPortFourth: yup.string().required('Incoming port is required'),
    });

    const mailBoxConnectionForm = useFormik({
        initialValues: {
            email: '',
            password: '',
            incomingPortFirst: '',
            incomingPortSecond: '',
            incomingPortThird: '',
            incomingPortFourth: '',
        },
        validationSchema: mailBoxConnectionFormSchema,
        onSubmit: (formValues: MailBoxConnectionFormValues) => {
            console.log('submit')
            navigate(routes.userHome)
        },
    });

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = mailBoxConnectionForm;

    return (
        <div className="flex flex-col-reverse md:flex-col justify-between md:justify-center items-center min-h-screen w-full relative">
            <div className="flex flex-col md:flex-row gap-4 md:pt-10 lg:pt-24 w-full px-3 md:px-8">
                <div className="w-full md:w-1/3 border-t-4 border-gray900 pt-2.5">
                    <div className="text-size_14 font-inter-med text-gray700">Your details</div>
                    <div className="text-size_14 font-inter-reg text-gray500">Please provide your name and email</div>
                </div>
                <div className="w-full md:w-1/3 border-t-4 border-gray900 pt-2.5">
                    <div className="text-size_14 font-inter-med text-gray700">Verify account</div>
                </div>
                <div className="w-full md:w-1/3 border-t-4 border-gray900 pt-2.5 mb-6">
                    <div className="text-size_14 font-inter-med text-gray700">Connect your Mailbox and import</div>
                </div>
            </div>
            <div className="flex flex-col items-center max-w-sm w-full px-3 pd:py-3 pt-10 pb-3 z-10">
                <span className="text-size_12 font-inter-med text-black mb-5">Import is running - don’t close the site</span>
                <div className="w-full mb-4 px-3">
                    <Slider
                        getAriaLabel={() => 'Minimum distance'}
                        value={value}
                        onChange={onSliderChange}
                        valueLabelDisplay="auto"
                        disableSwap
                        valueLabelFormat={(value) => `${value} %`}

                    />
                </div>
                <div className="mb-6">
                    <SortifLogo />
                </div>
                <div className="flex flex-col items-center w-full">
                    <span className="text-size_24 font-inter-semi text-gray900 mb-3 text-center">
                        Import and sort invoices
                    </span>
                    <span className="text-size_16 font-inter-reg text-gray500 text-center mb-6">
                        Sign up in less than 2 minutes.
                    </span>
                    <form onSubmit={handleSubmit} className="flex items-center flex-col w-full">
                        <PrimaryInput
                            name="email"
                            type="email"
                            value={values.email}
                            placeholder="e-mail address"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.email ? errors.email : undefined}
                            inputClassName="w-full"
                            className="mb-5"
                        />
                        <PrimaryInput
                            name="password"
                            type="password"
                            value={values.password}
                            placeholder="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.password ? errors.password : undefined}
                            inputClassName="w-full"
                            className="mb-5"
                        />
                        <PrimaryInput
                            name="incomingPortFirst"
                            type="text"
                            placeholder="incoming port"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.incomingPortFirst ? errors.incomingPortFirst : undefined}
                            inputClassName="w-full"
                            className="mb-5"
                        />
                        <PrimaryInput
                            name="incomingPortSecond"
                            type="text"
                            placeholder="incoming port"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.incomingPortSecond ? errors.incomingPortSecond : undefined}
                            inputClassName="w-full"
                            className="mb-5"
                        />
                        <PrimaryInput
                            name="incomingPortThird"
                            type="text"
                            placeholder="incoming port"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.incomingPortThird ? errors.incomingPortThird : undefined}
                            inputClassName="w-full"
                            className="mb-5"
                        />
                        <PrimaryInput
                            name="incomingPortFourth"
                            type="text"
                            placeholder="incoming port"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.incomingPortFourth ? errors.incomingPortFourth : undefined}
                            inputClassName="w-full"
                            className="mb-6"
                        />
                        <PrimaryButton
                            type="submit"
                            title="Start the import"
                            disabled={errors.email || errors.password || errors.incomingPortFirst || errors.incomingPortSecond || errors.incomingPortThird || errors.incomingPortFourth ? true : false}
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