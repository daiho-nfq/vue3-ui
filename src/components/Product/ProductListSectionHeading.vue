<template>
    <div class="mb-3 pb-3 border-b border-gray-300 flex items-center justify-between">
        <app-h1 class="leading-6 font-bold">Product List</app-h1>
        <app-action-button
            class="font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none"
            v-text="'Create new product'"
            @click="showProductPopup"
        />
    </div>
</template>

<script>
import productPopupMixin from "@/mixins/popup/productPopupMixin";

export default {
    name: "ProductListSectionHeading",
    mixins: [productPopupMixin],
};
</script>
