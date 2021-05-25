import { getter_customer } from "@/store/getters";
import { mutation_setCustomerData } from "@/store/mutations";
import { action_fetCustomerData } from "@/store/actions";
import { CUSTOMER_PROFILE } from "@/constants";

const state = {
    customer: CUSTOMER_PROFILE,
};

const getters = {
    [getter_customer]: (state) => state.customer,
};

const mutations = {
    [mutation_setCustomerData](state, customerData) {
        state.user = CUSTOMER_PROFILE;
    },
};

const actions = {
    [action_fetCustomerData]({ commit }, payload) {
        // commit(mutation_setCustomerData) = CUSTOMER_PROFILE;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
