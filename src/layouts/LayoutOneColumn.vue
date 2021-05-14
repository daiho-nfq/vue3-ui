<template>
    <div class="mx-auto p-2 sm:p-4 lg:w-full lg:p-6 grid grid-cols-1 items-start">
        <app-card>
            <slot />
        </app-card>
    </div>
</template>

<script>
export default {
    name: "LayoutOneColumn",
};
</script>
