<template>
  <div class="container">
    <header>
      <h1>Contact Us</h1>
      <p>Get in touch with us for any inquiries.</p>
    </header>

    <section class="content">
      <h2>Our Office</h2>
      <p>123 Business Street, City, Country</p>

      <h2>Reach Us</h2>
      <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
      <p>Phone: +1 234 567 890</p>

      <h2>Follow Us</h2>
      <ul>
        <li>🌐 <a href="#">Website</a></li>
        <li>📘 <a href="#">Facebook</a></li>
        <li>🐦 <a href="#">Twitter</a></li>
      </ul>

      <img src="https://via.placeholder.com/600x300" alt="Contact Us">
    </section>

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
  color: #e74c3c;
}

h2 {
  margin-top: 20px;
  color: #2c3e50;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  font-size: 18px;
  margin: 10px 0;
}

a {
  text-decoration: none;
  color: #3498db;
}

a:hover {
  text-decoration: underline;
}

img {
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
}

footer {
  margin-top: 20px;
  font-size: 14px;
  color: gray;
}
</style>
