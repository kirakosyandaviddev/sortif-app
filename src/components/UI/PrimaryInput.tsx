import React from 'react';

interface PrimaryInputProps {
    name: string;
    label?: string;
    placeholder?: string;
    value?: string;
    type?: React.HTMLInputTypeAttribute,
    disabled?: boolean;
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

export const PrimaryInput: React.FC<PrimaryInputProps> = ({
    name,
    label,
    placeholder,
    value,
    type = 'text',
    disabled,
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
        <label className={`flex flex-col max-w-lg w-full  ${className}`} >
            {
                label &&
                <span className="text-size_14 font-inter-med text-gray700 mb-1.5">
                    {label}
                </span>
            }
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={onChange}
                onBlur={handleBlur}
                className={`text-size_16 font-inter-reg border border-lightGray py-2.5 px-3.5 rounded-lg outline-none 
                focus:bg-gray200 transition-colors ${inputClassName}`}
            />
            {
                error &&
                <div className="text-size_14 font-inter-reg text-gray500 mt-1.5">
                    {error}
                </div>
            }
        </label>
    );
};