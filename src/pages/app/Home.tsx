import React, { useState } from "react";
import { MailboxConectionButton, ChartDatePickerCard, LatestContactsBar } from "../../components";
import { AppLayout } from "../../layouts";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { chartData, latestContacts } from "../../constMocks";

export const Home: React.FC = () => {
    const [chartDate, setChartDate] = useState<"12m" | "30d" | "7d">("30d");
    const [viewAll, setViewAll] = useState(false);
    
    return (
        <AppLayout>
            <div className="flex flex-col max-w-7xl w-full mt-16 py-10 md:py-24 px-5">
                <div className="flex flex-col md:flex-row gap-5 justify-between md:items-center w-full pb-6 border-b border-gray200 mb-8">
                    <span className="text-size_30 font-inter-med text-gray900">Good Day, Michael.</span>
                    <div>
                        <MailboxConectionButton />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 justify-between w-full pb-5 border-b border-gray200 mb-6">
                    <span className="text-size_18 font-inter-med text-gray900">Statistic</span>
                    <div className="w-72 pr-5">
                    <ChartDatePickerCard chartDate={chartDate} onChange={setChartDate} />

                    </div>
                </div>
                <div className="mb-8">
                    <ResponsiveContainer height={240} width="100%">
                        <AreaChart
                            width={500}
                            height={400}
                            data={chartData}
                            margin={{
                                top: 10,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}

                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="name"
                                padding={{ left: 28 }}
                                tickLine={false}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                padding={{ bottom: 35 }}
                            />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#56D963" strokeWidth={2} fill="#8884d83b" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <div className="text-size_18 font-inter-med text-gray900 pb-5 border-b border-gray200">
                        Latest Contacts
                    </div>
                    <div className="mb-4">
                        <LatestContactsBar
                            data={latestContacts}
                            initialCount={7}
                            viewAll={viewAll}
                        />
                    </div>
                    <div className="flex justify-end w-full">
                        <button
                            onClick={() => setViewAll(!viewAll)}
                            className="text-size_14 font-inter-med text-purple700 p-2 hover:opacity-80 transition-opacity"
                        >
                            {viewAll ? 'View less' : 'View all'}
                        </button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};