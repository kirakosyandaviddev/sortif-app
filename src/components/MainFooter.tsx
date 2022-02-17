import React from "react";
import { NavLink } from "react-router-dom";
import { IconLink, PrimaryButton, PrimaryInput, SortifLogoCard } from ".";

export const MainFooter: React.FC = () => {
    return (
        <footer className="flex justify-center w-full bg-lightGray2">
            <div className="max-w-7xl w-full px-5 pt-16 pb-12">
                <div className="flex flex-col lg:flex-row justify-between gap-10 pb-16 border-b">
                    <div className="flex flex-col">
                        <IconLink className="mb-8 max-w-min" to="" onClick={window.location.reload}>
                            <SortifLogoCard />
                        </IconLink>
                        <div className="flex flex-col sm:flex-row gap-8 font-inter-med text-size_16 text-gray500">
                            <NavLink to="">
                                Overview
                            </NavLink>
                            <NavLink to="">
                                Features
                            </NavLink>
                            <NavLink to="">
                                Pricing (Coming soon)
                            </NavLink>
                            <NavLink to="">
                                Privacy
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-size_14 font-inter-semi text-gray900 mb-4">Stay up to date</span>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <PrimaryInput
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                onBlur={() => { }}
                                onChange={() => { }}
                                inputClassName="w-full lg:w-56 focus:bg-gray100 transition-colors"
                            />
                            <div>
                                <PrimaryButton
                                    title="Subscribe"
                                    type="submit"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-5 w-full pt-8">
                    <div className="text-size_16 font-inter-reg text-gray400">
                        © 2022 Sortif. All rights reserved.
                    </div>
                    <div className="flex gap-4 font-inter-reg text-size_16 text-gray400">
                        <NavLink to="">
                            Terms
                        </NavLink>
                        <NavLink to="">
                            Privacy
                        </NavLink>
                        <NavLink to="">
                            Cookies
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};