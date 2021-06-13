<template>
    <div>do</div>
</template>

<script>
import { mapGetters } from "vuex";
import { getter_orderListByCustomer } from "@/store/getters";
import { isValueEmpty, getValueByPath } from "@/helpers/utils";

export default {
    name: "CustomerTabOrderList",
    computed: {
        ...mapGetters("orderList", {
            getOrderList: getter_orderListByCustomer,
        }),
    },
};
</script>
