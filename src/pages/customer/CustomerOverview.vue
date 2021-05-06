<template>
    <layout-main>
        <main class="flex-1 overflow-y-auto">
            <div class="mx-auto p-2 sm:p-4 lg:w-full lg:p-6">
                <layout-one-column>
                    <customer-list-section-heading />
                    <customer-list />
                </layout-one-column>
            </div>
        </main>
    </layout-main>
</template>

<script>
import LayoutMain from "@/layouts/LayoutMain.vue";
import LayoutOneColumn from "@/layouts/LayoutOneColumn.vue";
import CustomerList from "@/components/Customer/CustomerList.vue";
import CustomerListSectionHeading from "@/components/Customer/CustomerListSectionHeading.vue";
export default {
    name: "CustomerOverview",
    components: {
        LayoutMain,
        LayoutOneColumn,
        CustomerList,
        CustomerListSectionHeading,
    },
};
</script>
