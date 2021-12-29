<template>
    <layout-main>
        <main class="flex-1 overflow-y-auto">
            <layout-two-columns>
                <template #left-content>
                    <product-detail-form :product="product" />
                </template>
                <template #right-content> right </template>
            </layout-two-columns>
        </main>
    </layout-main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { action_fetchProductDetail } from "@/store/actions";
import { getter_getProductDetail } from "@/store/getters";
import LayoutMain from "@/layouts/LayoutMain.vue";
import LayoutTwoColumns from "@/layouts/LayoutTwoColumns.vue";
import ProductDetailForm from "@/components/Product/ProductForm/ProductDetailForm.vue";

export default {
    name: "ProductDetail",
    components: {
        LayoutMain,
        LayoutTwoColumns,
        ProductDetailForm,
    },
    created() {
        this.$_getProductData();
    },
    computed: {
        ...mapGetters("product", {
            product: getter_getProductDetail,
        }),
    },
    methods: {
        $_getProductData() {
            const productCode = this.$route.params.code;
            this.fetchProductDetail(productCode);
        },
        ...mapActions("product", {
            fetchProductDetail: action_fetchProductDetail,
        }),
    },
};
</script>
