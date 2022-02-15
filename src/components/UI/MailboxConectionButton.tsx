import React from "react";
import { ConectionOnIcon } from "../../environment";

interface MailboxConectionButtonProps {
    className?: string;
    onClick?: () => void;
}

export const MailboxConectionButton: React.FC<MailboxConectionButtonProps> = ({
    className,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`flex gap-2 items-center border border-lightGray rounded-lg py-2.5 px-4 hover:opacity-70 transition-opacity ${className}`}
        >
            <ConectionOnIcon />
            Mailbox connected
        </button>
    );
};