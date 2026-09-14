// MENU MOBILE
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
}

document.querySelectorAll(".nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    if (nav) {
      nav.classList.remove("open");
    }
  });
});


// FORMULAIRE WHATSAPP
const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    // Empêche l'envoi classique du formulaire
    e.preventDefault();

    // Récupérer les informations saisies
    const nom = contactForm.elements["Nom"].value.trim();
    const email = contactForm.elements["Email"].value.trim();
    const telephone = contactForm.elements["Telephone"].value.trim();
    const circuit = contactForm.elements["Circuit"].value.trim();
    const message = contactForm.elements["Message"].value.trim();

    // Vérification
    if (!nom || !email || !telephone || !circuit || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Numéro WhatsApp
    const numeroWhatsApp = "212669486946";

    // Message WhatsApp
    const texte =
      "Bonjour Merzouga Luxury Desert\n\n" +
      "Je souhaite réserver un séjour.\n\n" +
      "Nom : " + nom + "\n" +
      "Email : " + email + "\n" +
      "Téléphone : " + telephone + "\n" +
      "Circuit : " + circuit + "\n" +
      "Message : " + message;

    // Création du lien WhatsApp avec les données
    const whatsappURL =
      "https://wa.me/" +
      numeroWhatsApp +
      "?text=" +
      encodeURIComponent(texte);

    // Ouvrir WhatsApp
    window.location.href = whatsappURL;
  });
}
