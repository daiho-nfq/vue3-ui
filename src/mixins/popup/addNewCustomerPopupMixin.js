import { mapState, mapMutations } from "vuex";
import { mutation_hideAddNewCustomerPopup, mutation_showAddNewCustomerPopup } from "@/store/mutations";

const addNewCustomerPopupMixin = {
    computed: {
        ...mapState("customer", ["isShowAddNewCustomerPopup"]),
    },
    methods: {
        ...mapMutations("customer", {
            showAddNewCustomerPopup: mutation_showAddNewCustomerPopup,
            hideAddNewCustomerPopup: mutation_hideAddNewCustomerPopup,
        }),
    },
};

export default addNewCustomerPopupMixin;
