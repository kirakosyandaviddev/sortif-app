import React from 'react';

interface IconButtonProps {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit',
};

export const IconButton: React.FC<IconButtonProps> = ({
    className = '',
    onClick = () => {},
    children,
    type = 'button',
}) => {

    return (
        <button onClick={onClick} type={type} className={`flex items-center justify-center ${className}`}>
            {children}
        </button>
    )
};