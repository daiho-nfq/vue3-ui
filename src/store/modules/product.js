import { getter_getProductDetail } from "@/store/getters";

import { mutation_setProductDetail, mutation_hideProductPopup, mutation_showProductPopup } from "@/store/mutations";

import { action_fetchProductDetail } from "@/store/actions";

import { PRODUCT_LIST } from "@/constants";

const state = {
    product: null,
    isShowProductPopup: false,
};

const getters = {
    [getter_getProductDetail]: (state) => state.product,
};

const mutations = {
    [mutation_setProductDetail](state, product) {
        state.product = product;
    },
    [mutation_showProductPopup](state) {
        state.isShowProductPopup = true;
    },
    [mutation_hideProductPopup](state) {
        state.isShowProductPopup = false;
    },
};

const actions = {
    [action_fetchProductDetail]({ commit }, payload) {
        const product = PRODUCT_LIST.find((e) => e.name_code === payload);
        commit(mutation_setProductDetail, product);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
