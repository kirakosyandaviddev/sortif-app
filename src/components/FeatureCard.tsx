import React from "react";

interface FeauterCardProps {
    icon: () => JSX.Element;
    title: string;
    description: string;
}

export const FeatureCard: React.FC<FeauterCardProps> = ({
    icon,
    title,
    description,
}) => {
    return (
        <div className="flex flex-col items-center max-w-sm w-full">
            <div className="mb-5">
                { icon && icon() }
            </div>
            <span className="text-size_20 font-inter-med text-gray900 mb-2 text-center">{title}</span>
            <span className="text-size_16 font-inter-reg text-gray500 text-center">{description}</span>
        </div>
    )
}