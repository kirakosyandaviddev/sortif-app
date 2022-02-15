import React from 'react';

interface IconButtonProps {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit';
};

export const IconButton: React.FC<IconButtonProps> = ({
    className = '',
    onClick = () => {},
    children,
    type = 'button',
}) => {

    return (
        <button onClick={onClick} type={type} className={`w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity ${className}`}>
            {children}
        </button>
    );
};