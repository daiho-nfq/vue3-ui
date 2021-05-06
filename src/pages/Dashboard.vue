<template>
    <layout-main>
        <main class="flex-1 overflow-y-auto">
            <div class="mx-auto p-2 sm:p-4 lg:w-full lg:p-6">
                <layout-two-columns>
                    <template #left-content>
                        <app-card> left </app-card>
                    </template>
                    <template #right-content>
                        <app-card> right </app-card>
                    </template>
                </layout-two-columns>
            </div>
        </main>
    </layout-main>
</template>

<script>
import LayoutMain from "../layouts/LayoutMain.vue";
import LayoutTwoColumns from "../layouts/LayoutTwoColumns.vue";

export default {
    components: { LayoutMain, LayoutTwoColumns },
};
</script>
