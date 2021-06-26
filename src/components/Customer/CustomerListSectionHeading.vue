<template>
    <div class="mb-3 pb-3 border-b border-gray-300 flex items-center justify-between">
        <app-h1 class="leading-6 font-bold text-gray-900"> Customer List </app-h1>

        <app-action-button @click="showAddNewCustomerPopup"> Create new customer </app-action-button>
    </div>
</template>

<script>
import addNewCustomerPopupMixin from "@/mixins/popup/addNewCustomerPopupMixin";

export default {
    name: "CustomerListSectionHeading",
    mixins: [addNewCustomerPopupMixin],
};
</script>
