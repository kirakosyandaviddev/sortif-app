import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { PrimaryButton, SettingsInput } from ".";


interface IMAPSettingsFormValues {
    domain: string,
    imapPortFirst: string,
    imapPortSecond: string,
    imapPortThird: string,
    imapPortFourth: string,
    imapPortFifth: string,
}

export const IMAPSettingsForm: React.FC = () => {

    const imapSettingsFormSchema = yup.object().shape({});

    const imapSettingsForm = useFormik({
        initialValues: {
            domain: "michaelkors.com",
            imapPortFirst: "",
            imapPortSecond: "",
            imapPortThird: "",
            imapPortFourth: "",
            imapPortFifth: "",
        },
        validationSchema: imapSettingsFormSchema,
        onSubmit: (formValues: IMAPSettingsFormValues) => {
            console.log(formValues)
        },
    });

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = imapSettingsForm;

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg w-full">
            <SettingsInput
                name="domain"
                value={values.domain}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.domain ? errors.domain : undefined}
            />
            <SettingsInput
                name="imapPortFirst"
                value={values.imapPortFirst}
                type="text"
                label="IMAP Port"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.imapPortFirst ? errors.imapPortFirst : undefined}
            />
            <SettingsInput
                name="imapPortSecond"
                type="text"
                value={values.imapPortSecond}
                label="IMAP Port"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.imapPortSecond ? errors.imapPortSecond : undefined}
            />
            <SettingsInput
                name="imapPortThird"
                type="text"
                value={values.imapPortThird}
                label="IMAP Port"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.imapPortThird ? errors.imapPortThird : undefined}
            />
            <SettingsInput
                name="imapPortFourth"
                type="text"
                value={values.imapPortFourth}
                label="IMAP Port"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.imapPortFourth ? errors.imapPortFourth : undefined}
            />
            <SettingsInput
                name="imapPortFifth"
                type="text"
                value={values.imapPortFifth}
                label="IMAP Port"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.imapPortFifth ? errors.imapPortFifth : undefined}
            />
            <div className="flex flex-col lg:flex-row gap-3 justify-end w-full pt-4 border-t border-gray200">
                <PrimaryButton
                    title="Cancel"
                    bgInherit
                    className="rounded-lg px-4 py-2.5 text-size_14 border border-lightGray hover:bg-gray100 transition-colors"
                />
                <PrimaryButton
                    title="Update Config and Re-Import Mails"
                    type="submit"
                />
            </div>
        </form>
    );
};
