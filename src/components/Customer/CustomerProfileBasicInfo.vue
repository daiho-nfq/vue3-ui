<template>
    <div class="flex items-center justify-between">
        <div class="sm:flex items-center sm:space-x-3">
            <app-h1 class="font-bold text-gray-900" v-text="customerProfile.full_name" />
            <app-badge class="bg-yellow-100 text-yellow-800" v-text="customerProfile.recent_purchase" />
        </div>
        <app-action-button v-text="'Create new order'" />
    </div>
</template>

<script>
import { CUSTOMER_PROFILE } from "@/constants";
import { mapGetters, mapState } from "vuex";
import { getter_customer } from "@/store/getters";

const customerProfile = CUSTOMER_PROFILE;

export default {
    name: "CustomerProfileBasicInfo",
    setup() {
        return {
            customerProfile,
        };
    },
    computed: {
        ...mapGetters("customer", {
            customer: getter_customer,
        }),
    },
};
</script>
