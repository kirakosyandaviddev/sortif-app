import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


import { AppLayout } from "../../layouts";
import { DownloadCloudIcon, HomeIcon } from "../../environment";
import { routes } from "../../consts";
import { InvoiceFilterBar, InvoiceTable, PrimaryButton } from "../../components";

export const Invoices: React.FC = () => {

    return (
        <AppLayout>
            <div className="flex flex-col max-w-7xl w-full mt-16 py-8 md:pb-12 md:pt-14 px-5">
                <div className="mb-5">
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        <Link underline="none" key="1" color="inherit" href={routes.home} >
                            <HomeIcon />
                        </Link>
                        <Link underline="none" key="2" color="#667085" className="cursor-pointer text-size_14 font-inter-med text-gray500">
                            Dashboard
                        </Link>
                        <Link underline="none" key="2" color="#667085" className="text-size_14 font-inter-med text-gray500">
                            ...
                        </Link>
                        <Typography key="3" color="#6941C6" className="text-size_14 font-inter-med text-gray500">
                            Invoices
                        </Typography>
                    </Breadcrumbs>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-2 sm:items-center w-full pb-7 border-b border-gray200 mb-8">
                    <span className="text-size_24 sm:text-size_30 font-inter-med text-gray900">Invoices</span>
                    <div>
                        <PrimaryButton
                            type="button"
                            className="py-2.5 px-4 border border-lightgray text-gray-700 text-size_14 hover:bg-lightGray2 tranisiton-colors"
                            title="Download all"
                            icon={<DownloadCloudIcon />}
                            bgInherit
                        />
                    </div>
                </div>
                <div className="p-5 rounded-lg bg-lightGray2 mb-6">
                    <InvoiceFilterBar />
                </div>
                <div>
                    <InvoiceTable />
                </div>
            </div>
        </AppLayout>
    );
};