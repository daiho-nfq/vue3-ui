<template>
    <layout-main>
        <main class="flex-1 overflow-y-auto">
            <layout-one-column>
                <button class="bg-red-500" @click="openPopup">click</button>
                <customer-list-section-heading />
                <customer-list />
            </layout-one-column>
        </main>
    </layout-main>
    <add-new-customer-popup @close="closePopup" v-if="isShowPopup" />
</template>

<script>
import { mapActions } from "vuex";
import { action_fetchCustomerList } from "@/store/actions";
import LayoutMain from "@/layouts/LayoutMain.vue";
import LayoutOneColumn from "@/layouts/LayoutOneColumn.vue";
import CustomerList from "@/components/Customer/CustomerList.vue";
import CustomerListSectionHeading from "@/components/Customer/CustomerListSectionHeading.vue";
import AddNewCustomerPopup from "@/components/Common/Popup/AddNewCustomerPopup.vue";

export default {
    name: "CustomerOverview",
    components: {
        LayoutMain,
        LayoutOneColumn,
        CustomerList,
        CustomerListSectionHeading,
        AddNewCustomerPopup,
    },
    data() {
        return {
            isShowPopup: false,
        };
    },
    created() {
        this.fetchCustomerList();
    },
    methods: {
        closePopup() {
            this.isShowPopup = false;
        },
        openPopup() {
            this.isShowPopup = true;
        },
        ...mapActions("customerList", {
            fetchCustomerList: action_fetchCustomerList,
        }),
    },
};
</script>
