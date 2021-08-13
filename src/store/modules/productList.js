import { getter_getProductList } from "@/store/getters";
import { mutation_setProductList } from "@/store/mutations";
import { action_fetchProductList } from "@/store/actions";
import { orderObjectByKey } from "@/helpers/utils";
import { PRODUCT_LIST } from "@/constants";

const state = {
    productList: null,
};

const getters = {
    [getter_getProductList]: (state) => state.productList,
};

const mutations = {
    [mutation_setProductList](state, productList) {
        state.productList = productList;
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
