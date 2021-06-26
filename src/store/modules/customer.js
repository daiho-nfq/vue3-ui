import {
    getter_customer,
    getter_customer_liabilities,
    getter_customer_bank_accounts,
    getter_customer_business,
} from "@/store/getters";

import {
    mutation_setCustomerData,
    mutation_hideAddNewCustomerPopup,
    mutation_showAddNewCustomerPopup,
} from "@/store/mutations";

import { action_fetchCustomerData } from "@/store/actions";

import { CUSTOMER_LIST } from "@/constants";
import { getValueByPath } from "@/helpers/utils";

const state = {
    customer: null,
    isShowAddNewCustomerPopup: false,
};

const getters = {
    [getter_customer]: (state) => state.customer,
    [getter_customer_liabilities]: (state) => getValueByPath(state.customer, ["liabilities"], null),
    [getter_customer_bank_accounts]: (state) => getValueByPath(state.customer, ["bank_accounts"], null),
    [getter_customer_business]: (state) => getValueByPath(state.customer, ["business"], null),
};

const mutations = {
    [mutation_setCustomerData](state, customerData) {
        state.customer = customerData;
    },
    [mutation_showAddNewCustomerPopup](state) {
        state.isShowAddNewCustomerPopup = true;
    },
    [mutation_hideAddNewCustomerPopup](state) {
        state.isShowAddNewCustomerPopup = false;
    },
};

const actions = {
    [action_fetchCustomerData]({ commit }, payload) {
        const customer = CUSTOMER_LIST.find((e) => e.uuid === payload);
        commit(mutation_setCustomerData, customer);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
