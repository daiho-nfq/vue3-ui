<template>
    <div>
        <div class="border-b border-gray-200 mx-auto">
            <div class="flex space-x-10 justify-between md:justify-start">
                <app-p4
                    v-for="tab in customerTabs"
                    :key="tab.name"
                    @click="setCurrentTab(tab)"
                    class="'whitespace-nowrap py-3 border-b-2 font-medium cursor-pointer"
                    :class="[
                        isCurrentTab(tab.name)
                            ? 'border-red-500 text-red-500 font-bold'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    ]"
                >
                    {{ tab.name }}
                </app-p4>
            </div>
        </div>
        <component class="mt-5" :is="getCurrentTab.component" />
    </div>
</template>

<script>
import { CUSTOMER_PROFILE_TABS } from "@/constants";
import { computed, ref } from "vue";
import { isTwoValueEqual } from "@/helpers/utils";

const customerTabs = CUSTOMER_PROFILE_TABS;
export default {
    name: "CustomerTabContainer",
    setup() {
        const currentTab = ref(customerTabs[0]);

        function isCurrentTab(tabName) {
            return isTwoValueEqual(currentTab.value.name, tabName);
        }

        function setCurrentTab(tab) {
            return (currentTab.value = tab);
        }

        const getCurrentTab = computed(() => {
            return currentTab.value;
        });

        return {
            customerTabs,
            isCurrentTab,
            setCurrentTab,
            getCurrentTab,
        };
    },
};
</script>
