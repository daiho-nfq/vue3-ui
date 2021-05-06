<template>
    <div
        class="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
        <login-form />
    </div>
</template>

<script>
import LoginForm from "../../components/Login/LoginForm.vue";
export default {
    components: { LoginForm },
    setup() {
        return {};
    },
};
</script>
