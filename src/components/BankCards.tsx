import React from "react";
import { BankCardOlivia, BankCardPhoenix } from "../environment";

export const BankCards: React.FC = () => {
    return (
        <div className="hidden lg:flex h-96 relative">
            <div className="absolute -right-52 -top-1">
                <BankCardPhoenix />
            </div>
            <div className="absolute -left-44 bottom-0">
                <BankCardOlivia />
            </div>
        </div>
    )
}