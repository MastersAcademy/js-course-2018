const myBurger = document.getElementById('myBurger');
const myBurgerNav = document.getElementById('myBurgerNav');

function myNavBurgerToggle() {
    myBurger.children[0].classList.toggle('active');
    myBurgerNav.classList.toggle('active');
}

myBurger.addEventListener('click', myNavBurgerToggle);
