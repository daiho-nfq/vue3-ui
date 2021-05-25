<template>
    <app-h1 class="col-span-6" v-text="'Personal Info'" />
    <form-group class="col-span-6 sm:col-span-2">
        <form-label :label="'Full Name'" />
        <form-input :placeholder="'Full Name'" />
    </form-group>
    <form-group class="col-span-6 sm:col-span-2">
        <form-label :label="'Email'" />
        <form-input :placeholder="'Email'" :type="'email'" />
    </form-group>
    <form-group class="col-span-6 sm:col-span-2">
        <form-label :label="'Phone Number'" />
        <form-input :placeholder="'Phone number'" />
    </form-group>
    <form-group class="col-span-6 sm:col-span-4">
        <form-label :label="'Address'" />
        <form-input :placeholder="'Address'" />
    </form-group>
    <form-group class="col-span-6 sm:col-span-2">
        <form-label :label="'City'" />
        <form-input :placeholder="'City'" />
    </form-group>
    <form-group class="col-span-6 sm:col-span-3">
        <form-label :label="'Common Note'" />
        <form-text-area :placeholder="'Common Note'" />
    </form-group>
    <form-group class="col-span-6 sm:col-span-3">
        <form-label :label="'Other Note'" />
        <form-text-area :placeholder="'Other Note'" />
    </form-group>
</template>

<script>
export default {
    name: "CustomerTabProfileInfo",
};
</script>
