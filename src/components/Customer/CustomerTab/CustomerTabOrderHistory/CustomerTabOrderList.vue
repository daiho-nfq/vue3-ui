<template>
    <div class="overflow-auto no-scrollbar border rounded-lg">
        <app-table :heading-names="orderListHeading">
            <order-table-data />
        </app-table>
    </div>
</template>

<script>
import { ORDER_LIST_HEADING } from "@/constants";
import OrderTableData from "@/components/Common/TableData/OrderTableData.vue";

export default {
    name: "CustomerTabOrderList",
    components: {
        OrderTableData,
    },
    setup() {
        const orderListHeading = ORDER_LIST_HEADING;
        return { orderListHeading };
    },
};
</script>
