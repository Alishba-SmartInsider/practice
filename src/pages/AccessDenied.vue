<!-- pages/AccessDenied.vue -->
<template>
  <div class="access-denied">
    <h1 style="color: red">Access Denied</h1>
    <p>You don't have permission to access this page.</p>
    <button @click="redirectToAllowedPage">Go to Allowed Page</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    
    const redirectToAllowedPage = () => {
      const fallbackPage = route.query.fallback || "/";
      router.push(fallbackPage);
    };

    return { redirectToAllowedPage };
  },
};
</script>

<style scoped>
.access-denied {
  text-align: center;
  padding: 20px;
}
button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>
