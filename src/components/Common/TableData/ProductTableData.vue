<template>
    <tr v-for="(product, index) in productList" :key="index">
        <td class="p-3">
            <app-p4 class="font-semibold">
                {{ product.name }}
            </app-p4>
            <app-p3 class="text-gray-500">
                {{ product.name_code }}
            </app-p3>
        </td>
        <td class="p-3">
            <app-p4>
                {{ product.weight }}
            </app-p4>
        </td>
        <td class="p-3">
            <app-p4>
                {{ product.type }}
            </app-p4>
        </td>
        <td class="p-3">
            <app-p4>
                {{ product.protein }}
            </app-p4>
        </td>
        <td class="p-3">
            <app-p4>
                {{ product.factory }}
            </app-p4>
        </td>
        <td class="p-3 space-x-2">
            <app-link
                :to="{
                    name: $options.linkToProductDetail,
                    params: { code: product.name_code },
                }"
            >
                <InformationCircleIcon class="w-8 h-6 text-green-500 cursor-pointer" />
            </app-link>
        </td>
    </tr>
</template>

<script>
import { mapGetters } from "vuex";
import { getter_getProductList } from "@/store/getters";
import { ROUTE_NAME } from "@/constants";
import { InformationCircleIcon } from "@heroicons/vue/outline";

export default {
    name: "ProductTableData",
    linkToProductDetail: ROUTE_NAME.PRODUCT_DETAIL,
    components: {
        InformationCircleIcon,
    },
    computed: {
        ...mapGetters("productList", {
            productList: getter_getProductList,
        }),
    },
};
</script>
