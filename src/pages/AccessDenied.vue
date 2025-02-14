
<template>
  <div style="text-align: center; padding: 20px;">
    <h1 style="color: red">{{ message || 'Access Denied' }}</h1>
    <p v-if="!message">You don't have permission to access this page.</p>
    <button v-if="redirect" @click="goToAllowedPage" style="padding: 10px; font-size: 16px;">Go to Allowed Page</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const redirect = ref(route.query.redirect);
    const message = ref(route.query.message);

    const goToAllowedPage = () => {
      router.push(redirect.value);
    };

    return { redirect, message, goToAllowedPage };
  },
};
</script>