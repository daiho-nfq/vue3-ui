<template>
    <div class="pb-3 border-b border-gray-200">
        <app-h1 class="font-bold text-red-500" v-text="'Product Detail'" />
    </div>
    <product-form :form-data="formData" :is-disable-submit="isDisableSubmit">
        <form-group class="col-span-6 sm:col-span-2">
            <form-label :label="'Product Name'" />
            <form-input v-model="name" :placeholder="'Product Name'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-2">
            <form-label :label="'Product Type'" />
            <form-dropdown v-model="type" :options="$options.productTypeOptions" placeholder="Select product type" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-2">
            <form-label :label="'Product Weight'" />
            <form-dropdown
                v-model="weight"
                :options="$options.productWeightOptions"
                placeholder="Select product weight"
                :disabled="isDisableWeightOptions"
                :class="[isDisableWeightOptions && 'cursor-not-allowed bg-gray-500']"
            />
        </form-group>
        <form-group class="col-span-6">
            <form-label :label="'Product Use'" />
            <app-disclosure :title="'Select product use'">
                <div class="grid grid-cols-10 gap-3">
                    <form-check-box
                        v-for="(value, index) in $options.productUseOptions"
                        :key="index"
                        v-model="use"
                        :input-value="index"
                        class="col-span-5 md:col-span-2"
                    >
                        {{ value }}
                    </form-check-box>
                </div>
            </app-disclosure>
        </form-group>
    </product-form>
</template>

<script>
import ProductForm from "@/components/Product/ProductForm/ProductForm.vue";
import { PRODUCT_WEIGHT, PRODUCT_USE, PRODUCT_TYPE } from "@/constants";
import { isValueEmpty } from "@/helpers/utils";

export default {
    productWeightOptions: PRODUCT_WEIGHT,
    productUseOptions: PRODUCT_USE,
    productTypeOptions: PRODUCT_TYPE,
    name: "ProductDetailForm",
    components: {
        ProductForm,
    },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            name: this.product.name,
            type: this.product.type,
            weight: this.product.weight,
            use: this.product.use ?? [],
            protein: this.product.protein,
            factory: this.product.factory,
        };
    },
    computed: {
        isDisableSubmit() {
            return isValueEmpty(this.name) || isValueEmpty(this.type);
        },
        formData() {
            return {
                name: this.name,
                type: this.type,
                weight: this.weight,
                use: this.use,
                protein: this.protein,
                factory: this.factory,
            };
        },
        isDisableWeightOptions() {
            return this.type !== "bag";
        },
    },
};
</script>
