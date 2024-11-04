const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal( ".home-img img" , {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".section-header h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal( ".section-header h1" , {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".section-header p", {
  ...scrollRevealOption,
  delay: 700,
});

ScrollReveal().reveal( ".section-header a" , {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".program-plan-img img", {
  ...scrollRevealOption,
  delay: 900,
});

ScrollReveal().reveal( ".section-header" , {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".section-description", {
  ...scrollRevealOption,
  delay: 1100,
});

ScrollReveal().reveal(".section-plan-card span", {
  ...scrollRevealOption,
  delay: 1200,
});

ScrollReveal().reveal(".section-plan-card h4", {
  ...scrollRevealOption,
  delay: 1300,
});

ScrollReveal().reveal(".section-plan-card p", {
  ...scrollRevealOption,
  delay: 1400,
});

/*training section code animation*/

ScrollReveal().reveal( ".training-header" , {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".training-description", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal( ".training-grid" , {
  ...scrollRevealOption,
  delay: 400,
});
