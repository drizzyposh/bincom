// Menu Toggle
let menuHamburger = document.querySelector('#menu-hamburger');
let header = document.querySelector('header');

menuHamburger.onclick = () => {
    menuHamburger.classList.toggle('uil-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menuHamburger.classList.remove('uil-times');
    header.classList.remove('active');
}

// Typing animation
let typed = new typed('.typing', {
    strings: ['Graphics designer', 'Frontend developer'],
    typeSpeed:100,
    BackSpeed:60,
    loop: true
})

// Services popup
const modalViews = document.querySelectorAll('.services-modal');
const modalBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


//   Contact me
const inputs = document.querySelectorAll('.input');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}
 
function blurFunc() {
    let parent = this.parentNode;
    if(this.value === "") {
        parent.classList.remove('focus');
    }
}

inputs.forEach((input) => {
    inputs.addEventListener('focus', focusFunc)
    input.addEventListener('blur', blurFunc)
})