document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    this.reset();
});