let carImage = document.querySelector('.image-car');
let head1 = document.querySelector('.head1');
let head2 = document.querySelector('.head2');

window.addEventListener('scroll', () => {
    let scrl = window.scrollY;

    carImage.style.left = scrl * 2 + 'px';
});