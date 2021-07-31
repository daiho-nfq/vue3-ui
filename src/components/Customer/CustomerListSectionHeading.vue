<template>
    <div class="mb-3 pb-3 border-b border-gray-300 flex items-center justify-between">
        <app-h1 class="leading-6 font-bold text-gray-900" v-text="$t('generic.customer_list')" />
        <app-action-button @click="showAddNewCustomerPopup" v-text="$t('customer.actions.create_customer')" />
    </div>
</template>

<script>
import addNewCustomerPopupMixin from "@/mixins/popup/addNewCustomerPopupMixin";

export default {
    name: "CustomerListSectionHeading",
    mixins: [addNewCustomerPopupMixin],
};
</script>
