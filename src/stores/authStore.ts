import * as pin from 'pinia';
import { ref } from 'vue';

const useAuthStore = pin.defineStore("auth", () => {
    const is_authorized = ref<Boolean>(false);
    function authenticate(status: boolean): void {
        is_authorized.value = status;
    }
    return {
        is_authorized,
        authenticate,
    }
});

export default {
    useAuthStore,
}