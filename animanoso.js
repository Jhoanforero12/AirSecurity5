
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

const target = document.querySelector('.section-title h2');
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
    
    const target = document.querySelector('.cta-content h2');
    observer.observe(target);
    });