import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import AccessDenied from '../pages/AccessDenied.vue';

const routes = [
  { path: "/", redirect: "/main" },
  { path: "/main", component: Main },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/access-denied", component: AccessDenied } // ✅ Corrected component reference
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ✅ Define page access rules per website
const accessRules = {
  "www.smartinsider.com": ["/contact"], // Only allowed to access /contact
  "localhost": ["/main", "/about"], // Allowed pages for localhost
   "*": ["/access-denied"],
};

// ✅ Function to detect the embedding website
function getEmbeddingWebsite() {
  console.log("📢 Referrer:", document.referrer); // Debugging

  if (document.referrer) {
    try {
      return new URL(document.referrer).hostname;
    } catch (error) {
      console.warn("⚠️ Error parsing referrer:", error);
      return null;
    }
  }
  return null; // No referrer detected
}

router.beforeEach((to, from, next) => {
  console.log("🔄 Navigation triggered:", to.path);

  if (to.path === "/access-denied") {
    console.log("🟢 Access Denied page is always allowed.");
    return next();
  }

  if (window !== window.parent) {
    const embeddingWebsite = getEmbeddingWebsite();
    console.log("🔍 Detected embedding website:", embeddingWebsite);

    if (embeddingWebsite && accessRules[embeddingWebsite]) {
      const allowedPages = accessRules[embeddingWebsite];
      const fallbackPage = allowedPages[0] || "/";

      if (allowedPages.includes("*") || allowedPages.includes(to.path)) {
        console.log(`✅ Allowed: ${embeddingWebsite} can access ${to.path}`);
        localStorage.setItem("allowedPage", fallbackPage);
        next();
      } else {
        console.warn(`❌ Blocked: ${embeddingWebsite} cannot access ${to.path}`);
        next({ path: "/access-denied", query: { redirect: fallbackPage } });
      }
    } else {
      console.warn(`❌ Unauthorized embedding: ${embeddingWebsite}`);
      next({ path: "/access-denied", query: { message: "Unauthorized embedding" } });
    }
  } else {
    next();
  }
});

export default router;
