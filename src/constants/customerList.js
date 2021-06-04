import CustomerTabProfile from "@/components/Customer/CustomerTab/CustomerTabProfile.vue";
import CustomerTabOrderHistory from "@/components/Customer/CustomerTab/CustomerTabOrderHistory.vue";
import CustomerTabTransaction from "@/components/Customer/CustomerTab/CustomerTabTransaction.vue";

const CUSTOMER_LIST_HEADING = ["Name", "Phone Number", "Address", "Type", "Current Date"];

const CUSTOMER_PROFILE_TABS = [
    {
        key: "tab_profile",
        name: "Profile",
        component: CustomerTabProfile,
    },
    {
        key: "tab_order_history",
        name: "Order History",
        component: CustomerTabOrderHistory,
    },
    {
        key: "tab_transaction",
        name: "Transaction",
        component: CustomerTabTransaction,
    },
];

const CUSTOMER_LIST = [
    {
        uuid: "YIKX9J812RVZ",
        full_name: "Essy Eggleson",
        email: "eeggleson0@xing.com",
        phone_number: "177-180-9995",
        address: "29 Village Green Circle",
        city: "Jiakexi",
        main_line: "bread",
        type: "direct purchase",
        recent_purchase: "10/02/2021",
        liabilities: {
            short_term: 12000000,
            long_term: 50000000,
            other: 0,
        },
        business: {
            organization: "Joint-stock companies",
            email: "fmctavish0@chicagotribune.com",
            address: "87249 American Terrace",
            tax_identification_number: "91237234751902347",
        },
        bank_accounts: [
            {
                number: "123456789",
                name: "FAR MCTAVISH",
                bank: "ACB",
            },
            {
                number: "987654321",
                name: "FAR MCTAVISH",
                bank: "TECHCOMBANK",
            },
        ],
        note: {
            common: "Remember to do common note",
            other: "Remember to do other note",
        },
    },
    {
        uuid: "LS9QJZ9S",
        full_name: "Horacio Flahive",
        email: "hflahive1@wikipedia.org",
        phone_number: "902-303-2772",
        address: "883 Glendale Parkway",
        city: "Hepu",
        main_line: "bread",
        type: "one-time payment",
        recent_purchase: "01/03/2021",
    },
    {
        uuid: "UDAYAB",
        full_name: "Evania Ferrillio",
        email: "eferrillio2@google.fr",
        phone_number: "671-245-7546",
        address: "69253 Sugar Parkway",
        city: "Qiaozhuang",
        type: "overlapping",
        recent_purchase: "05/08/2020",
        liabilities: {
            short_term: 12000000,
            long_term: 50000000,
            other: 0,
        },
        business: {
            organization: "Joint-stock companies",
            email: "fmctavish0@chicagotribune.com",
            address: "87249 American Terrace",
            tax_identification_number: "91237234751902347",
        },
        bank_accounts: [
            {
                number: "123456789",
                name: "FAR MCTAVISH",
                bank: "ACB",
            },
            {
                number: "987654321",
                name: "FAR MCTAVISH",
                bank: "TECHCOMBANK",
            },
        ],
        note: {
            common: "Remember to do common note",
            other: "Remember to do other note",
        },
    },
    {
        uuid: "FKSZW47ZDUK",
        full_name: "Jard Lunk",
        email: "jlunk3@yahoo.co.jp",
        phone_number: "317-462-7300",
        address: "32 Lakewood Gardens Court",
        city: "Seminole",
        main_line: "bread",
        type: "cash",
        recent_purchase: "05/06/2019",
        liabilities: {
            short_term: 12000000,
            long_term: 50000000,
            other: 0,
        },
        business: {
            organization: "Joint-stock companies",
            email: "fmctavish0@chicagotribune.com",
            address: "87249 American Terrace",
            tax_identification_number: "91237234751902347",
        },
        bank_accounts: [
            {
                number: "123456789",
                name: "FAR MCTAVISH",
                bank: "ACB",
            },
            {
                number: "987654321",
                name: "FAR MCTAVISH",
                bank: "TECHCOMBANK",
            },
        ],
        note: {
            common: "Remember to do common note",
            other: "Remember to do other note",
        },
    },
    {
        uuid: "8YZNGOM",
        full_name: "Cy Orrill",
        email: "corrill4@nifty.com",
        phone_number: "634-523-9995",
        address: "6 Fisk Lane",
        city: "Guangming",
        main_line: "bread",
        type: "overlapping",
        recent_purchase: "27/09/2020",
        liabilities: {
            short_term: 12000000,
            long_term: 50000000,
            other: 0,
        },
        business: {
            organization: "Joint-stock companies",
            email: "fmctavish0@chicagotribune.com",
            address: "87249 American Terrace",
            tax_identification_number: "91237234751902347",
        },
        bank_accounts: [
            {
                number: "123456789",
                name: "FAR MCTAVISH",
                bank: "ACB",
            },
            {
                number: "987654321",
                name: "FAR MCTAVISH",
                bank: "TECHCOMBANK",
            },
        ],
        note: {
            common: "Remember to do common note",
            other: "Remember to do other note",
        },
    },
];

export { CUSTOMER_LIST_HEADING, CUSTOMER_LIST, CUSTOMER_PROFILE_TABS };
