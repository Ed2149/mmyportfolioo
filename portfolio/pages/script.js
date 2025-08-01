document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

  // Fog opacity logic
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    hero.style.opacity = 1 - offset / 600;
  });
});
