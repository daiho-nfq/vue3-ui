<template>
    <img class="h-auto w-auto mx-auto" :src="$options.logo" alt="logo" />
</template>

<script>
import APP_LOGO from "@/assets/images/logo.png";

export default {
    name: "AppLogo",
    logo: APP_LOGO,
};
</script>
