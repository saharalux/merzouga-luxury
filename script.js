const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => {
    if (nav) nav.classList.remove("open");
  });
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    const nom = formData.get("nom") || "";
    const email = formData.get("email") || "";
    const circuit = formData.get("circuit") || "";
    const message = formData.get("message") || "";

    const numeroWhatsApp = "212669486946";

    const texte =
      "Bonjour Merzouga Luxury Desert 👋\n\n" +
      "Je souhaite réserver un séjour.\n\n" +
      "Nom : " + nom + "\n" +
      "Email : " + email + "\n" +
      "Circuit : " + circuit + "\n" +
      "Message : " + message;

    const whatsappURL =
      "https://wa.me/" +
      numeroWhatsApp +
      "?text=" +
      encodeURIComponent(texte);

    window.open(whatsappURL, "_blank");
  });
}
