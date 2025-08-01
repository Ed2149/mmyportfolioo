// === Animate skill bars on view ===
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll(".skill-fill, .sub-skill-fill");
        fills.forEach(fill => {
          const level = getComputedStyle(fill).getPropertyValue("--skill-level") ||
                        getComputedStyle(fill).getPropertyValue("--sub-skill-level");
          fill.style.width = level;
        });
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".skill-block, .sub-skill-block").forEach(el => {
    observer.observe(el);
  });
});

// === Filter skills by role ===
function filterSkills(role) {
  document.querySelectorAll(".skill-category").forEach(cat => {
    cat.style.display = cat.dataset.role === role || role === "all" ? "block" : "none";
  });
}

// === Theme toggle prep ===
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// Highlight current page link in nav
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
