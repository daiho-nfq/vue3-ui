import { createI18n } from "vue-i18n";
import { getCookieData } from "@/plugins/cookie";
import { DEFAULT_LANGUAGE } from "@/constants";

import vi from "@/lang/vi.json";
import en from "@/lang/en.json";

const i18n = createI18n({
    locale: getCookieData("language") || DEFAULT_LANGUAGE,
    messages: {
        vi,
        en,
    },
});

export default i18n;
