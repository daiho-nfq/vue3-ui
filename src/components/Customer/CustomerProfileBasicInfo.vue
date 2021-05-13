<template>
    <div class="flex items-center justify-between">
        <app-h1 class="font-bold text-gray-900">
            {{ customerProfile.full_name }}
        </app-h1>
        <app-action-button v-text="'Create new customer'" />
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
