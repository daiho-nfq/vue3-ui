<template>
    <div class="md:flex md:items-center md:justify-between">
        <app-h1 class="font-bold text-gray-900">
            {{ customerProfile.full_name }}
        </app-h1>
        <app-action-button v-text="'Create new order'" />
    </div>
</template>

<script>
import { CUSTOMER_PROFILE } from "@/constants";

const customerProfile = CUSTOMER_PROFILE;
export default {
    name: "CustomerProfileBasicInfo",
    setup() {
        return {
            customerProfile,
        };
    },
};
</script>
