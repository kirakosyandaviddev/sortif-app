import React from "react";
import { AvatarIcon, IconLink } from ".";
import { routes } from "../consts";
import { ChevronRight } from "../environment";
import { LatestContacts } from "../types/LatestContacts";

interface LatestContactsBarProps {
    data: LatestContacts[];
    initialCount: number;
    viewAll?: boolean;
}

export const LatestContactsBar: React.FC<LatestContactsBarProps> = ({
    data,
    initialCount,
    viewAll = false
}) => {
    const changedData = viewAll ? data : data.slice(0, initialCount)
    return (
        <div>
            {
                changedData.map((user, i) => (
                    <div
                        key={`user-${i}`}
                        className="flex justify-between items-center w-full gap-5 text-size_14 pt-6 pb-4 border-b border-gray200"
                    >
                        <div className="flex gap-3 items-center">
                            <AvatarIcon src={user.avatar} size={40} />
                            <span className="font-inter-med text-gray900">{user.name}</span>
                        </div>
                        <div className="flex gap-0.5 sm:gap-5 items-center sm:pr-5">
                            <span className="font-inter-reg text-gray500">{user.invoicCount} Inovices</span>
                            <IconLink to={routes.home} className="w-8 h-8 rounded-full hover:hover:bg-gray200 transition-colors">
                                <ChevronRight />
                            </IconLink>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};