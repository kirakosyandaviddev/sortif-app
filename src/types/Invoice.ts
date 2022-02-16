export interface Invoice {
    totalInvoices: string;
    date: Date | string;
    invoiceSize: string;
    customer: Customer;
    totalCost: number;
}

export interface Customer {
    name: string;
    email: string;
    avatar: string;
}