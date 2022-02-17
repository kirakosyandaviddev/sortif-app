import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { PrimaryButton, SortifLogoCard, IconLink, IconButton } from ".";
import { routes } from "../consts";
import { CloseIcon, MenuIcon } from "../environment";

export const MainHeader: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="fixed top-0 flex justify-center w-full bg-white z-20">
            <div className="flex justify-between gap-5 py-2.5 md:py-4 max-w-7xl w-full px-5">
                <div className="hidden md:flex justify-between max-w-lg w-full gap-5 items-center">
                    <IconLink to="" onClick={window.location.reload}>
                        <SortifLogoCard />
                    </IconLink>
                    <div className="flex gap-8 text-gray500 font-inter-med text-size_16">
                        <NavLink to="">
                            Home
                        </NavLink>
                        <NavLink to="">
                            Features
                        </NavLink>
                        <NavLink to="">
                            FaQ
                        </NavLink>
                        <NavLink to="">
                            Support
                        </NavLink>
                    </div>
                </div>

                <div className="hidden md:flex gap-2 md:py-0.5">
                    <NavLink to={routes.signIn}>
                        <PrimaryButton
                            title="Log in"
                            bgInherit
                            className="hover:bg-gray200 py-2.5 px-5"
                        />
                    </NavLink>
                    <NavLink to={routes.signUp}>
                        <PrimaryButton
                            title="Sign up"
                        />
                    </NavLink>
                </div>

                {/* for Mobile */}
                <div className="flex md:hidden w-full items-center ">
                    <IconLink to="">
                        <SortifLogoCard />
                    </IconLink>
                </div>

                {/* for Mobile */}
                <IconButton
                    onClick={() => setShowMenu(!showMenu)}
                    className="block md:hidden"
                >
                    {
                        showMenu
                            ?
                            <CloseIcon />
                            :
                            <MenuIcon />
                    }
                </IconButton>

                {/* for Mobile */}
                {
                    showMenu &&
                    <div className="block md:hidden fixed top-14 w-full h-screen bg-white z-20 left-0">
                        <div className="flex flex-col items-center gap-8 text-gray500 font-inter-med text-size_16 p-8">
                            <NavLink to="">
                                Home
                            </NavLink>
                            <NavLink to="">
                                Features
                            </NavLink>
                            <NavLink to="">
                                FaQ
                            </NavLink>
                            <NavLink to="">
                                Support
                            </NavLink>
                            <div className="pt-5 border-t w-full flex justify-center items-center gap-5">
                                <NavLink to={routes.signIn}>
                                    <PrimaryButton
                                        title="Log in"
                                        bgInherit
                                        className="hover:bg-gray200 py-2.5 px-6"
                                    />
                                </NavLink>
                                <NavLink to={routes.signUp}>
                                    <PrimaryButton
                                        title="Sign up"
                                    />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </header>
    );
};