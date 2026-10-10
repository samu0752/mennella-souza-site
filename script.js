const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const contactForm = document.querySelector("#contact-form");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const fields = new FormData(contactForm);
  const message = `Olá! Gostaria de entrar em contato com o escritório Mennella e Souza.\n\nNome: ${fields.get("nome")}\nE-mail: ${fields.get("email")}\nMensagem: ${fields.get("mensagem")}`;
  window.open(`https://wa.me/5511992290698?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
