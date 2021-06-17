<template>
    <component :is="customClass.icon" :class="customClass.class" class="ml-2" />
</template>

<script>
import { ORDER_STATUS } from "@/constants";
import { isTwoValueEqual } from "@/helpers/utils";
import { CheckCircleIcon, MinusCircleIcon } from "@heroicons/vue/solid";

export default {
    name: "AppOrderStatusBadge",
    components: {
        CheckCircleIcon,
        MinusCircleIcon,
    },
    props: {
        orderStatus: {
            type: String,
            default: ORDER_STATUS.UNPAID,
        },
    },
    computed: {
        customClass() {
            if (isTwoValueEqual(this.orderStatus, ORDER_STATUS.PAID))
                return {
                    icon: "CheckCircleIcon",
                    class: "w-8 h-6 text-green-500",
                };

            return {
                icon: "MinusCircleIcon",
                class: "w-8 h-6 text-red-500",
            };
        },
    },
};
</script>
