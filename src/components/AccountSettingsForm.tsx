import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { SettingsInput } from ".";


interface AccountFormValues {
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export const AccountSettingsForm: React.FC = () => {

    const accountFormSchema = yup.object().shape({});

    const accountForm = useFormik({
        initialValues: {
            fullName: "Michael kors",
            email: "michaelkors111@gmail.com",
            password: "",
            confirmPassword: "",
        },
        validationSchema: accountFormSchema,
        onSubmit: (formValues: AccountFormValues) => {
            console.log(formValues)
        },
    });

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = accountForm;

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg w-full">
            <SettingsInput
                name="fullName"
                placeholder="Full Name"
                value={values.fullName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.fullName ? errors.fullName : undefined}
            />
            <SettingsInput
                name="email"
                type="email"
                value="michaelkors111@gmail.com"
                label="update email"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.email ? errors.email : undefined}
            />
            <SettingsInput
                name="password"
                type="password"
                label="update password"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.password ? errors.password : undefined}
            />
            <SettingsInput
                name="confirmPassword"
                label="update password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.confirmPassword ? errors.confirmPassword : undefined}
            />
        </form>
    );
};