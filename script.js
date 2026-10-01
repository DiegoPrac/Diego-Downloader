// Tahun pada footer otomatis mengikuti tahun sekarang
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;


// Smooth scroll untuk menu navbar
const menuLinks = document.querySelectorAll('a[href^="#"]');

menuLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      event.preventDefault();

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
