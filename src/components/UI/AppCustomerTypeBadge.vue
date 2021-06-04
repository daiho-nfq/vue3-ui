<template>
    <app-badge class="capitalize rounded-full" :class="customClass" v-text="customerType" />
</template>

<script>
import { CUSTOMER_TYPE } from "@/constants";
import { isTwoValueEqual } from "@/helpers/utils";

export default {
    name: "AppCustomerTypeBadge",
    props: {
        customerType: {
            type: String,
            default: null,
        },
    },
    computed: {
        customClass() {
            if (isTwoValueEqual(this.customerType, CUSTOMER_TYPE.CASH)) return "bg-green-100 text-green-800";
            if (isTwoValueEqual(this.customerType, CUSTOMER_TYPE.OVERLAPPING)) return "bg-indigo-100 text-indigo-800";
            if (isTwoValueEqual(this.customerType, CUSTOMER_TYPE.DIRECT_PURCHASE))
                return "bg-yellow-100 text-yellow-800";
            if (isTwoValueEqual(this.customerType, CUSTOMER_TYPE.ONE_TIME_PAYMENT)) return "bg-red-100 text-red-800";
        },
    },
};
</script>
