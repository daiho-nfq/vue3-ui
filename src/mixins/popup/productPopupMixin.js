import { mapState, mapMutations } from "vuex";
import { mutation_showProductPopup, mutation_hideProductPopup } from "@/store/mutations";

const productPopupMixin = {
    computed: {
        ...mapState("product", ["isShowProductPopup"]),
    },
    methods: {
        ...mapMutations("product", {
            showProductPopup: mutation_showProductPopup,
            hideProductPopup: mutation_hideProductPopup,
        }),
    },
};

export default productPopupMixin;
