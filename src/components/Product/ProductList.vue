<template>
    <div class="mt-5 overflow-auto border border-gray-200 rounded-lg">
        <app-table :heading-names="productListHeading">
            <product-table-data />
        </app-table>
    </div>
</template>

<script>
import ProductTableData from "@/components/Common/TableData/ProductTableData.vue";
import { PRODUCT_LIST_HEADING } from "@/constants";
export default {
    name: "ProductList",
    components: {
        ProductTableData,
    },
    setup() {
        const productListHeading = PRODUCT_LIST_HEADING;

        return {
            productListHeading,
        };
    },
};
</script>
