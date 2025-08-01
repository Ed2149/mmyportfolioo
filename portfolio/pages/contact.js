document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const responseText = document.getElementById("response");

  // Label animation logic stays
  document.querySelectorAll(".form-group input, .form-group textarea").forEach(field => {
    field.addEventListener("blur", () => {
      if (field.value.trim() !== "") {
        field.classList.add("filled");
      } else {
        field.classList.remove("filled");
      }
    });
  });

  // Form submission logic updated for Netlify Forms
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      responseText.textContent = "✅ Message sent successfully!";
      responseText.style.color = "green";
      form.reset();
    } catch (error) {
      responseText.textContent = "❌ Something went wrong. Please try again.";
      responseText.style.color = "red";
    }
  });

  // Nav link highlighting
  document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});
