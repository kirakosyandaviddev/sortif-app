import React from "react";
import { FeatureCard, StraightFeatureCard } from "../components";
import { features, secondFeatures } from "../constMocks";
import { IphonesCard } from "../environment";

export const FeaturesBlock: React.FC = () => {
    return (
        <div className="flex flex-col max-w-7xl">
            <div className="flex flex-col items-center py-24">
                <span className="text-size_16 font-inter-semi text-purple700 mb-3">Features</span>
                <h2 className="text-size_36 font-inter-semi text-gray900 text-center mb-5">All you need to run your finances effectively</h2>
                <span className="text-size_20 font-inter-reg text-gray500 text-center mb-16">Open a full-featured account in with virtual cards in less than 5 minutes.</span>
                <div className="flex justify-center flex-wrap gap-x-8 gap-y-16">
                    {
                        features.map((feauter, i) => (
                            <FeatureCard
                                key={`item-${i}`}
                                icon={feauter.icon}
                                title={feauter.title}
                                description={feauter.description}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col py-24">
                <div className="mb-16">
                    <span className="text-size_16 font-inter-semi text-purple700 mb-3">Features</span>
                    <h3 className="text-size_36 font-inter-semi text-gray900 mb-5">All-in-one finance for any business</h3>
                    <span className="text-size_20 font-inter-reg text-gray500">
                        Get a deposit account, credit card, and spend management software—in one
                        <br />
                        refreshingly easy solution. No fees or minimums.
                    </span>
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                    <div>
                        {
                            secondFeatures.map((feature, i) => (
                                <StraightFeatureCard
                                    key={`item${i}`}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))
                        }
                    </div>
                    <div className="hidden md:block">
                        <IphonesCard />
                    </div>
                </div>
            </div>
        </div>
    );
};