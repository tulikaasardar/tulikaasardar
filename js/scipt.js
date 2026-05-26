const heroCarousel = document.querySelector('#heroCarousel');

const carousel = new bootstrap.Carousel(heroCarousel, {

  interval: 4000,
  pause: false

});

/* =========================
   AUTO SHRINK NAVBAR
========================= */

window.addEventListener('scroll', () => {

  const navbar =
  document.getElementById('mainNavbar');

  if(window.scrollY > 50){

    navbar.style.padding = '6px 0';

  } else {

    navbar.style.padding = '14px 0';

  }

});

/* =========================
   STICKY NAVBAR
========================= */

const navbar =
document.getElementById('mainNavbar');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){

    navbar.classList.add('scrolled');

  } else {

    navbar.classList.remove('scrolled');

  }

});



/* =========================
   MOBILE MENU AUTO CLOSE
========================= */

const navLinks =
document.querySelectorAll('.nav-link');

const navbarCollapse =
document.querySelector('.navbar-collapse');

navLinks.forEach(link => {

  link.addEventListener('click', () => {

    if(navbarCollapse.classList.contains('show')){

      new bootstrap.Collapse(navbarCollapse).hide();

    }

  });

});


/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

  counter.innerText = '0';

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target');

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 30);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});


/* =========================
   TESTIMONIAL SLIDER
========================= */

const testimonialCarousel =
document.querySelector('#testimonialCarousel');

const testimonialSlider =
new bootstrap.Carousel(testimonialCarousel, {

  interval: 5000,
  pause: false

});


/* =========================
   SCROLL TO TOP
========================= */

const scrollTopBtn =
document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {

  if(window.scrollY > 300){

    scrollTopBtn.style.display = 'block';

  } else {

    scrollTopBtn.style.display = 'none';

  }

});

scrollTopBtn.addEventListener('click', () => {

  window.scrollTo({

    top: 0,
    behavior: 'smooth'

  });

});



/* =========================
   LOADER
========================= */

window.addEventListener('load', () => {

  const loader =
  document.getElementById('loader');

  loader.style.display = 'none';

});


/* =========================
   AOS INIT
========================= */

AOS.init({

  duration: 1200,
  once: true

});


/* =========================
   CONTACT FORM MESSAGE
========================= */


const form =
document.getElementById("contactForm");

const result =
document.getElementById("result");

const submitBtn = form.querySelector('button[type="submit"]');



form.addEventListener("submit", async function (e) {

  e.preventDefault();

  const formData = new FormData(form);
    formData.append("access_key", "6ba90db1-22f1-4084-9d3d-dc5bf18814f7");

  result.innerHTML =
  "Sending...";


    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});








const form =
document.getElementById('contactForm');

const message =
document.getElementById('result');

form.addEventListener('submit', async function(e){

  e.preventDefault();

  /* CHECK REQUIRED */

  const inputs =
  form.querySelectorAll('[required]');

  let valid = true;

  inputs.forEach(input => {

    if(input.value.trim() === ''){

      input.style.border =
      '2px solid #ff4d4d';

      valid = false;

    }

  });

  if(!valid){

    message.style.display = 'block';

    message.innerHTML =
    'Please fill all required fields';

    return;
  }

  /* SEND FORM */

  const formData =
  new FormData(form);

  try{

    await fetch(form.action, {

      method: 'POST',

      body: formData

    });

    message.style.display = 'block';

    message.innerHTML =
    'Message Sent Successfully 🌸 Thank You';

    form.reset();

  }

  catch(error){

    message.style.display = 'block';

    message.innerHTML =
    'Something went wrong. Please try again.';
  }

});



/* =========================
   FORM VALIDATION
========================= */

const requiredFields =
document.querySelectorAll('[required]');

requiredFields.forEach(field => {

  field.addEventListener('input', () => {

    if(field.value.trim() !== ''){

      field.style.border =
      '2px solid #1b4332';

    }

    else{

      field.style.border =
      '2px solid #ff4d4d';
    }

  });

});

