<template>
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
import { mapActions } from "vuex";
import { action_fetchCustomerData, action_fetchOrderListByCustomer } from "@/store/actions";
import LayoutMain from "@/layouts/LayoutMain.vue";
import LayoutTwoColumns from "@/layouts/LayoutTwoColumns.vue";
import CustomerProfileBasicInfo from "@/components/Customer/CustomerProfileBasicInfo.vue";
import CustomerTabContainer from "@/components/Customer/CustomerTab/CustomerTabContainer.vue";
import { ORDER_LIST } from "@/constants";

export default {
    name: "CustomerProfile",
    components: {
        LayoutMain,
        LayoutTwoColumns,
        CustomerProfileBasicInfo,
        CustomerTabContainer,
    },
    created() {
        this.$_getCustomerProfileData();
    },
    methods: {
        $_getCustomerProfileData() {
            const customerCode = this.$route.params.code;
            this.fetchCustomerData(customerCode).then(() => this.fetchOrderListByCustomer(ORDER_LIST));
        },
        ...mapActions("customer", {
            fetchCustomerData: action_fetchCustomerData,
        }),
        ...mapActions("orderList", {
            fetchOrderListByCustomer: action_fetchOrderListByCustomer,
        }),
    },
};
</script>
