/**
 * partials.js — loads HTML partial files into their placeholder slots.
 * Each <div data-partial="name"> gets replaced with partials/name.html
 */
document.addEventListener("DOMContentLoaded", function () {
  const slots = document.querySelectorAll("[data-partial]");

  slots.forEach(function (slot) {
    const name = slot.getAttribute("data-partial");
    fetch("partials/" + name + ".html")
      .then(function (response) {
        if (!response.ok) throw new Error("Failed to load: " + name);
        return response.text();
      })
      .then(function (html) {
        slot.outerHTML = html;
      })
      .catch(function (err) {
        console.error(err);
      });
  });
});
