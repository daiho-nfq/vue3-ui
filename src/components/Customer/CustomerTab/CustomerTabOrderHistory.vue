<template>
    <customer-tab-order-list />
</template>

<script>
import CustomerTabOrderList from "@/components/Customer/CustomerTab/CustomerTabOrderHistory/CustomerTabOrderList.vue";
export default {
    name: "CustomerTabOrderHistory",
    components: { CustomerTabOrderList },
    setup() {
        return {};
    },
};
</script>
