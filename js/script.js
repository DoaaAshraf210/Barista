//-------------------header-----------------
let links = document.querySelectorAll(
  ".navbar .container>a , .navbar .container .collapse ul a"
);
links.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();

    document
      .getElementsByClassName(e.target.dataset.section)[0]
      .scrollIntoView({
        behavior: "smooth",
      });

    links.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");

    if (
      document
        .querySelector(".navbar .navbar-toggler")
        .getAttribute("aria-expanded") == "true"
    ) {
      document
        .querySelector(".navbar .navbar-toggler")
        .setAttribute("aria-expanded", "false");
      document
        .querySelector(".navbar .container .collapse")
        .classList.remove("show");
    }
  })
);
//-----------------------------

let nav = document.querySelector(".navbar .container");
window.onscroll = (e) => {
  if (window.scrollY >= 100) {
    nav.style.backgroundColor = "rgba(0 0 0 / 0.7)";
  } else {
    nav.style.backgroundColor = "rgba(0 0 0 / 0.35)";
  }
};
//---------------------------
let sections = Array.from(document.getElementsByTagName("section"));
window.onscroll = function () {
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 50) {
      links.forEach((a) => {
        a.classList.remove("active");
      });

      links.forEach((a) => {
        if (sec.className == a.dataset.section) {
          a.classList.add("active");
        }
      });
    }
  });
};
//-----------landing------------------------

document.addEventListener("DOMContentLoaded", function () {
  return new Swiper(".swiper-container", {
    direction: "horizontal", // or 'vertical'
    loop: true,
    centeredSlides: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    speed: 2000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
