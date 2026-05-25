/* =========================
   CUSTOM AOS SCRIPT
========================= */

document.addEventListener('DOMContentLoaded', () => {

  const aosElements =
  document.querySelectorAll('[data-aos]');

  const observer =
  new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.classList.add('aos-animate');

      }

    });

  }, {

    threshold: 0.2

  });

  aosElements.forEach(el => {

    observer.observe(el);

  });

});