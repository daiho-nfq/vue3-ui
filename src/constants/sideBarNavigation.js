import { ROUTE_NAME } from "@/constants";

<<<<<<< HEAD
import {
    HomeIcon,
    LibraryIcon,
    UserGroupIcon,
    ViewGridIcon,
    CubeIcon,
} from "@heroicons/vue/outline";
=======
import { HomeIcon, LibraryIcon, UserGroupIcon, ViewGridIcon, CubeIcon } from "@heroicons/vue/outline";
>>>>>>> 556a759a98d2c3fa7a40f405ede7ffe88362bfd5

const SIDE_BAR_NAVIGATION = [
    {
        name: "Home",
        href: { name: ROUTE_NAME.DASHBOARD },
        icon: HomeIcon,
    },
    { name: "Order", href: "#", icon: ViewGridIcon },
    {
        name: "Customer",
        href: { name: ROUTE_NAME.CUSTOMER_OVERVIEW },
        icon: UserGroupIcon,
    },
    { name: "Product", href: "#", icon: CubeIcon },
    { name: "Inventory", href: "#", icon: LibraryIcon },
];

export default SIDE_BAR_NAVIGATION;
