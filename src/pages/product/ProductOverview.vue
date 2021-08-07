<template>
    <layout-main>
        <main class="flex-1 overflow-y-auto">
            <layout-two-columns>
                <template #left-content>
                    <product-list-section-heading />
                    <product-list />
                </template>
                <template #right-content> right </template>
            </layout-two-columns>
        </main>
    </layout-main>
    <product-popup @close="hideProductPopup" v-if="isShowProductPopup" />
</template>

<script>
import { mapActions } from "vuex";
import { action_fetchProductList } from "@/store/actions";
import productPopupMixin from "@/mixins/popup/productPopupMixin";
import LayoutMain from "@/layouts/LayoutMain.vue";
import LayoutOneColumn from "@/layouts/LayoutOneColumn.vue";
import LayoutTwoColumns from "@/layouts/LayoutTwoColumns.vue";
import ProductListSectionHeading from "@/components/Product/ProductListSectionHeading.vue";
import ProductList from "@/components/Product/ProductList.vue";
import ProductPopup from "@/components/Common/Popup/Product/ProductPopup.vue";
export default {
    name: "ProductOverview",
    mixins: [productPopupMixin],
    components: {
        LayoutMain,
        LayoutOneColumn,
        LayoutTwoColumns,
        ProductListSectionHeading,
        ProductList,
        ProductPopup,
    },
    created() {
        this.fetchProductList();
    },
    methods: {
        ...mapActions("productList", {
            fetchProductList: action_fetchProductList,
        }),
    },
};
</script>
