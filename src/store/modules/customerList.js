import { getter_customer_list } from "@/store/getters";
import { mutation_setCustomerList } from "@/store/mutations";
import { action_fetCustomerList } from "@/store/actions";
import { CUSTOMER_LIST } from "@/constants";

const state = {
    customerList: null,
};

const getters = {
    [getter_customer_list]: (state) => state.customerList,
};

const mutations = {
    [mutation_setCustomerList](state, customerList) {
        state.customerList = customerList;
    },
};

const actions = {
    [action_fetCustomerList]({ commit }) {
        const customerList = CUSTOMER_LIST;
        commit(mutation_setCustomerList, customerList);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
