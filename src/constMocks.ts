import { AnalyticsIcon, CommentIcon, DolarIcon, EyeIcon, LightningIcon, ToolsIcon } from "./environment";
import { Invoice } from "./types/Invoice";
import { LatestContacts } from "./types/LatestContacts";

export const features = [
    {
        icon: LightningIcon,
        title: 'Unlimited cards',
        description: 'Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple.',
    },
    {
        icon: DolarIcon,
        title: 'Easy expense policies',
        description: 'Every card comes with configurable spending limits, purchase restrictions, and cancellations for each employee and team.',
    },
    {
        icon: AnalyticsIcon,
        title: 'Advanced analytics',
        description: 'An all-in-one platform that helps you balance everything your team need to be happy and your finances in order.',
    },
    {
        icon: EyeIcon,
        title: 'Real-time visibility on spending',
        description: 'No more unpleasant surprises. Our in-app top line view of your business spending means you can see who’s spending what, when, & where.',
    },
    {
        icon: ToolsIcon,
        title: 'Connect the tools you already use',
        description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    },
    {
        icon: CommentIcon,
        title: 'Our people make the difference',
        description: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    },
];


export const secondFeatures = [
    {
        icon: LightningIcon,
        title: 'Unlimited cards',
        description: 'Give your team the autonomy they need with access to as many cards as they need. Authorise purchases with a click. Simple.',
    },
    {
        icon: DolarIcon,
        title: 'Easy expense policies',
        description: 'Every card comes with configurable spending limits, purchase restrictions, and cancellations for each employee and team.',
    },
    {
        icon: AnalyticsIcon,
        title: 'Advanced analytics',
        description: 'An all-in-one platform that helps you balance everything your team need to be happy and your finances in order.',
    },
];

export const questions = [
    {
        title: 'Is there a free trial available?',
        description: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
        title: 'What is your cancellation policy?',
        description: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    },
    {
        title: 'Can other info be added to an invoice?',
        description: 'An all-in-one platform that helps you balance everything your team need to be happy and your finances in order.',
    },
    {
        title: 'How does billing work?',
        description: 'An all-in-one platform that helps you balance everything your team need to be happy and your finances in order.',
    },
    {
        title: 'How do I change my account email?',
        description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    },
]

export const chartData = [
    {
        name: '3 Jul',
        uv: 1000,
    },
    {
        name: '5 Jul',
        uv: 600,
    },
    {
        name: '8 Jul',
        uv: 1000,
    },
    {
        name: '10 Jul',
        uv: 550,
    },
    {
        name: '13 Jul',
        uv: 850,
    },
    {
        name: '15 Jul',
        uv: 1000,
    },
    {
        name: '17 Jul',
        uv: 900,
    },
    {
        name: '20 Jul',
        uv: 800,
    },
    {
        name: '21 Jul',
        uv: 700,
    },
    {
        name: '23 Jul',
        uv: 500,
    },
    {
        name: '27 Jul',
        uv: 350,
    },
];

export const latestContacts: LatestContacts[] = [
    {
        name: 'Phoenix Baker',
        avatar: '/assets/Avatar1.png',
        invoicCount: 12,
    },
    {
        name: 'Lana Steiner',
        avatar: '/assets/Avatar2.png',
        invoicCount: 12,
    },
    {
        name: 'Demi Wilkinson',
        avatar: '/assets/Avatar3.png',
        invoicCount: 12,
    },
    {
        name: 'Candice Wu',
        avatar: '/assets/Avatar4.png',
        invoicCount: 12,
    },
    {
        name: 'Natali Craig',
        avatar: '/assets/Avatar5.png',
        invoicCount: 12,
    },
    {
        name: 'Drew Cano',
        avatar: '/assets/Avatar6.png',
        invoicCount: 12,
    },
    {
        name: 'Orlando Diggs',
        avatar: '/assets/Avatar7.png',
        invoicCount: 12,
    },
    {
        name: 'Drew Baker',
        avatar: '/assets/Avatar8.png',
        invoicCount: 12,
    },
    {
        name: 'Phoenix Steiner',
        avatar: '/assets/Avatar9.png',
        invoicCount: 12,
    },
    {
        name: 'Candice Cano',
        avatar: '/assets/Avatar10.png',
        invoicCount: 12,
    },
    {
        name: 'Phoenix Baker',
        avatar: '/assets/Avatar1.png',
        invoicCount: 12,
    },
    {
        name: 'Lana Steiner',
        avatar: '/assets/Avatar2.png',
        invoicCount: 12,
    },
    {
        name: 'Demi Wilkinson',
        avatar: '/assets/Avatar3.png',
        invoicCount: 12,
    },
    {
        name: 'Candice Wu',
        avatar: '/assets/Avatar4.png',
        invoicCount: 12,
    },
    {
        name: 'Natali Craig',
        avatar: '/assets/Avatar5.png',
        invoicCount: 12,
    },
    {
        name: 'Drew Cano',
        avatar: '/assets/Avatar6.png',
        invoicCount: 12,
    },
    {
        name: 'Orlando Diggs',
        avatar: '/assets/Avatar7.png',
        invoicCount: 12,
    },
    {
        name: 'Drew Baker',
        avatar: '/assets/Avatar8.png',
        invoicCount: 12,
    },
    {
        name: 'Phoenix Steiner',
        avatar: '/assets/Avatar9.png',
        invoicCount: 12,
    },
    {
        name: 'Candice Cano',
        avatar: '/assets/Avatar10.png',
        invoicCount: 12,
    },
]

export const InvoicesData: Invoice[] = [
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3065',
        date: 'Jan 6, 2022',
        invoiceSize: '30,1 MB',
        customer: {
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            avatar: '/assets/Avatar2.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3064',
        date: 'Jan 6, 2022',
        invoiceSize: '20,9MB',
        customer: {
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            avatar: '/assets/Avatar3.png',
        },
        totalCost: 4.99,
    },
    {
        totalInvoices: 'INV-3066',
        date: 'Jan 6, 2022',
        invoiceSize: '18,4 MB',
        customer: {
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            avatar: '/assets/Avatar1.png',
        },
        totalCost: 4.99,
    },
]