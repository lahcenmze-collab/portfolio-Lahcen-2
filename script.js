const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const contactForm = document.querySelector('.contact-form');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      alert('Veuillez remplir tous les champs du formulaire.');
      return;
    }

    alert(`Merci, ${name} ! Votre message a bien été préparé. Je vous contacterai bientôt.`);
    contactForm.reset();
  });
}
