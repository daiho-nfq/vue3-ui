<template>
    <div class="mt-5 overflow-auto border border-gray-200 rounded-lg">
        <app-table :heading-names="customerListHeading">
            <customer-table-data :customer-list="customerList" />
        </app-table>
    </div>
</template>

<script>
import CustomerTableData from "@/components/Customer/CustomerTableData.vue";
import { CUSTOMER_LIST, CUSTOMER_LIST_HEADING } from "@/constants";

const customerList = CUSTOMER_LIST;
const customerListHeading = CUSTOMER_LIST_HEADING;
export default {
    name: "CustomerList",
    components: {
        CustomerTableData,
    },
    setup() {
        return {
            customerList,
            customerListHeading,
        };
    },
};
</script>
