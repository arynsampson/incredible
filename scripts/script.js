let burgerMenuWrapper = document.querySelector('.burger-menu-wrapper');

let modal = document.querySelector('.modal');
let navbar = document.querySelector('.navbar');
// let modalImage = document.getElementById('modal-img');
// let wrapperImg = document.querySelector('.modal-img-wrapper');
let navBoolean = false;

burgerMenuWrapper.addEventListener('click', function () {
    if (!navBoolean) {
        burgerMenuWrapper.style.background = '#cf404d';
        navbar.style.visibility = 'visible';
        navBoolean = true;
    } else {
        burgerMenuWrapper.style.background = 'none';
        navbar.style.visibility = 'hidden';
        navBoolean = false;
    }
})

// let images = document.querySelectorAll('.lightbox-img-wrapper');

// for(let i = 0; i <= 7; i++) {
//     images[i].addEventListener('click', function () {
//         modal.style.display = 'block';
//         wrapperImg.style.display = 'block';
//         modalImage.src = images[i].children[0].src;
//         console.log(modalImage.src)
//     })
// }

// modal.addEventListener('click', function () {
//     modal.style.display = 'none';
// })