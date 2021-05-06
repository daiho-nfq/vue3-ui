import { ROUTE_NAME } from "@/constants";

const USER_NAVIGATION = [
    { name: "Your Profile", href: "#" },
    { name: "Sign out", href: { name: ROUTE_NAME.LOGIN } },
];

export default USER_NAVIGATION;
