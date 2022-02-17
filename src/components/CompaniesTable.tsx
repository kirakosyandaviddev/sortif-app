import React, { useState } from "react";
import { AvatarIcon, PrimaryButton } from ".";
import { CompaniesData } from "../constMocks";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIconGray } from "../environment";

export const CompaniesTable: React.FC = () => {
    const [checkedAll, setCheckedAll] = useState<boolean | undefined>(undefined);
    const [changedData, setChangedData] = useState(CompaniesData.slice(0, 7));
    const [pageNumber, setPageNumber] = useState<number>(0);

    const showPage = (n: number) => {
        setChangedData(CompaniesData.slice(n * 7, (n + 1) * 7))
        setPageNumber(n)
    };

    return (
        <div>
            <div className="flex flex-col rounded-lg border border-lightGray company-table mb-6">
                <div className="flex grid-rows-6 items-center bg-lightGray2 py-2 sm:py-3 px-2 sm:px-6 border-b border-gray200 rounded-t-lg">
                    <div className="flex items-center max-w-md w-full">
                        <label className="table_parent_checkbox">
                            <input type="checkbox" onChange={() => setCheckedAll(s => s ? undefined : true)} />
                            <span />
                        </label>
                        <button className="flex gap-0.5 ml-3 text-size_12 font-inter-med text-gray500 hover:opacity-80 transition-opacity">
                            <span>
                                Company
                            </span>
                            <ArrowDownIcon />
                        </button>
                    </div>
                    <div className="w-28">
                        <span className="text-size_12 font-inter-med text-gray500">
                            Status
                        </span>
                    </div>
                    <div className="hidden md:block w-80">
                        <span className="text-size_12 font-inter-med text-gray500">
                            Company description
                        </span>

                    </div>
                    <div className="hidden lg:block w-32">
                        <span className="text-size_12 font-inter-med text-gray500">
                            Related Invoices
                        </span>
                    </div>
                    <div className="hidden md:block w-44">
                    </div>
                </div>
                <div>
                    {
                        changedData.map((c, i) => (
                            <div key={`invoice-${i}`} className="flex grid-rows-6 items-center py-2 sm:py-4 px-2 sm:px-6 border-b border-gray200">
                                <div className="max-w-md w-full flex items-center gap-3">
                                    <label className="table_child_checkbox">
                                        <input type="checkbox" checked={checkedAll} />
                                        <span />
                                    </label>
                                    <div>
                                        <AvatarIcon src={c.company.avatar} size={32} />
                                    </div>
                                    <div className="flex flex-col text-size_14 font-inter-reg">
                                        <span className="text-gray900">
                                            {c.company.name}
                                        </span>
                                        <span className="text-gray500">
                                            {c.company.url}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-end w-28 w-full">
                                    <span className="text-size_12 font-inter-med text-green4 rounded-2xl bg-lightGreen px-2 py-0.5">
                                        {c.status}
                                    </span>
                                </div>
                                <div className="hidden md:block w-80">
                                    <div className="flex flex-col text-size_14 font-inter-reg">
                                        <span className="text-gray900">
                                            {c.company.employment}
                                        </span>
                                        <span className="text-gray500">
                                            {c.company.description}
                                        </span>
                                    </div>
                                </div>

                                <div className="hidden lg:block w-32 ">
                                    <span className="text-size_12 font-inter-med text-green4 rounded-2xl bg-lightGreen px-2 py-0.5">
                                        {c.relatedInvoices}
                                    </span>
                                </div>
                                <div className="hidden w-44 md:flex justify-end gap-1">
                                    <PrimaryButton
                                        title="Download Zip File"
                                        bgInherit
                                        className="py-3 px-1 text-purple700 hover:opacity-80 tranistion-opacity text-size_14"
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex w-full justify-between ">
                <button
                    onClick={() => showPage(pageNumber - 1)}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    disabled={pageNumber === 0}
                >
                    <ArrowLeftIcon />
                    <span className="text-size_14 font-inter-med text-gray500">Previous</span>
                </button>
                <div className="hidden md:flex gap-1">
                    {
                        CompaniesData.slice(0, Math.ceil(CompaniesData.length / 7)).map((v, i) => {
                            if (Math.ceil(CompaniesData.length / 7) > 8) {
                                if (pageNumber + 2 < i && pageNumber + 6 > i) {
                                    return (
                                        <button className="flex justify-center items-center" key={`page-${i}`}>
                                            .
                                        </button>
                                    )
                                }
                            }
                            return (
                                <button
                                    className={`flex justify-center items-center w-10 h-10 hover:bg-lightPurple hover:text-purple600 transiton-colors 
                                    rounded-lg outline-none ${i === pageNumber && "bg-lightPurple text-purple600"}focus:bg-lightPurple focus:text-purple600`}
                                    key={`page-${i}`}
                                    onClick={() => showPage(i)}
                                >
                                    {i + 1}
                                </button>
                            )
                        })
                    }
                </div>
                <button
                    onClick={() => showPage(pageNumber + 1)}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    disabled={pageNumber === Math.ceil(CompaniesData.length / 7) - 1}
                >
                    <span className="text-size_14 font-inter-med text-gray500">Next</span>
                    <ArrowRightIconGray />
                </button>
            </div>
        </div>
    );
};