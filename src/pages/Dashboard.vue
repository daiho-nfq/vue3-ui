<template>
    <layout-main>
        <main class="flex-1 overflow-y-auto">
            <layout-two-columns>
                <template #left-content> {{ $t("generic.me") }} </template>
                <template #right-content> right </template>
            </layout-two-columns>
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
