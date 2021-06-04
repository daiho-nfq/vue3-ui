import { ROUTE_NAME } from "@/constants";
import Dashboard from "@/pages/Dashboard.vue";
import Login from "@/pages/login/Login.vue";
import Customer from "@/pages/customer/Customer.vue";
import CustomerOverview from "@/pages/customer/CustomerOverview.vue";
import CustomerProfile from "@/pages/customer/CustomerProfile.vue";

export default [
    {
        path: "/",
        name: ROUTE_NAME.DASHBOARD,
        component: Dashboard,
    },
    {
        path: "/login",
        name: ROUTE_NAME.LOGIN,
        component: Login,
    },
    {
        path: "/customer",
        component: Customer,
        children: [
            {
                path: "overview",
                name: ROUTE_NAME.CUSTOMER_OVERVIEW,
                component: CustomerOverview,
            },
            {
                path: "profile/:code",
                name: ROUTE_NAME.CUSTOMER_PROFILE,
                component: CustomerProfile,
            },
        ],
    },
];
