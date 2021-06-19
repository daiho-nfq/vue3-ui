<template>
    <tr v-for="(orderItem, index) in orderList" :key="index">
        <td class="p-3">
            <app-p3 class="font-semibold">
                {{ orderItem.created_at }}
            </app-p3>
        </td>
        <td class="p-3">
            <app-p3>
                {{ orderItem.export_from }}
            </app-p3>
        </td>
        <td class="p-3">
            <app-p3>
                {{ orderItem.total.toLocaleString() }}
            </app-p3>
        </td>
        <td class="p-3">
            <app-order-status-badge :order-status="orderItem.status" />
        </td>
        <td class="p-3">
            <app-p3>
                {{ orderItem.created_by }}
            </app-p3>
        </td>
        <td class="p-3">
            <app-p3>
                {{ orderItem.delivered_by }}
            </app-p3>
        </td>
        <td class="p-2 cursor-pointer" align="right">
            <app-re-order-button />
        </td>
    </tr>
</template>

<script>
import { mapGetters } from "vuex";
import { getter_orderListByCustomer } from "@/store/getters";

export default {
    name: "OrderTableData",
    computed: {
        ...mapGetters("orderList", {
            orderList: getter_orderListByCustomer,
        }),
    },
};
</script>
