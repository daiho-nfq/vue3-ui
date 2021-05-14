<template>
    <layout-main>
        <main class="flex-1 overflow-y-auto">
<<<<<<< HEAD
            <div class="mx-auto p-2 sm:p-4 lg:w-full lg:p-6">
                <layout-two-columns>
                    <template #left-content> left </template>
                    <template #right-content> right </template>
                </layout-two-columns>
            </div>
=======
            <layout-two-columns>
                <template #left-content> left </template>
                <template #right-content> right </template>
            </layout-two-columns>
>>>>>>> 556a759a98d2c3fa7a40f405ede7ffe88362bfd5
        </main>
    </layout-main>
</template>

<script>
import LayoutMain from "@/layouts/LayoutMain.vue";
import LayoutTwoColumns from "@/layouts/LayoutTwoColumns.vue";

export default {
    name: "Dashboard",
    components: { LayoutMain, LayoutTwoColumns },
};
</script>
