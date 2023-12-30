let sidebarBtn = document.querySelector('.header__sidebar');
let headerMenuNav = document.querySelector('.header__menu--nav');


sidebarBtn.addEventListener('click', () => {
    sidebarBtn.classList.toggle('active');
    headerMenuNav.classList.toggle('header__menu--sidebar');
})


let swiper = new Swiper(".images__swiper.swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});