import React, { useState } from "react";
import { AvatarIcon, PrimaryButton } from ".";
import { InvoicesData } from "../constMocks";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIconGray } from "../environment";

export const InvoiceTable: React.FC = () => {
    const [checkedAll, setCheckedAll] = useState<boolean | undefined>(undefined);
    const [changedData, setChangedData] = useState(InvoicesData.slice(0, 7))
    const [pageNumber, setPageNumber] = useState<number>(0);

    const showPage = (n: number) => {
        setChangedData(InvoicesData.slice(n * 7, (n + 1) * 7))
        setPageNumber(n)
    }

    return (
        <div>
            <div className="flex flex-col rounded-lg border border-lightGray invoice-table mb-6">
                <div className="flex grid-rows-6 items-center bg-lightGray2 py-2 sm:py-3 px-2 sm:px-6 border-b border-gray200 rounded-t-lg">
                    <div className="flex items-center max-w-sm w-full">
                        <input onChange={() => setCheckedAll(s => s ? undefined : true)} type="checkbox" className="cursor-pointer w-5 h-5" />
                        <button className="flex gap-0.5 ml-3 text-size_12 font-inter-med text-gray500 hover:opacity-80 transition-opacity">
                            <span>
                                Invoices
                            </span>
                            <ArrowDownIcon />
                        </button>
                    </div>
                    <div className="w-32">
                        <span className="text-size_12 font-inter-med text-gray500">
                            Date
                        </span>
                    </div>
                    <div className="w-32">
                        <span className="text-size_12 font-inter-med text-gray500">
                            Invoice Size
                        </span>

                    </div>
                    <div className="hidden xl:block w-64">
                        <span className="text-size_12 font-inter-med text-gray500">
                            Customer
                        </span>
                    </div>
                    <div className="hidden xl:block w-32">
                        <span className="text-size_12 font-inter-med text-gray500">
                            Total Cost
                        </span>
                    </div>
                    <div className="hidden xl:block w-44">
                    </div>
                </div>
                <div>
                    {
                        changedData.map((invoice, i) => (
                            <div key={`invoice-${i}`} className="flex grid-rows-6 items-center py-2 sm:py-4 px-2 sm:px-6 border-b border-gray200">
                                <div className="flex gap-3 items-center max-w-sm w-full">
                                    <input onChange={() => { }} checked={checkedAll} type="checkbox" className="cursor-pointer w-5 h-5" />
                                    <span className="text-size_14 font-inter-med text-gray900">
                                        {invoice.totalInvoices}
                                    </span>
                                </div>
                                <div className="w-32">
                                    <span className="text-size_14 font-inter-reg text-gray500">
                                        {invoice.date}
                                    </span>
                                </div>
                                <div className="w-32">
                                    <span className="px-2 py-1 bg-lightGreen rounded-2xl text-size_12 font-inter-med text-green4">
                                        {invoice.invoiceSize}
                                    </span>
                                </div>
                                <div className="hidden w-64 xl:flex items-center gap-3">
                                    <div>
                                        <AvatarIcon src={invoice.customer.avatar} size={32} />
                                    </div>
                                    <div className="flex flex-col text-size_14 font-inter-reg">
                                        <span className="text-gray900">
                                            {invoice.customer.name}
                                        </span>
                                        <span className="text-gray500">
                                            {invoice.customer.email}
                                        </span>
                                    </div>
                                </div>
                                <div className="hidden xl:block w-32 pl-2">
                                    <span className="text-size_14 font-inter-reg text-gray500">
                                        {invoice.totalCost} $
                                    </span>
                                </div>
                                <div className="hidden w-44 xl:flex justify-end gap-1">
                                    <PrimaryButton
                                        title="Delete"
                                        bgInherit
                                        className="py-3 px-1 hover:opacity-80 tranistion-opacity text-size_14"
                                    />
                                    <PrimaryButton
                                        title="Download"
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
                <div className="hidden xl:flex gap-1">
                    {
                        InvoicesData.slice(0, Math.ceil(InvoicesData.length / 7)).map((v, i) => {
                            if (Math.ceil(InvoicesData.length / 7) > 8) {
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
                    disabled={pageNumber === Math.ceil(InvoicesData.length / 7) - 1}
                >
                    <span className="text-size_14 font-inter-med text-gray500">Next</span>
                    <ArrowRightIconGray />
                </button>
            </div>
        </div>

    )
}