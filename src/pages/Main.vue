<template>
  <div class="container">
    <header>
      <h1>Welcome to Our Website</h1>
      <p>Navigate to different pages using the links below.</p>
    </header>

    <nav>
      <ul>
        <li><router-link to="/home">🏠 Home</router-link></li>
        <li><router-link to="/about">ℹ️ About</router-link></li>
        <li><router-link to="/contact">📞 Contact</router-link></li>
      </ul>
    </nav>

    <footer>
      <p>&copy; 2025 Our Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #2c3e50;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

nav ul li {
  display: inline;
}

nav ul li a {
  text-decoration: none;
  font-size: 18px;
  color: #3498db;
  padding: 10px 15px;
  border: 2px solid #3498db;
  border-radius: 5px;
}

nav ul li a:hover {
  background-color: #3498db;
  color: white;
}

footer {
  margin-top: 20px;
  font-size: 14px;
  color: gray;
}
</style>
