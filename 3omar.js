//typing text code
const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weight Lifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });

//animation to item

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".home-img img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".home-content h3", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".home-content h1", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".home-content p", {
  ...scrollRevealOption,
  delay: 1700,
});

ScrollReveal().reveal(".home-content a", {
  ...scrollRevealOption,
  delay: 1800,
});

/*this code to animated to service section*/

ScrollReveal().reveal(".service-card span", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".service-card h4", {
  ...scrollRevealOption,
  delay: 1200,
});


ScrollReveal().reveal(".service-card p", {
  ...scrollRevealOption,
  delay: 1300,
});

/*food code animations*/

ScrollReveal().reveal( ".Foodproject h2" , {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".Foodproject .food", {
  ...scrollRevealOption,
  delay: 1000,
});

/*this code for workout content animations*/

ScrollReveal().reveal( ".workout h2" , {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".workout .row", {
  ...scrollRevealOption,
  delay: 1000,
});


/* this codes for about animations */

ScrollReveal().reveal( ".title h1 " , {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".title p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal( ".title a" , {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".company h2", {
  ...scrollRevealOption,
  delay: 700,
});

ScrollReveal().reveal( ".company li" , {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".about-us h2", {
  ...scrollRevealOption,
  delay: 900,
});

ScrollReveal().reveal( ".about-us li" , {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".contact h2", {
  ...scrollRevealOption,
  delay: 1100,
});

ScrollReveal().reveal(".contact li", {
  ...scrollRevealOption,
  delay: 1200,
});