import { mapGetters } from "vuex";
import { getter_customer } from "@/store/getters";
import { isValueEmpty, getValueByPath, isTwoValueEqual } from "@/helpers/utils";
import { ROUTE_NAME } from "@/constants";

const customerProfileMixin = {
    data() {
        return {
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
            city: "",
            commonNote: "",
            otherNote: "",
        };
    },
    computed: {
        ...mapGetters("customer", {
            customer: getter_customer,
        }),
    },
    created() {
        this.$_mapCustomerProfile();
    },
    methods: {
        $_mapCustomerProfile() {
            if (isValueEmpty(this.customer) || isTwoValueEqual(this.$route.name, ROUTE_NAME.CUSTOMER_OVERVIEW)) {
                return;
            }

            this.fullName = getValueByPath(this.customer, ["full_name"], null);
            this.email = getValueByPath(this.customer, ["email"], null);
            this.phoneNumber = getValueByPath(this.customer, ["phone_number"], null);
            this.address = getValueByPath(this.customer, ["address"], null);
            this.city = getValueByPath(this.customer, ["city"], null);
            this.commonNote = getValueByPath(this.customer, ["note", "common"], null);
            this.otherNote = getValueByPath(this.customer, ["note", "other"], null);
        },
    },
};

export default customerProfileMixin;
