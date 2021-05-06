<template>
    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        <!-- Left column -->
        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <slot name="left-content" />
        </div>

        <!-- Right column -->
        <div class="grid grid-cols-1 gap-4">
            <slot name="right-content" />
        </div>
    </div>
</template>

<script>
export default {
    name: "LayoutTwoColumns",
};
</script>
