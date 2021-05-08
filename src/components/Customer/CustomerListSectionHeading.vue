<template>
    <div
        class="mb-3 pb-3 border-b border-gray-300 flex items-center justify-between"
    >
        <app-h1 class="leading-6 font-bold text-gray-900">
            Customer List
        </app-h1>

        <app-action-button
            class="font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none"
        >
            Create new customer
        </app-action-button>
    </div>
</template>

<script>
export default {
    name: "CustomerListSectionHeading",
};
</script>
