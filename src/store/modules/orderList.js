import { getter_orderListByCustomer } from "@/store/getters";
import { mutation_setOrderListByCustomer } from "@/store/mutations";
import { action_fetchOrderListByCustomer } from "@/store/actions";
import { getValueByPath, groupDataByKey } from "@/helpers/utils";

const state = {
    orderListByCustomer: null,
};

const getters = {
    [getter_orderListByCustomer]: (state) => state.orderListByCustomer,
};

const mutations = {
    [mutation_setOrderListByCustomer](state, data) {
        state.orderListByCustomer = data;
    },
};

const actions = {
    [action_fetchOrderListByCustomer]({ commit }, payload) {
        const groupByOrderDate = groupDataByKey(payload, "created_at");
        commit(mutation_setOrderListByCustomer, groupByOrderDate);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
