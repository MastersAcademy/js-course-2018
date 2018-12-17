
const buttonElement = document.querySelector('#nav-icon');
const element = document.querySelector('.navigation');

buttonElement.addEventListener('click', () => {
    console.log('click');
    console.log(element.classList);
    element.classList.toggle('open');
    buttonElement.classList.toggle('open');
});
