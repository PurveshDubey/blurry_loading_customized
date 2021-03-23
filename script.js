let bg = document.querySelector('.bg');
let loadText = document.querySelector('.loading-text');
let btn = document.querySelector('.btn');
let input = document.querySelector('.input');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    //blur(0px)
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

btn.addEventListener("click", function () {
    //console.log(input.value);
    let url = input.value;
    bg.style.backgroundImage = `url(${url})`;
    load = 0;
    console.log(load);
    int = setInterval(blurring, 30);
    console.log(load);
});