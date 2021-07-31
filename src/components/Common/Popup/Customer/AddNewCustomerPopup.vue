<template>
    <app-popup>
        <div class="p-4 bg-red-500 rounded-t flex-center flex-col w-full">
            <app-h2 class="uppercase !text-white font-bold" v-text="$t('customer.actions.create_customer')" />
        </div>
        <div class="grid grid-cols-6 gap-4 p-4">
            <customer-profile-form />
        </div>
        <div class="p-4">
            <app-action-button class="ml-auto block" v-text="'Save'" @click="submit" />
        </div>
    </app-popup>
</template>

<script>
import CustomerProfileForm from "@/components/Customer/CustomerForm/CustomerProfileForm.vue";
import customerProfileMixin from "@/mixins/customerProfileMixin";

export default {
    name: "AddNewCustomerPopup",
    mixins: [customerProfileMixin],
    components: {
        CustomerProfileForm,
    },
};
</script>
