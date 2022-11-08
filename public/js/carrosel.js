let carrossel = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 7000)

function nextImage() {
    carrossel++;
    if (carrossel > 4) {
        carrossel = 1;
    }

    document.getElementById("radio" + carrossel).checked = true;
}