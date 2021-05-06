<template>
    <form class="w-full flex md:ml-0" action="#" method="GET">
        <label for="search_field" class="sr-only">Search all files</label>
        <div class="relative w-full text-gray-400 focus-within:text-gray-600">
            <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center"
            >
                <SearchIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
            </div>
            <input
                name="search_field"
                id="search_field"
                class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400"
                placeholder="Search"
                type="search"
            />
        </div>
    </form>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/outline";

export default {
    name: "AppSearchBar",
    components: { SearchIcon },
    setup() {
        return {};
    },
};
</script>
