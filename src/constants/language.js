import VNIcon from "@/components/UI/Icon/IconCountry/IconVietnam.vue";
import ENIcon from "@/components/UI/Icon/IconCountry/IconEngland.vue";

export const DEFAULT_LANGUAGE = "vi";
export const LANGUAGES = [
    {
        code: DEFAULT_LANGUAGE,
        name: "language.vi",
        icon: VNIcon,
    },
    {
        code: "en",
        name: "language.en",
        icon: ENIcon,
    },
];
