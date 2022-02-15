import React from "react";
import { AppHeader } from "../components";

export const AppLayout: React.FC = ({children}) => {
    return (
        <div className="flex flex-col items-center w-full">
            <AppHeader />
            {children}
        </div>
    );
};