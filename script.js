document.addEventListener('DOMContentLoaded', () => {

  // --- SECCIÓN DE CAMBIO DE TEMA ELIMINADA ---
  // Ya no se necesita el botón ni la lógica para cambiar entre claro/oscuro.

  // --- SMOOTH SCROLL ---
  // (El código para smooth scroll sigue siendo útil para el offset)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          // Verifica que el href sea más que solo '#' y que el elemento exista
          if (href.length > 1 && document.querySelector(href)) {
               e.preventDefault();
               const targetElement = document.querySelector(href);
               // Cálculo del offset (ajustar si tienes un header fijo de altura variable)
               // Puedes poner 0 si no necesitas offset.
               const offsetValue = 80; // Ejemplo: 80px de espacio arriba
               const elementPosition = targetElement.getBoundingClientRect().top;
               const offsetPosition = elementPosition + window.pageYOffset - offsetValue;

              window.scrollTo({
                  top: offsetPosition, // Usar la posición calculada con offset
                  behavior: 'smooth' // Mantiene el desplazamiento suave
              });
          }
      });
  });

  // --- ANIMATE ON SCROLL ---
  // (Sin cambios en esta lógica)
  const observerOptions = {
      root: null, // Relativo al viewport
      rootMargin: '0px',
      threshold: 0.1 // El elemento debe ser visible al menos en un 10%
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          // Si el elemento está entrando en la vista
          if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Añade la clase para activar la animación CSS
              observer.unobserve(entry.target); // Deja de observar este elemento una vez animado
          }
      });
  };

  // Crea el observador
  const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

  // Selecciona todos los elementos que deben animarse y obsérvalos
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
      scrollObserver.observe(el);
  });

  // --- ACTUALIZAR AÑO EN FOOTER ---
  // (Sin cambios en esta lógica)
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
  }

  // Mensaje de inicialización actualizado
  console.log("Landing page script initialized (Dark mode default).");
});
