/* main.js — Shih-Min Yang Academic Site */

/* ================================================
   News Photo Slideshow
   ================================================ */
(function () {
  const images = [
    "images/news/24-dec-japan.jpg",
    "images/news/24-dec-utokyo.jpg",
    "images/news/25-jan-lab.jpg",
    "images/news/25-jun-darko1.jpg",
    "images/news/25-jun-darko2.jpg",
    "images/news/25-jun-darko-final.jpg",
    "images/news/24-jan-deom_abb.jpg",
  ];

  const img  = document.getElementById("news-photo");
  const link = document.getElementById("news-photo-link");
  if (!img || !link) return;

  const FADE = 500;   // ms
  const WAIT = 3000;  // ms

  let idx   = 0;
  let timer = null;

  function showImage(i) {
    img.style.opacity = 0;
    setTimeout(() => {
      img.src   = images[i];
      link.href = images[i];
      img.style.opacity = 1;
    }, FADE);
  }

  function next() {
    idx = (idx + 1) % images.length;
    showImage(idx);
  }

  function startTimer() {
    if (!timer) timer = setInterval(next, WAIT);
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  // Boot: show first image
  img.style.opacity = 0;
  setTimeout(() => {
    img.src   = images[0];
    link.href = images[0];
    img.style.opacity = 1;
  }, 50);

  startTimer();

  img.addEventListener("mouseenter", stopTimer);
  img.addEventListener("mouseleave", startTimer);
})();