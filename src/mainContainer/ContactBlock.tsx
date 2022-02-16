import React from "react";
import { NavLink } from "react-router-dom";
import { AvatarIcon, PrimaryButton } from "../components";
import { routes } from "../consts";

export const ContactBlock: React.FC = () => {
    return (
        <div className="flex flex-col items-center max-w-7xl w-full py-8 bg-lightGray2 rounded-2xl mb-24">
            <div className="relative h-14 w-32 mb-8">
                <AvatarIcon src="assets/Avatar1.png" size={48} className="absolute bottom-0 left-0" />
                <AvatarIcon src="assets/Avatar3.png" size={56} className="absolute bottom-0 right-9 z-10" />
                <AvatarIcon src="assets/Avatar2.png" size={48} className="absolute bottom-0 right-0" />
            </div>
            <span className="w-full text-center text-size_20 font-inter-med text-gray900 mb-2">
                Still have questions?
            </span>
            <span className="w-full text-center text-size_18 font-inter-reg text-inter-reg text-gray500 mb-8">
                Can’t find the answer you’re looking for? Please chat to our friendly team.
            </span>
            <NavLink to={routes.root}>
                <PrimaryButton
                    title="Get in touch"
                />
            </NavLink>
        </div>
    );
};