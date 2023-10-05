<template>
    <div class="bg-yellow-300">
        <h1>Login</h1>
        <p class="text-red-400">Authorized: {{ auth.is_authorized }}</p>
        <input type="button" class="bg-blue-300" value="Authorize me" @click="authorize">   
    </div>
</template>

<script setup lang="ts">
import authStore from '../stores/authStore'

const auth = authStore.useAuthStore();
function authorize() {
    auth.authenticate(!auth.is_authorized);
}
</script>

<style scoped>

</style>