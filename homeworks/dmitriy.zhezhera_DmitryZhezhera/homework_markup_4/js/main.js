const myBurger = document.getElementById('myBurger');
const myBurgerNav = document.getElementById('myBurgerNav');

function myNavBurgerToggle() {
    myBurger.children[0].classList.toggle('js-burger__line-active');
    myBurgerNav.classList.toggle('js-dreams-navigation');
    myBurgerNav.classList.toggle('js-dreams-navigation-active');
}

myBurger.addEventListener('click', myNavBurgerToggle);
