import React, { useState } from "react";
import { IconButton } from ".";
import { MinusCircleIcon, PlusCircleIcon } from "../environment";

interface QuestionCardProps {
    title: string;
    description: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
    title,
    description,
}) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex justify-between w-full pb-8 pt-6 border-b">
            <div className="flex flex-col transition-all w-full">
                <button onClick={() => setOpen(!open)} className="text-left w-full text-size_18 font-inter-med text-gray900">{title}</button>
                {
                    open &&
                    <span className="text-size_16 font-inter-reg text-gray500 mt-2">{description}</span>
                }
            </div>
            <div>
                {
                    open
                        ?
                        <IconButton
                            onClick={() => setOpen(false)}
                        >
                            <MinusCircleIcon />
                        </IconButton>
                        :
                        <IconButton
                            onClick={() => setOpen(true)}
                        >
                            <PlusCircleIcon />
                        </IconButton>
                }
            </div>
        </div>
    );
};