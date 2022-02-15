import React from "react";

import { MainLayout } from "../layouts";
import { ContactBlock, FeaturesBlock, QuestionsBlock, StartBlock } from "../mainContainer";

export const Main: React.FC = () => {
    return (
        <MainLayout>
            <StartBlock />
            <div className="px-5">
                <FeaturesBlock />
                <QuestionsBlock />
                <ContactBlock />
            </div>
        </MainLayout>
    );
};