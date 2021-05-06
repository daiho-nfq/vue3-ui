import { ROUTE_NAME } from "../constants";
import Dashboard from "../pages/Dashboard.vue";
import Login from "../pages/login/Login.vue";

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
];
