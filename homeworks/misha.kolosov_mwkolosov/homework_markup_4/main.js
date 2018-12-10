function classToggle() {
    const navs = document.querySelectorAll('.nav');
    navs.forEach(nav => nav.classList.toggle('nav__mobile'));
}

document.querySelector('.button_toogle').addEventListener('click', classToggle);
