import React from "react";
import { NavLink } from "react-router-dom";

interface IconLinkProps {
    to: string;
    className?: string;
}

export const IconLink: React.FC<IconLinkProps> = ({
    to,
    className,
    children,
}) => {
    return (
        <NavLink
            to={to}
            className={`hover:opacity-70 transition-opacity ${className}`}
        >
            {children}
        </NavLink>
    )
}