import React from "react";

interface PrimaryButtonProps {
    title: string;
    className?: string;
    bgInherit?: boolean;
    onClick?: () => void;
    icon?: React.ReactElement;
    type?: "button" | "submit" | "reset";
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    title,
    className,
    bgInherit = false,
    onClick,
    icon,
    type
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`flex items-center gap-3 font-inter-med text-size_16 rounded-lg transition-all 
                        ${bgInherit ? 'text-gray500' : 'bg-gray900 text-white hover:bg-gray700'} ${className ? className : 'py-2.5 px-5'}`}
        >
            {icon &&
                icon
            }
            {title}
        </button>
    )
}