export interface Company {
    company: CompanyInfo;
    status: string;
    relatedInvoices: number;
}

export interface CompanyInfo {
    name: string;
    url: string;
    avatar: string;
    employment: string;
    description: string;
}