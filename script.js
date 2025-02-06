let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = '-6rem';
  } else if (scrollTop < lastScrollTop) {
    header.style.top = '0';
  }
  lastScrollTop = scrollTop;
});


const serviceButton = document.querySelector('.btn');
if (serviceButton) {
  serviceButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#services').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

const contactButton = document.querySelector('.btn-circle');
if (contactButton) {
  contactButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    document.querySelector('#contacts').scrollIntoView({
      behavior: 'smooth'
    });
    
    contactButton.style.display = 'none';
  });
}

// hamburger menu
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  document.addEventListener('click', function (event) {
    const isClickInside = nav.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside) {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
});

