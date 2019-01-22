// mobile menu
// eslint-disable-next-line no-unused-vars
function openNav() {
    document.getElementById('nav').style.width = '100%';
    document.getElementById('open-btn-nav').style.opacity = '0';
}

// eslint-disable-next-line no-unused-vars
function closeNav() {
    document.getElementById('nav').style.width = '0%';
    document.getElementById('open-btn-nav').style.opacity = '1';
}

openNav();
closeNav();
