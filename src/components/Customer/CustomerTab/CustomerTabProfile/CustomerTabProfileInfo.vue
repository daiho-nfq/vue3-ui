<template>
    <div class="grid grid-cols-6 gap-4">
        <div class="col-span-6 flex items-center justify-between">
            <app-h1 class="border-l-4 border-red-500 pl-2 font-medium" v-text="'Personal Info'" />
            <app-badge class="rounded bg-gray-100 text-gray-800" v-text="customer.recent_purchase" />
        </div>
        <customer-profile-form />
    </div>
</template>

<script>
import CustomerProfileForm from "@/components/Customer/CustomerForm/CustomerProfileForm.vue";
import customerProfileMixin from "@/mixins/customerProfileMixin";

export default {
    name: "CustomerTabProfileInfo",
    mixins: [customerProfileMixin],
    components: {
        CustomerProfileForm,
    },
};
</script>
