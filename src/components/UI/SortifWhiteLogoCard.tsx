import React from "react";
import { SortifWhiteLogo } from "../../environment";

export const SortifWhiteLogoCard: React.FC = () => {
    return (
        <div className="flex gap-2 items-center">
            <SortifWhiteLogo />
            <span className="font-inter-med text-size_16 text-white">
                Sortif
            </span>
        </div>
    );
};