<template>
    <app-card class="max-w-md text-center w-96 text-center">
        <app-logo />

        <div class="space-y-4 mt-10">
            <form-group>
                <form-input
                    :type="'email'"
                    :placeholder="'email'"
                    :error-msg="'Error message'"
                    :is-error="true"
                />
            </form-group>

            <form-group>
                <form-input :type="'password'" :placeholder="'password'" />
            </form-group>
        </div>

        <app-button
            class="text-sm mt-8 font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none"
            @click="login"
        >
            Login
        </app-button>
    </app-card>
</template>

<script>
import { ROUTE_NAME } from "../../constants";
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();

        //TODO update login function later
        function login() {
            return router.push({ name: ROUTE_NAME.DASHBOARD });
        }

        return { login };
    },
};
</script>
