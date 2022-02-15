import React from "react";
import { MailboxConectionButton } from "../../components";
import { AppLayout } from "../../layouts";

export const UserHome: React.FC = () => {
    return (
        <AppLayout>
            <div className="flex flex-col max-w-7xl w-full mt-16 pt-10 md:pt-24 px-5">
                <div className="flex flex-col md:flex-row gap-5 justify-between md:items-center w-full pb-6 border-b border-gray200 mb-8">
                    <span className="text-size_30 font-inter-med text-gray900">Good Day, Michael.</span>
                    <div>
                        <MailboxConectionButton />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};