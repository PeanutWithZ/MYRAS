// // ===== ACTIVE NAV SECTION HIGHLIGHT =====
// // Highlights the matching nav link as the user scrolls through sections

// const sections = document.querySelectorAll("section[id]");
// const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

// const sectionObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Reset all nav links
//         navAnchors.forEach((a) => (a.style.fontWeight = "500"));

//         // Highlight the active section's nav link
//         const active = document.querySelector(
//           `.nav-links a[href="#${entry.target.id}"]`,
//         );
//         if (active) active.style.fontWeight = "700";
//       }
//     });
//   },
//   { threshold: 0.4 },
// );

// sections.forEach((section) => sectionObserver.observe(section));
