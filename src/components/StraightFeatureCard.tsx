import React from "react";
import { ArrowRightIcon } from "../environment";

interface StraightFeatureCardProps {
    title: string;
    description: string;
}

export const StraightFeatureCard: React.FC<StraightFeatureCardProps> = ({
    title,
    description,
}) => {
    return (
        <div className="flex flex-col max-w-xl w-full border-l-4 px-7 py-4 hover:border-purple600 transition-all easy-in-out">
            <span className="text-size_20 font-inter-med text-gray900 mb-2">{title}</span>
            <span className="text-size_16 font-inter-reg text-gray500 mb-5">{description}</span>
            <button className="flex gap-2 items-center text-size_16 font-inter-med text-purple700 mb-4 hover:opacity-70 transition-opacity">
                Learn more
                <ArrowRightIcon />
            </button>
        </div>
    );
};