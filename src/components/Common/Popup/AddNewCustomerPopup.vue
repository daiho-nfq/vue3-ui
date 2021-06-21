<template>
    <app-popup>
        <template #header>
            <app-h3>header</app-h3>
        </template>
        <template #content>
            <app-h3>content</app-h3>
        </template>
        <template #footer>
            <app-h3>footer</app-h3>
        </template>
    </app-popup>
</template>

<script>
export default {
    name: "AddNewCustomerPopup",
};
</script>
