import { getCookieData, setCookieData } from "@/plugins/cookie";

import { getter_getLanguage } from "@/store/getters";
import { mutation_setLangue } from "@/store/mutations";
import { action_switchLangue } from "@/store/actions";

import { DEFAULT_LANGUAGE } from "@/constants";

//state
const state = {
    language: getCookieData("language") || DEFAULT_LANGUAGE,
};

//getters
const getters = {
    [getter_getLanguage]: (state) => state.language,
};

//mutations
const mutations = {
    [mutation_setLangue](state, language) {
        state.language = language;
        setCookieData("language", language);
    },
};

//actions
const actions = {
    [action_switchLangue]({ commit }, payload) {
        commit(mutation_setLangue, payload);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
