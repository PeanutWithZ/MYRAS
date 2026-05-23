// ===== CONTACT FORM HANDLER =====
function handleSubmit(e) {
  e.preventDefault();

  // Updated: form now uses id="submitBtn" (Bootstrap version)
  const btn = document.getElementById("submitBtn");
  btn.textContent = "Sending…";
  btn.disabled = true;

  // REPLACE: wire this up to your actual backend, e.g.:
  // - FormSubmit  → add action="https://formsubmit.co/info@myras.org" to <form>
  // - Netlify Forms → add netlify attribute to <form>
  // - EmailJS     → emailjs.sendForm(serviceId, templateId, e.target)
  // - Your own API → fetch('/api/contact', { method: 'POST', body: new FormData(e.target) })

  setTimeout(() => {
    btn.textContent = "✓ Message Sent! We'll be in touch.";
    btn.style.background = "#00a859";
    e.target.reset();

    setTimeout(() => {
      btn.textContent = "Send Message →";
      btn.style.background = "";
      btn.disabled = false;
    }, 4000);
  }, 1200);
}
