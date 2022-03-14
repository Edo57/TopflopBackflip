const square = document.getElementById('square');
let angle = 0;

function rotate () {
    angle = (angle + 5)%360
    square.style.transform = 'rotate(' + angle + 'deg)'
    window.requestAnimationFrame(rotate)
}