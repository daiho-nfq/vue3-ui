<template>
    <div class="flex items-center justify-between">
        <div class="sm:flex items-center sm:space-x-3">
            <app-h1 class="font-bold text-gray-900" v-text="customer.full_name" />
            <app-badge class="bg-yellow-100 text-yellow-800" v-text="customer.recent_purchase" />
        </div>
        <app-action-button v-text="'Create new order'" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getter_customer } from "@/store/getters";

export default {
    name: "CustomerProfileBasicInfo",
    computed: {
        ...mapGetters("customer", {
            customer: getter_customer,
        }),
    },
};
</script>
