<template>
    <layout-main>
        <main class="flex-1 overflow-y-auto">
            <layout-one-column>
                <customer-list-section-heading />
                <customer-list />
            </layout-one-column>
        </main>
    </layout-main>
    <add-new-customer-popup @close="hideCustomerPopup" v-if="isShowCustomerPopup" />
</template>

<script>
import { mapActions } from "vuex";
import { action_fetchCustomerList } from "@/store/actions";
import customerPopupMixin from "@/mixins/popup/customerPopupMixin";
import LayoutMain from "@/layouts/LayoutMain.vue";
import LayoutOneColumn from "@/layouts/LayoutOneColumn.vue";
import CustomerList from "@/components/Customer/CustomerList.vue";
import CustomerListSectionHeading from "@/components/Customer/CustomerListSectionHeading.vue";
import AddNewCustomerPopup from "@/components/Common/Popup/Customer/AddNewCustomerPopup.vue";

export default {
    name: "CustomerOverview",
    components: {
        LayoutMain,
        LayoutOneColumn,
        CustomerList,
        CustomerListSectionHeading,
        AddNewCustomerPopup,
    },
    mixins: [customerPopupMixin],
    created() {
        this.fetchCustomerList();
    },
    methods: {
        ...mapActions("customerList", {
            fetchCustomerList: action_fetchCustomerList,
        }),
    },
};
</script>
