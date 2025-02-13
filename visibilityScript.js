function fadeInObserver() {
  const elements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.75 }
  );

  elements.forEach((element) => observer.observe(element));
}

window.addEventListener('load', fadeInObserver);
