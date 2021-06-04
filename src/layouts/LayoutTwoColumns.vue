<template>
    <div class="mx-auto p-2 sm:p-4 lg:w-full lg:p-6 grid grid-cols-1 gap-4 items-start lg:grid-cols-5 lg:gap-8">
        <!-- Left column -->
        <div class="grid grid-cols-1 gap-4 md:col-span-3">
            <app-card class="space-y-3 sm:space-y-5">
                <slot name="left-content" />
            </app-card>
        </div>

        <!-- Right column -->
        <div class="grid grid-cols-1 gap-4 md:col-span-2">
            <app-card>
                <slot name="right-content" />
            </app-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "LayoutTwoColumns",
};
</script>
