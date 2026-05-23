// ===== NAVBAR SCROLL EFFECT =====
// Bootstrap's sticky-top handles positioning.
// This just adds a shadow class when the user scrolls down.

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () =>
  navbar.classList.toggle("scrolled", scrollY > 30)
);

// NOTE: Mobile nav toggle is now handled automatically by Bootstrap.
// The navbar-toggler button uses data-bs-toggle="collapse" — no JS needed.
