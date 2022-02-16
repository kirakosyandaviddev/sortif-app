import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { SortifWhiteLogoCard, IconLink, IconButton, AvatarIcon } from ".";
import { routes } from "../consts";
import { CloseWhiteIcon, MenuWhiteIcon, SettingsIcon } from "../environment";

export const AppHeader: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="fixed top-0 flex justify-center w-full bg-gray900 z-20">
            <div className="hidden md:flex justify-between items-center gap-5 py-2.5 md:py-4 max-w-7xl w-full px-5">
                <div className="hidden md:flex justify-between max-w-md w-full gap-5 items-center py-0.5">
                    <IconLink to={routes.home} onClick={window.location.reload}>
                        <SortifWhiteLogoCard />
                    </IconLink>
                    <div className="flex gap-7 text-gray100 font-inter-med text-size_16">
                        <NavLink to="">
                            Dashboard
                        </NavLink>
                        <NavLink to={routes.invoice}>
                            Invoices
                        </NavLink>
                        <NavLink to="">
                            Contacts
                        </NavLink>
                    </div>
                </div>
                <div className="hidden md:flex gap-4">
                    <IconLink to={routes.root} className="w-10 h-10">
                        <SettingsIcon />
                    </IconLink>
                    <IconLink to={routes.home}>
                        <AvatarIcon src="/assets/Avatar1.png" size={40} />
                    </IconLink>
                </div>
            </div>

            {/* for Mobile */}
            <div className="block md:hidden flex justify-between w-full p-2.5">
                <div className="items-center">
                    <IconLink to={routes.home} onClick={window.location.reload}>
                        <SortifWhiteLogoCard />
                    </IconLink>
                </div>

                <IconButton onClick={() => setShowMenu(!showMenu)} >
                    {
                        showMenu
                            ?
                            <CloseWhiteIcon />
                            :
                            <MenuWhiteIcon />

                    }
                </IconButton>
            </div>

            {/* for Mobile */}
            {
                showMenu &&
                <div className="block md:hidden fixed top-16 w-full h-screen bg-white z-20 left-0">
                    <div className="flex flex-col items-center gap-8 text-gray900 font-inter-med text-size_size_18 p-8">
                        <NavLink to="">
                            Dashboard
                        </NavLink>
                        <NavLink to={routes.invoice}>
                            Invoices
                        </NavLink>
                        <NavLink to="">
                            Contacts
                        </NavLink>
                        <div className="flex gap-4">
                            <IconLink to={routes.root} className="w-10 h-10">
                                <SettingsIcon />
                            </IconLink>
                            <IconLink to={routes.home}>
                                <AvatarIcon src="/assets/Avatar1.png" size={40} />
                            </IconLink>
                        </div>
                    </div>
                </div>
            }
        </header>
    );
};