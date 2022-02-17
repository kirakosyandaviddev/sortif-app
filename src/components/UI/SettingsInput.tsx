import React from "react";

interface SettingsInputProps {
    name: string;
    label?: string;
    placeholder?: string;
    value?: string;
    type?: React.HTMLInputTypeAttribute,
    error?: string;
    className?: string;
    inputClassName?: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlur: (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}

export const SettingsInput: React.FC<SettingsInputProps> = ({
    name,
    label,
    placeholder,
    value,
    type = "text",
    className,
    inputClassName,
    onChange,
    onBlur,
    error,
}) => {

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onBlur(e);
    };

    return (
        <label className={`flex items-center w-full relative ${className}`} >
            {
                label &&
                <span className="text-size_16 min-w-max font-inter-reg text-gray500 py-2.5 pr-2.5 pl-3 border-y border-l border-lightGray py-2.5 px-3.5 rounded-l-lg">
                    {label}
                </span>
            }
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={handleBlur}
                className={`text-size_16 font-inter-reg border border-lightGray py-2.5 px-3.5 text-gray900
                ${label ? 'rounded-r-lg' : 'rounded-lg'} w-full outline-none focus:bg-gray100 transition-colors ${inputClassName}`}
            >

            </input>
            {
                error &&
                <div className="text-size_14 font-inter-reg text-gray500 mt-1.5">
                    {error}
                </div>
            }
        </label>
    );
};