document.addEventListener('DOMContentLoaded', () => {
    // SMOOTH SCROLL para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.length > 1 && document.querySelector(href)) {
          e.preventDefault();
          const offset = 70;
          const element = document.querySelector(href);
          const position = element.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: position, behavior: 'smooth' });
        }
      });
    });
  
    // ANIMACIÓN AL HACER SCROLL
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);
  
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      scrollObserver.observe(el);
    });
  
    // AÑO ACTUAL EN FOOTER
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }
  
    console.log("Landing page script loaded correctamente.");
  });
  
