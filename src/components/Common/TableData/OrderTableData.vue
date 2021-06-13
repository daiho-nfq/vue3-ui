<template>
    <tr v-for="(orderItem, index) in orderList" :key="index">
        <td class="p-3">
            <app-p3>
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
            <app-p3>
                {{ orderItem.status }}
            </app-p3>
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
            <DotsVerticalIcon class="w-5 h-8" />
        </td>
    </tr>
</template>

<script>
import { mapGetters } from "vuex";
import { getter_orderListByCustomer } from "@/store/getters";
import { DotsVerticalIcon } from "@heroicons/vue/outline";

export default {
    name: "OrderTableData",
    components: {
        DotsVerticalIcon,
    },
    computed: {
        ...mapGetters("orderList", {
            orderList: getter_orderListByCustomer,
        }),
    },
};
</script>
