import {
    HomeIcon,
    LibraryIcon,
    UserGroupIcon,
    ViewGridIcon,
    CubeIcon,
} from "@heroicons/vue/outline";

const SIDE_BAR_NAVIGATION = [
    { name: "Home", href: "#", icon: HomeIcon, current: true },
    { name: "Order", href: "#", icon: ViewGridIcon, current: false },
    { name: "Customer", href: "#", icon: UserGroupIcon, current: false },
    { name: "Product", href: "#", icon: CubeIcon, current: false },
    { name: "Inventory", href: "#", icon: LibraryIcon, current: false },
];

export default SIDE_BAR_NAVIGATION;
