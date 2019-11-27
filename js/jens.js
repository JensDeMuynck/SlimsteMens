console.log("hello second world")
let htmlCollection = document.getElementsByClassName('ronde');
let rondes = [...htmlCollection];

rondes.forEach(function (ronde, index) {
    ronde.addEventListener('click', function () {
        rondes.forEach(function (ronde, index) {
            ronde.style.backgroundColor = '#fee8c3';
        });
        ronde.style.backgroundColor = '#ff8f45';
    });
});

let countdownButton = document.getElementById('count-down');
let slider = document.getElementById('slider');
countdownButton.addEventListener('click', function () {
    slider.classList.toggle('is-visible');
    countdownButton.classList.toggle('active')
});