
// نظر ها 
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;

nextBtn.addEventListener('click', () => {
    if (index < 2) {
        index++;
    } else {
        index = 0;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = 2;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
});



// products list page 
// For Filters
