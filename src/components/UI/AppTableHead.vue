<template>
    <th
        scope="col"
        class="p-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider"
    >
        <slot />
    </th>
</template>

<script>
export default {
    name: "AppTableHead",
};
</script>
