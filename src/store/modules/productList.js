import { getter_getProductList } from "@/store/getters";
import { mutation_setProductList, mutation_showProductPopup, mutation_hideProductPopup } from "@/store/mutations";
import { action_fetchProductList } from "@/store/actions";
import { orderObjectByKey } from "@/helpers/utils";
import { PRODUCT_LIST } from "@/constants";

const state = {
    productList: null,
    isShowProductPopup: false,
};

const getters = {
    [getter_getProductList]: (state) => state.productList,
};

const mutations = {
    [mutation_setProductList](state, productList) {
        state.productList = productList;
    },
    [mutation_showProductPopup](state) {
        state.isShowProductPopup = true;
    },
    [mutation_hideProductPopup](state) {
        state.isShowProductPopup = false;
    },
};

const actions = {
    [action_fetchProductList]({ commit }) {
        const productList = orderObjectByKey(PRODUCT_LIST, "factory");

        commit(mutation_setProductList, productList);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
