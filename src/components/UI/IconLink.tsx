import React from "react";
import { NavLink } from "react-router-dom";

interface IconLinkProps {
    to: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    className?: string;
}

export const IconLink: React.FC<IconLinkProps> = ({
    to,
    onClick,
    className,
    children,
}) => {
    return (
        <NavLink
            to={to}
            className={className}
            onClick={onClick}
        >
            {children}
        </NavLink>
    );
};