'use strict';

images = [
    'https://st.depositphotos.com/1029473/2575/i/950/depositphotos_25753195-stock-photo-binary-language.jpg',
    'https://cdn-images.audioaddict.com/0/2/2/9/8/5/022985ae8434823b7ff1add36ec0dc10.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfu1AblwO3RakCp2xQu0Bh80hQHO_YrwgzULWHYES60rh6YmAAQKiJZq80EmvC32Kh8_M&usqp=CAU',
    'https://thumbs.dreamstime.com/z/%D0%B7%D0%B0%D1%86%D0%B5%D0%BF%D0%BB%D1%8F%D0%B5%D1%82-%D0%BD%D0%B0%D0%BA%D0%B0%D0%BB%D1%8F%D1%8F-techno-17344562.jpg'
];

const imageElement = document.querySelector('img');

const [btnPrev, btnNext] = document.querySelectorAll(
    '#sliderContainer > button'
);

btnPrev.addEventListener('click', btnPrevHendler);
btnNext.addEventListener('click', btnNextHendler);

function btnPrevHendler(e) {}

function btnNextHendler(e) {}

function loadImage() {}