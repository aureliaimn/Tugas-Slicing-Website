const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
  });
});

const form = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    statusText.textContent = "Semua kolom wajib diisi.";
    statusText.className = "form-status error";
    return;
  }

  if (!email.includes("@")) {
    statusText.textContent = "Format email tidak valid.";
    statusText.className = "form-status error";
    return;
  }

  statusText.textContent = "Pesan terkirim. Terima kasih, " + name + "!";
  statusText.className = "form-status success";
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
