import React from "react";
import { SortifLogo } from "../../environment";

export const SortifLogoCard: React.FC = () => {
    return (
        <div className="flex gap-2 items-center">
            <SortifLogo />
            <span className="font-inter-med text-size_16">
                Sortif
            </span>
        </div>
    );
};