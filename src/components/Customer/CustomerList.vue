<template>
    <div class="mt-5 overflow-auto border border-gray-200 rounded-lg">
        <app-table :heading-names="customerListHeading">
            <customer-table-data />
        </app-table>
    </div>
</template>

<script>
import CustomerTableData from "@/components/Common/TableData/CustomerTableData.vue";
import { CUSTOMER_LIST_HEADING } from "@/constants";

export default {
    name: "CustomerList",
    components: {
        CustomerTableData,
    },
    setup() {
        const customerListHeading = CUSTOMER_LIST_HEADING;

        return {
            customerListHeading,
        };
    },
};
</script>
