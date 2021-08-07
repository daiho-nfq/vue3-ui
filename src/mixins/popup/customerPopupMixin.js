import { mapState, mapMutations } from "vuex";
import { mutation_hideCustomerPopup, mutation_showCustomerPopup } from "@/store/mutations";

const customerPopupMixin = {
    computed: {
        ...mapState("customer", ["isShowCustomerPopup"]),
    },
    methods: {
        ...mapMutations("customer", {
            showCustomerPopup: mutation_showCustomerPopup,
            hideCustomerPopup: mutation_hideCustomerPopup,
        }),
    },
};

export default customerPopupMixin;
