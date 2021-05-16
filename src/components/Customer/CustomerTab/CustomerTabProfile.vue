<template>
    <div class="grid grid-cols-6 sm:gap-4">
        <app-p5 class="col-span-6"> Personal Info </app-p5>
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
    </div>
</template>

<script>
export default {
    name: "CustomerTabProfile",
    setup() {
        return {};
    },
};
</script>
