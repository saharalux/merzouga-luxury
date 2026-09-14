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
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const nom = contactForm.querySelector('[name="Nom"]').value;
    const email = contactForm.querySelector('[name="Email"]').value;
    const telephone = contactForm.querySelector('[name="Telephone"]').value;
    const circuit = contactForm.querySelector('[name="Circuit"]').value;
    const message = contactForm.querySelector('[name="Message"]').value;

    const texte =
      "Bonjour Merzouga Luxury Desert 👋\n\n" +
      "Je souhaite réserver un séjour.\n\n" +
      "Nom : " + nom + "\n" +
      "Email : " + email + "\n" +
      "Téléphone : " + telephone + "\n" +
      "Circuit : " + circuit + "\n" +
      "Message : " + message;

    const whatsappURL =
      "https://wa.me/212669486946?text=" +
      encodeURIComponent(texte);

    window.open(whatsappURL, "_blank");
  });
}
