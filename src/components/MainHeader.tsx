import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { PrimaryButton, SortifLogoCard, IconLink, IconButton } from ".";
import { CloseIcon, MenuIcon } from "../environment";

export const MainHeader: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="fixed top-0 flex justify-center w-full bg-white z-20">
            <div className="flex justify-between gap-5 py-2.5 md:py-4 max-w-7xl w-full px-5">
                <div className="hidden md:flex justify-between max-w-lg w-full gap-5 items-center">
                    <IconLink to="">
                        <SortifLogoCard />
                    </IconLink>
                    <div className="flex gap-8 text-gray500 font-inter-med text-size_16">
                        <NavLink to="" className="hover:opacity-70 transition-opacity"
                        >
                            Home
                        </NavLink>
                        <NavLink to="" className="hover:opacity-70 transition-opacity"
                        >
                            Features
                        </NavLink>
                        <NavLink to="" className="hover:opacity-70 transition-opacity"
                        >
                            FaQ
                        </NavLink>
                        <NavLink to="" className="hover:opacity-70 transition-opacity"
                        >
                            Support
                        </NavLink>
                    </div>
                </div>

                <div className="hidden md:flex gap-2 md:py-0.5">
                    <PrimaryButton
                        title="Log in"
                        onClick={() => { }}
                        bgInherit
                        className="hover:bg-gray200 py-2.5 px-5"
                    />

                    <PrimaryButton
                        title="Sign up"
                        onClick={() => { }}
                    />
                </div>

                {/* for Mobile */}
                <div className="flex md:hidden justify-center w-full gap-5 items-center h-11">
                    <IconLink to="">
                        <SortifLogoCard />
                    </IconLink>
                </div>

                {/* for Mobile */}
                {
                    showMenu &&
                    <div className="block md:hidden fixed top-16 w-full h-screen bg-white z-20 left-0">
                        <div className="flex flex-col items-center gap-8 text-gray500 font-inter-med text-size_16 p-8">
                            <NavLink to="" className="hover:opacity-70 transition-opacity"
                            >
                                Home
                            </NavLink>
                            <NavLink to="" className="hover:opacity-70 transition-opacity"
                            >
                                Features
                            </NavLink>
                            <NavLink to="" className="hover:opacity-70 transition-opacity"
                            >
                                FaQ
                            </NavLink>
                            <NavLink to="" className="hover:opacity-70 transition-opacity"
                            >
                                Support
                            </NavLink>
                            <div className="pt-5 border-t w-full flex flex-col items-center gap-5">
                                <PrimaryButton
                                    title="Sign up"
                                    onClick={() => { }}
                                />
                                <PrimaryButton
                                    title="Log in"
                                    onClick={() => { }}
                                    bgInherit
                                    className="hover:bg-gray200 py-2.5 px-6 border border-lightGray"
                                />
                            </div>
                        </div>
                    </div>
                }

                {/* for Mobile */}
                <IconButton
                    onClick={() => setShowMenu(!showMenu)}
                    className="block md:hidden absolute top-4"
                >
                    {
                        showMenu
                            ?
                            <CloseIcon />
                            :
                            <MenuIcon />

                    }
                </IconButton>
            </div>
        </header>
    );
};