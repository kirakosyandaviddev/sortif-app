import React from "react";
import { NavLink } from "react-router-dom";

import { BankCards, PrimaryButton } from "../components";
import { routes } from "../consts";
import { PlayIcon } from "../environment";

export const StartBlock: React.FC = () => {
    return (
        <div className="flex justify-center w-full bg-gray800 colored_backgorund px-5 mt-14 md:mt-20">
            <div className="flex flex-col items-center max-w-7xl pt-24">
                <span className="font-inter-semi text-size_16 text-gray200 mb-3">Super. Simple. Sorting.</span>
                <h1 className="font-inter-semi text-size_36 sm:text-size_50 md:text-size_72 text-white text-center mb-6">
                    Let AI sort your <br /> Invoices
                </h1>
                <span className="font-inter-reg text-size_18 sm:text-size_20 text-gray200 mb-9 text-center">
                    Simple, transparent secure invoice sorting. No hidden fees and free overdrafts.
                </span>
                <div className="flex gap-3 mb-11">
                    <NavLink to={routes.root}>
                        <PrimaryButton
                            title="Demo"
                            bgInherit
                            className="bg-white text-gray700 py-4 px-8 hover:opacity-70 "
                            icon={<PlayIcon />}
                        />
                    </NavLink>
                    <NavLink to={routes.signUp}>
                        <PrimaryButton
                            title="Sign up"
                            className="bg-green text-black py-4 px-8 hover:opacity-70"
                            bgInherit
                        />
                    </NavLink>
                </div>
                <BankCards />
            </div>
        </div>
    );
};