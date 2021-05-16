<template>
    <tr v-for="customer in customerList" :key="customer.uuid">
        <td class="p-3">
            <app-p4 class="font-medium text-gray-900">
                {{ customer.full_name }}
            </app-p4>
            <app-p3 class="text-gray-500">
                {{ customer.email }}
            </app-p3>
        </td>
        <td class="p-3">
            <app-p4>
                {{ customer.phone_number }}
            </app-p4>
        </td>
        <td class="p-3">
            <app-p4 class="font-medium text-gray-900">
                {{ customer.address }}
            </app-p4>
            <app-p3 class="text-gray-500">
                {{ customer.city }}
            </app-p3>
        </td>
        <td class="p-3">
            <app-p4>
                {{ customer.type }}
            </app-p4>
        </td>
        <td class="p-3">
            <app-p4>
                {{ customer.recent_purchase }}
            </app-p4>
        </td>
        <td class="p-3 space-x-2">
            <app-link
                :to="{
                    name: $options.linkToCustomerProfile,
                    params: { code: customer.uuid },
                }"
                class="
                    inline-flex
                    items-center
                    px-4
                    py-1.5
                    rounded-full
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    font-medium
                "
            >
                view
            </app-link>
        </td>
    </tr>
</template>

<script>
import { ROUTE_NAME } from "@/constants";
export default {
    name: "CustomerTableData",
    linkToCustomerProfile: ROUTE_NAME.CUSTOMER_PROFILE,
    props: {
        customerList: {
            type: Object,
            require: true,
        },
    },
};
</script>
