const myBurger = document.getElementById('myBurger');
const myBurgerNav = document.getElementById('myBurgerNav');

function myNavBurgerToggle() {
    myBurger.children[0].classList.toggle('burger__line--active');
    myBurgerNav.classList.toggle('dreams-navigation');
    myBurgerNav.classList.toggle('dreams-navigation--active');
}

myBurger.addEventListener('click', myNavBurgerToggle);
