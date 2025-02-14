<template>
  <div class="access-denied">
    <h1 style="color: red">Access Denied</h1>
    <p>You don't have permission to access this page.</p>
    <button @click="goToAllowedPage">Go to Allowed Page</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const goToAllowedPage = () => {
      const fallbackPage = localStorage.getItem("allowedPage") || "/"; // Retrieve from localStorage
      router.push(fallbackPage);
    };

    return { goToAllowedPage };
  },
};
</script>
