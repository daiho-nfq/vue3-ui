<template>
    <div class="grid grid-cols-6 gap-4">
        <div class="col-span-6 flex items-center justify-between">
            <app-h1 class="border-l-4 border-red-500 pl-2 font-medium" v-text="'Personal Info'" />
            <app-badge class="rounded bg-gray-100 text-gray-800" v-text="customer.recent_purchase" />
        </div>
        <form-group class="col-span-6 sm:col-span-2">
            <form-label :label="'Full Name'" />
            <form-input v-model="fullName" :placeholder="'Full Name'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-2">
            <form-label :label="'Email'" />
            <form-input v-model="email" :placeholder="'Email'" :type="'email'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-2">
            <form-label :label="'Phone Number'" />
            <form-input v-model="phoneNumber" :placeholder="'Phone number'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-4">
            <form-label :label="'Address'" />
            <form-input v-model="address" :placeholder="'Address'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-2">
            <form-label :label="'City'" />
            <form-input v-model="city" :placeholder="'City'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-3">
            <form-label :label="'Common Note'" />
            <form-text-area v-model="commonNote" :placeholder="'Common Note'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-3">
            <form-label :label="'Other Note'" />
            <form-text-area v-model="otherNote" :placeholder="'Other Note'" />
        </form-group>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getter_customer } from "@/store/getters";
import { isValueEmpty, getValueByPath } from "@/helpers/utils";

export default {
    name: "CustomerTabProfileInfo",
    data() {
        return {
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
            city: "",
            commonNote: "",
            otherNote: "",
        };
    },
    computed: {
        ...mapGetters("customer", {
            customer: getter_customer,
        }),
    },
    created() {
        this.$_mapCustomerProfile();
    },
    methods: {
        $_mapCustomerProfile() {
            if (isValueEmpty(this.customer)) {
                return;
            }

            this.fullName = getValueByPath(this.customer, ["full_name"], null);
            this.email = getValueByPath(this.customer, ["email"], null);
            this.phoneNumber = getValueByPath(this.customer, ["phone_number"], null);
            this.address = getValueByPath(this.customer, ["address"], null);
            this.city = getValueByPath(this.customer, ["city"], null);
            this.commonNote = getValueByPath(this.customer, ["note", "common"], null);
            this.otherNote = getValueByPath(this.customer, ["note", "other"], null);
        },
    },
};
</script>
