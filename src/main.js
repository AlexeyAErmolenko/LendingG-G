const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");
const buttons = document.querySelectorAll("[data-popup]");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Будь ласка, заповніть усі поля.");
    e.preventDefault();
  } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    alert("Введіть коректний email.");
    e.preventDefault();
  }
});
