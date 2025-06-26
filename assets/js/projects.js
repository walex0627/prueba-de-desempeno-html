// JavaScript para animar las tarjetas de proyectos al hacer scroll

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todas las tarjetas de proyecto
    const projectCards = document.querySelectorAll('.project-card');

    // Opciones para IntersectionObserver
    const observerOptions = {
        root: null, // El viewport es el root
        rootMargin: '0px',
        threshold: 0.1 // El 10% de la tarjeta debe ser visible para activar la animación
    };

    // Callback que se ejecuta cuando la visibilidad de un elemento cambia
    const projectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si la tarjeta es visible
            if (entry.isIntersecting) {
                // Añade la clase 'animate-in' para activar la animación
                entry.target.classList.add('animate-in');
                // Deja de observar la tarjeta, ya no es necesario una vez animada
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa cada tarjeta de proyecto
    projectCards.forEach(card => {
        projectObserver.observe(card);
    });
});

document.getElementById('current-year').textContent = new Date().getFullYear();