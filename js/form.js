// ===== CONTACT FORM HANDLER =====
// Sends to ishkandar@myras.org via FormSubmit.co (free, no backend required).
// First submission triggers a one-time activation email to verify the address.
function handleSubmit(e) {
  e.preventDefault();

  const btn = document.getElementById("submitBtn");
  const form = e.target;

  const inputs = form.querySelectorAll("input, select, textarea");
  const fields = {};
  const labels = ["firstName", "lastName", "email", "subject", "message"];
  inputs.forEach((el, i) => {
    fields[labels[i] || el.name || i] = el.value;
  });

  btn.textContent = "Sending…";
  btn.disabled = true;

  fetch("https://formsubmit.co/ajax/ishkandar@myras.org", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: (fields.firstName + " " + fields.lastName).trim(),
      email: fields.email,
      subject: fields.subject || "MYRAS Website Enquiry",
      message: fields.message,
      _subject: "New MYRAS Website Message: " + (fields.subject || "Enquiry"),
      _captcha: "false",
      _template: "table",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success === "true" || data.success === true) {
        btn.textContent = "✓ Message Sent! We'll be in touch.";
        btn.style.background = "#00a859";
        form.reset();
        setTimeout(() => {
          btn.textContent = "Send Message →";
          btn.style.background = "";
          btn.disabled = false;
        }, 4000);
      } else {
        throw new Error("Send failed");
      }
    })
    .catch(() => {
      btn.textContent = "⚠ Failed to send. Please try again.";
      btn.style.background = "#c0392b";
      btn.disabled = false;
      setTimeout(() => {
        btn.textContent = "Send Message →";
        btn.style.background = "";
      }, 4000);
    });
}
