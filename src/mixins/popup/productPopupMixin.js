import { mapState, mapMutations } from "vuex";
import { mutation_showProductPopup, mutation_hideProductPopup } from "@/store/mutations";

const productPopupMixin = {
    computed: {
        ...mapState("productList", ["isShowProductPopup"]),
    },
    methods: {
        ...mapMutations("productList", {
            showProductPopup: mutation_showProductPopup,
            hideProductPopup: mutation_hideProductPopup,
        }),
    },
};

export default productPopupMixin;
