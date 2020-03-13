var rotationImg = document.querySelector('.rotation__img');
var rotationInput = document.querySelector('.rotation__input');

function handleRotationImg () {
    var transform = rotationInput.value;
    rotationImg.style.transform = 'rotate('+ transform +'deg)';
} 
rotationInput.addEventListener('input', handleRotationImg);