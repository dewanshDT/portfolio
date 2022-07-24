const PAGE_DELAY = 0.5;

// loading animation

window.addEventListener('load', () => {
  const loadingPage = document.querySelector('.loading-page');
  loadingPage.style.opacity = 0;
  loadingPage.style.display = 'none';

  // page animaitons
  gsap.from(".header", { duration: 1, opacity: 0, delay: PAGE_DELAY});

  gsap.from(".links", { duration: 0.5, y: "-10", delay: PAGE_DELAY });
  gsap.from(".links a", { duration: 0.1, rotateX: "50deg", delay: PAGE_DELAY });
  gsap.from(".links", { duration: 0.5, opacity: 0, delay: PAGE_DELAY });

  gsap.from(".intro img", {duration: 1, y: "-100", delay: PAGE_DELAY, ease: "bounce"});
  gsap.from(".intro img", {duration: 0.5, opacity: 0, delay: PAGE_DELAY, ease: "bounce"});
  gsap.from(".intro img", { duration: 1, rotateZ: "-30deg", delay: 1 });

  gsap.from(".intro h1", { duration: 1, x: "-50", delay: PAGE_DELAY });
  gsap.from(".intro h1", { duration: 0.5, opacity: 0, delay: PAGE_DELAY });

  gsap.from(".intro h3", { duration: 1, x: "50", delay: PAGE_DELAY });
  gsap.from(".intro h3", { duration: 0.5, opacity: 0, delay: PAGE_DELAY });

  gsap.from(".intro p", { duration: 1, x: "-50", delay: PAGE_DELAY });
  gsap.from(".intro p", { duration: 0.5, opacity: 0, delay: PAGE_DELAY });

  // about page
  gsap.from(".about-page", { duration: 2, opacity: 0, y: "-50", delay: PAGE_DELAY, ease: "expo"});
  gsap.from(".codepen-container", { duration: 2, opacity: 0, y: "-50", delay: PAGE_DELAY, ease: "expo"});
})

// TweenLite.defaultEase = Linear.easeNone;
const controller = new ScrollMagic.Controller();
var contentTL = new gsap.timeline();
var finalTL = new gsap.timeline();
var aboutTL = new gsap.timeline();
var statsTL = new gsap.timeline();
var madeWithTL = new gsap.timeline();

aboutTL
  .from(".about h1", { x: "-50", duration: 1 })
  .from(".about h1", { opacity: 0, duration: 0.5 }, "<0.1")
  .from(".about p", { x: "50", duration: 1 }, "0.1")
  .from(".about p", { opacity: 0, duration: 0.5 }, "<0.2")
  .delay(3)
  .to(".about", { opacity: 0, duration: 0.3 });

statsTL
  .from(".stats", { y: "90", duration: 1 })
  .from(".stats", { opacity: 0, duration: 0.5 }, "<0.1")
  .delay(3)
  .to(".stats", { opacity: 0, duration: 0.3 });

madeWithTL
  .from(".made-with .comment", { x: "-50", duration: 1 })
  .from(".made-with .comment", { opacity: 0, duration: 0.5 }, "<0.1")
  .from(".made-with div", { x: "50", duration: 1 }, "<0.1")
  .from(".made-with div", { opacity: 0, duration: 0.5 }, "<0.2")
  .delay(3)
  .to(".made-with", { opacity: 0, duration: 0.3 });

contentTL
  .from(".content h1", { x: "-50", duration: 1 })
  .from(".content h1", { opacity: 0, duration: 0.5 }, "<0.1")
  .from(".content p", { x: "50", duration: 1 }, "<0.1")
  .from(".content p", { opacity: 0, duration: 0.5 }, "<0.2")
  .delay(3)
  .to(".content", { opacity: 0, duration: 0.3 });

finalTL
  .from(".final h1", { x: "-50", duration: 1 })
  .from(".final h1", { opacity: 0, duration: 0.5 }, "<0.1")
  .from(".final p", { x: "50", duration: 1 }, "<0.1")
  .from(".final p", { opacity: 0, duration: 0.5 }, "<0.2");

var aboutScene = new ScrollMagic.Scene({
  triggerElement: ".about",
  duration: "400%",
  triggerHook: 0.1,
})
  .setPin(".about")
  .setTween(aboutTL)
  .addTo(controller);

var statsScene = new ScrollMagic.Scene({
  triggerElement: ".stats",
  duration: "400%",
  triggerHook: 0.1,
})
  .setPin(".stats")
  .setTween(statsTL)
  .addTo(controller);

var contentScene = new ScrollMagic.Scene({
  triggerElement: ".content",
  duration: "400%",
  triggerHook: 0.1,
})
  .setPin(".content")
  .setTween(contentTL)
  .addTo(controller);

var finalScene = new ScrollMagic.Scene({
  triggerElement: ".final",
  duration: "300%",
  triggerHook: 0.1,
})
  .setPin(".final")
  .setTween(finalTL)
  .addTo(controller);

var madeWithScene = new ScrollMagic.Scene({
  triggerElement: ".made-with",
  duration: "400%",
  triggerHook: 0.1,
})
  .setPin(".made-with")
  .setTween(madeWithTL)
  .addTo(controller);

// responsive navbar
const menueBtn = document.querySelector(".hamburgur");
const nav = document.querySelector('nav');

menueBtn.addEventListener("click", () => {
  nav.classList.toggle("visibal");
  menueBtn.classList.toggle("on");
});