//Navbar menu
const hamburger = document.querySelector(".menu");
const header = document.querySelector("header");

hamburger.addEventListener("click", function () {
  document.querySelector("header").classList.toggle("menu-click");
  document.querySelector("ul").classList.toggle("menu-click");
});

//Testimonials
const testimonials = [
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
  "Ut quis lectus fringilla, convallis tellus nec, venenatis tortor. Maecenas et convallis odio, sit amet vestibulum risus.",
  "Etiam ullamcorper ut ex ac bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
];

const cites = [
  "- Joshua Hughes",
  "- Jessica Murray",
  "- Bruce Young",
  "- Kevin Duncan",
];

var refNum = 0;

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const bq = document.querySelector("blockquote");
const cite = document.querySelector("cite");

leftArrow.addEventListener("click", function () {
  refNum -= 1;
  if (refNum < 0) {
    refNum = testimonials.length - 1;
  }
  bq.innerHTML = testimonials[refNum];
  cite.innerHTML = cites[refNum];
});

rightArrow.addEventListener("click", function () {
  refNum += 1;
  if (refNum > testimonials.length - 1) {
    refNum = 0;
  }
  bq.innerHTML = testimonials[refNum];
  cite.innerHTML = cites[refNum];
});
