const images = document.getElementById('imgBox');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const width = document.querySelector('#imgBox img').offsetWidth;

const img = document.querySelectorAll('#imgBox img');

let index = 0;
let interval = setInterval(go, 2000);

function go(){
    index++;
    changeImage();
}

function changeImage(){
    if(index > img.length - 1){
        index = 0;
    }
    else if(index < 0){
        index = img.length - 1;
    }

    images.style.transform = `translateX(${-index * width}px)`;
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(go, 2000);
}
prevBtn.addEventListener('click', () => {
    index--;

    changeImage();
    resetInterval();
});
nextBtn.addEventListener('click', () => {
    index++;

    changeImage();
    resetInterval();
});