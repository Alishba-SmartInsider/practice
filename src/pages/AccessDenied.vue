<template>
  <div class="access-denied-container">
    <div class="access-denied-box">
      <h1>Access Denied</h1>
      <p>You don't have permission to access this page.</p>
      <button @click="goToAllowedPage">Go to Allowed Page</button>
    </div>
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

<style scoped>
.access-denied-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
}

.access-denied-box {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.access-denied-box h1 {
  color: red;
  font-size: 24px;
  margin-bottom: 10px;
}

.access-denied-box p {
  color: #333;
  font-size: 16px;
}

.access-denied-box button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.access-denied-box button:hover {
  background-color: #0056b3;
}
</style>
