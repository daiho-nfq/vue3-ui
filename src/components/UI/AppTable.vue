<template>
    <table class="w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
            <tr>
                <app-table-head
                    v-for="(heading, index) in headingNames"
                    :key="index"
                >
                    {{ heading }}
                </app-table-head>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <slot />
        </tbody>
    </table>
</template>

<script>
export default {
    name: "AppTable",
    props: {
        headingNames: {
            type: Object,
            require: true,
        },
    },
};
</script>
