import React from "react";
import { QuestionCard } from "../components";
import { questions } from "../constMocks";

export const QuestionsBlock: React.FC = () => {
    return (
        <div className="flex flex-col max-w-3xl w-full pb-8">
            <span className="text-size_36 font-inter-semi text-gray900 text-center mb-5">Frequently asked questions</span>
            <h4 className="text-size_20 font-inter-reg text-gray500 text-center mb-16">Everything you need to know about the product and billing.</h4>
            {
                questions.map((question, i) => (
                    <QuestionCard
                        key={`question-${i}`}
                        title={question.title}
                        description={question.description}
                    />
                ))
            }
        </div>
    );
};