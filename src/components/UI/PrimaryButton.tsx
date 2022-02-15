import React from "react";

interface PrimaryButtonProps {
    title: string;
    className?: string;
    bgInherit?: boolean;
    onClick?: () => void;
    icon?: React.ReactElement;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    title,
    className,
    bgInherit = false,
    onClick,
    icon,
    type,
    disabled = false,
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`flex justify-center items-center gap-3 font-inter-med text-size_16 rounded-lg transition-all ${disabled && 'bg-gray700'}
                        ${bgInherit ? 'text-gray500' : 'bg-gray900 text-white hover:bg-gray700'} ${className ? className : 'py-2.5 px-5'}`}
        >
            { icon && icon }
            {title}
        </button>
    );
};