import React from 'react';

interface PrimaryInputProps {
    className?: string;
    inputClassName?: string;
    placeholder?: string;
    disabled?: boolean;
    name: string;
    value?: string;
    type?: React.HTMLInputTypeAttribute,
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlur: (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}

export const PrimaryInput: React.FC<PrimaryInputProps> = ({
    className,
    inputClassName,
    name,
    placeholder,
    disabled,
    value,
    type = 'text',
    onChange,
    onBlur,
}) => {

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onBlur(e);
    };

    return (
        <label className={`max-w-lg w-full  ${className}`} >
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
        </label>
    );
};