<template>
    <app-popup>
        <div class="p-4 bg-red-500 rounded-t flex-center flex-col w-full">
            <app-h2 class="uppercase !text-white font-bold" v-text="$t('customer.actions.create_customer')" />
        </div>
        <div class="gap-4 p-4">
            <customer-profile-form :customer="customer" />
        </div>
    </app-popup>
</template>

<script>
import CustomerProfileForm from "@/components/Customer/CustomerForm/CustomerProfileForm.vue";

export default {
    name: "AddNewCustomerPopup",
    components: {
        CustomerProfileForm,
    },
    data() {
        const customer = {
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
            city: "",
            note: {
                common: "",
                other: "",
            },
        };
        
        return { customer };
    },
};
</script>
