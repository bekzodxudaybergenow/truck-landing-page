let sidebarBtn = document.querySelector('.header__sidebar');
let headerMenuNav = document.querySelector('.header__menu--nav');


sidebarBtn.addEventListener('click', () => {
    sidebarBtn.classList.toggle('active');
    headerMenuNav.classList.toggle('header__menu--sidebar');
})
