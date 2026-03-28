const links = document.querySelectorAll(".sidebar a");
const pages = document.querySelectorAll(".page");

function showSection(id) {
  pages.forEach(page => page.classList.remove("active"));
  document.querySelector(id).classList.add("active");
}

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    showSection(targetId);

    links.forEach(l => l.classList.remove("active-link"));
    this.classList.add("active-link");
  });
});

// Default page
showSection("#home");