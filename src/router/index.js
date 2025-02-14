import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import AccessDenied from '../pages/AccessDenied.vue'

const routes = [
  { path: "/", redirect: "/main" },
  { path: "/main", component: Main },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/access-denied", component: 'AccessDenied'}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

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

  if (window !== window.parent) {
    const embeddingWebsite = getEmbeddingWebsite();
    console.log("🔍 Detected embedding website:", embeddingWebsite);

    if (embeddingWebsite && accessRules[embeddingWebsite]) {
      const allowedPages = accessRules[embeddingWebsite];

      if (allowedPages.includes("*") || allowedPages.includes(to.path)) {
        console.log(`✅ Allowed: ${embeddingWebsite} can access ${to.path}`);
        
        // Save the first allowed page for redirect purposes
        localStorage.setItem("allowedPage", allowedPages[0]);

        next();
      } else {
        console.warn(`❌ Blocked: ${embeddingWebsite} cannot access ${to.path}`);
        next("/denied"); // Redirect to the new Access Denied page
      }
    } else {
      console.warn(`❌ Unauthorized embedding: ${embeddingWebsite}`);
      next("/denied");
    }
  } else {
    next(); // Allow normal navigation outside iframe
  }
});

// router.beforeEach((to, from, next) => {
//   console.log("🔄 Navigation triggered: Trying to go to", to.path);

//   if (window !== window.parent) {
//     const embeddingWebsite = getEmbeddingWebsite();
//     console.log("🔍 Detected embedding website:", embeddingWebsite);

//     if (embeddingWebsite && accessRules[embeddingWebsite]) {
//       const allowedPages = accessRules[embeddingWebsite];

//       if (allowedPages.includes("*") || allowedPages.includes(to.path)) {
//         console.log(`✅ Allowed: ${embeddingWebsite} can access ${to.path}`);
//         next();
//       } else {
//         console.warn(`❌ Blocked: ${embeddingWebsite} cannot access ${to.path}`);

//         // Get the first allowed page for this website
//         const fallbackPage = allowedPages.length > 0 ? allowedPages[0] : "/";

//         // Display "Access Denied" message with a button to move to an allowed page
//         document.body.innerHTML = `
//           <div style="text-align: center; padding: 20px;">
//             <h1 style="color: red">Access Denied</h1>
//             <p>You don't have permission to access this page.</p>
//             <button id="goToAllowedPage" style="padding: 10px; font-size: 16px;">Go to Allowed Page</button>
//           </div>
//         `;

//         // Handle button click properly
//         document.getElementById("goToAllowedPage").addEventListener("click", () => {
//           window.location.replace(fallbackPage); // ✅ This ensures proper page reload
//         });
//       }
//     } else {
//       console.warn(`❌ Unauthorized embedding: ${embeddingWebsite}`);

//       document.body.innerHTML = `
//         <div style="text-align: center;">
//           <h1 style="color: red">Access Denied</h1>
//           <p>This website is not authorized to embed this page.</p>
//         </div>
//       `;
//     }
//   } else {
//     next(); // Allow normal navigation outside iframe
//   }
// });


// router.beforeEach((to, from, next) => {
//   console.log("🔄 Navigation triggered: Trying to go to", to.path);

//   // Check if this is inside an iframe
//   if (window !== window.parent) {
//     const embeddingWebsite = getEmbeddingWebsite();

//     if (embeddingWebsite && accessRules[embeddingWebsite]) {
//       const allowedPages = accessRules[embeddingWebsite];

//       // ✅ Allow if the website has full access or the page is allowed
//       if (allowedPages.includes("*") || allowedPages.includes(to.path)) {
//         console.log(`✅ Allowed: ${embeddingWebsite} can access ${to.path}`);
//         next();
//       } else {
//         console.warn(`❌ Blocked: ${embeddingWebsite} cannot access ${to.path}`);
//         next("/main"); // Redirect blocked users to "/main"
//       }
//     } else {
//       console.warn(`❌ Unauthorized embedding: ${embeddingWebsite}`);
//       next("/main"); // Redirect unknown websites to "/main"
//     }
//   } else {
//     next(); // Allow normal navigation outside iframe
//   }
// });

export default router;
