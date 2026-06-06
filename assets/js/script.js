// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.

window.addEventListener('scroll', function() {
    const header = document.getElementById('site-header');
    
    // Se scrolliamo più di 100px
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//Modale
const openModalBtn = document.querySelector('.btn-hero');
const modalOverlay = document.getElementById('quote-modal');
const closeModalBtn = document.querySelector('.close-modal');

openModalBtn.addEventListener('click', function() {
  modalOverlay.style.display = 'flex'; 
});

closeModalBtn.addEventListener('click', function() {
  modalOverlay.style.display = 'none'; 
});

modalOverlay.addEventListener('click', function(event) {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});

// Tema Scuro / Chiaro
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Tema Chiaro';
    } else {
        themeToggle.textContent = 'Tema Scuro';
    }
});