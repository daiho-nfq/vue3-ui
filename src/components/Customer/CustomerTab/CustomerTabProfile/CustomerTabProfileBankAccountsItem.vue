<template>
    <div
        v-for="account in bankAccounts"
        :key="account.number"
        class="
            relative
            rounded-lg
            border border-gray-300
            p-3
            shadow-sm
            space-x-3
            hover:border-gray-400
            focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500
        "
    >
        <div class="flex-1 min-w-0">
            <app-p4 class="font-medium text-gray-900 tracking-wider">
                {{ account.name }}
            </app-p4>
            <app-p3 class="font-medium flex items-center text-gray-500 truncate">
                <CreditCardIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                {{ account.bank }} - {{ account.number }}
            </app-p3>
        </div>
    </div>
</template>

<script>
import { CreditCardIcon } from "@heroicons/vue/solid";
export default {
    name: "CustomerTabProfileBankAccountsItem",
    components: {
        CreditCardIcon,
    },
    props: {
        bankAccounts: {
            type: Object,
            default: null,
        },
    },
};
</script>
