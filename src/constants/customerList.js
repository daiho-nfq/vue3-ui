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

const CUSTOMER_PROFILE = {
    uuid: "YIKX9J812RVZ",
    full_name: "Essy Eggleson",
    email: "eeggleson0@xing.com",
    phone_number: "177-180-9995",
    address: "29 Village Green Circle",
    city: "Jiakexi",
    type: "Direct purchase",
    recent_purchase: "10/02/2021",
    liabilities: {
        short_term: 12000000,
        long_term: 50000000,
        other: 0,
    },
    business: {
        organization: "Joint-stock companies",
        main_line: "bread",
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
};

const CUSTOMER_LIST = [
    {
        uuid: "YIKX9J812RVZ",
        full_name: "Essy Eggleson",
        email: "eeggleson0@xing.com",
        phone_number: "177-180-9995",
        address: "29 Village Green Circle",
        city: "Jiakexi",
        type: "Direct purchase",
        recent_purchase: "10/02/2021",
    },
    {
        uuid: "LS9QJZ9S",
        full_name: "Horacio Flahive",
        email: "hflahive1@wikipedia.org",
        phone_number: "902-303-2772",
        address: "883 Glendale Parkway",
        city: "Hepu",
        type: "One time payment",
        recent_purchase: "01/03/2021",
    },
    {
        uuid: "UDAYAB",
        full_name: "Evania Ferrillio",
        email: "eferrillio2@google.fr",
        phone_number: "671-245-7546",
        address: "69253 Sugar Parkway",
        city: "Qiaozhuang",
        type: "Overlapping",
        recent_purchase: "05/08/2020",
    },
    {
        uuid: "FKSZW47ZDUK",
        full_name: "Jard Lunk",
        email: "jlunk3@yahoo.co.jp",
        phone_number: "317-462-7300",
        address: "32 Lakewood Gardens Court",
        city: "Seminole",
        type: "Cash",
        recent_purchase: "05/06/2019",
    },
    {
        uuid: "8YZNGOM",
        full_name: "Cy Orrill",
        email: "corrill4@nifty.com",
        phone_number: "634-523-9995",
        address: "6 Fisk Lane",
        city: "Guangming",
        type: "Overlapping",
        recent_purchase: "27/09/2020",
    },
    {
        uuid: "KUPDDKN2AJD",
        full_name: "Sharron Abramin",
        email: "sabramin5@amazonaws.com",
        phone_number: "884-150-7357",
        address: "5 John Wall Parkway",
        city: "Luocheng",
        type: "Overlapping",
        recent_purchase: "17/09/2020",
    },
    {
        uuid: "JYIKP8O8VF",
        full_name: "Orelee Stanwix",
        email: "ostanwix6@va.gov",
        phone_number: "584-101-3839",
        address: "492 Park Meadow Pass",
        city: "Palaió Fáliro",
        type: "Cash",
        recent_purchase: "08/02/2020",
    },
    {
        uuid: "EFOF7BVR",
        full_name: "Yankee Wither",
        email: "ywither7@istockphoto.com",
        phone_number: "652-788-6953",
        address: "653 Pine View Alley",
        city: "Angkahgede",
        type: "One time payment",
        recent_purchase: "28/04/2019",
    },
    {
        uuid: "U05WNKM8MDK",
        full_name: "Alexis Wilshire",
        email: "awilshire8@dion.ne.jp",
        phone_number: "289-906-4467",
        address: "1 North Center",
        city: "Évlalo",
        type: "Direct purchase",
        recent_purchase: "24/10/2020",
    },
];

export { CUSTOMER_LIST_HEADING, CUSTOMER_LIST, CUSTOMER_PROFILE, CUSTOMER_PROFILE_TABS };
