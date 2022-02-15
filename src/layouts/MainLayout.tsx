import React from "react";
import { MainHeader, MainFooter } from "../components";

export const MainLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col justify-between h-screen items-center w-full">
            <div className="flex flex-col items-center w-full">
                <MainHeader />
                {children}
            </div>
            <MainFooter />
        </div>
    );
};