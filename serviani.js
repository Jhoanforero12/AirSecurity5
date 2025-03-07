document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          
        }
        else{
          entry.target.classList.remove("visible");
        }
      });
    });

    const target = document.querySelector('.section-header h2');
    observer.observe(target);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          
        }
        else{
          entry.target.classList.remove("visible");
        }
      });
    });

    const target = document.querySelector('.contenedor-accion h1');
    observer.observe(target);
  });