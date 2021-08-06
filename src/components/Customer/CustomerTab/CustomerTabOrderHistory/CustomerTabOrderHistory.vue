<template>
    <div class="space-y-4">
        <customer-tab-order-list />
    </div>
</template>

<script>
import CustomerTabOrderList from "@/components/Customer/CustomerTab/CustomerTabOrderHistory/CustomerTabOrderList.vue";
export default {
    name: "CustomerTabOrderHistory",
    components: { CustomerTabOrderList },
};
</script>
