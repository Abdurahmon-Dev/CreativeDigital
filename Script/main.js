let swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener('load', () => {
  document.getElementById('burger').addEventListener('click',() => {
    document.getElementById('media-menu').classList.toggle('active-burger');
  })
})
