<template>
<<<<<<< HEAD
    <div>Customer Profile</div>
</template>

<script>
export default {
    name: "CustomerProfile",
=======
    <layout-main>
        <main class="flex-1 overflow-y-auto">
            <layout-two-columns>
                <template #left-content>
                    <customer-profile-basic-info />
                    <customer-tab-container />
                </template>
                <template #right-content> right </template>
            </layout-two-columns>
        </main>
    </layout-main>
</template>

<script>
import LayoutMain from "@/layouts/LayoutMain.vue";
import LayoutTwoColumns from "@/layouts/LayoutTwoColumns.vue";
import CustomerProfileBasicInfo from "@/components/Customer/CustomerProfileBasicInfo.vue";
import CustomerTabContainer from "@/components/Customer/CustomerTab/CustomerTabContainer.vue";

export default {
    name: "CustomerProfile",
    components: {
        LayoutMain,
        LayoutTwoColumns,
        CustomerProfileBasicInfo,
        CustomerTabContainer,
    },
>>>>>>> 556a759a98d2c3fa7a40f405ede7ffe88362bfd5
};
</script>
