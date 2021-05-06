<template>
    <div class="grid grid-cols-1 items-start">
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
