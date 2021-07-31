<template>
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
</template>

<script>
import customerProfileMixin from "@/mixins/customerProfileMixin";
export default {
    name: "CustomerProfileForm",
    mixins: [customerProfileMixin],
};
</script>
