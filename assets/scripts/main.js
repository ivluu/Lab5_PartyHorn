var horn = document.getElementById('horn-sound');
var img = document.getElementById('sound-image');

var volImg = document.getElementById('volume-image');
var volNum = document.getElementById('volume-number');
var slider = document.getElementById('volume-slider');

volNum.addEventListener('input', updateVol);
slider.addEventListener('input', updateSlide);

// Volume and volume image setter
function updateVol(e) {
    horn.volume = e.target.value / 100;
    console.log(horn.volume);
    volNum.setAttribute('change', horn.volume);

    if (horn.volume > .66) {
        volImg.setAttribute('src','./assets/media/icons/volume-level-3.svg');
        slider.setAttribute('value', e.target.value);
        console.log('high');
    }
    if (horn.volume > .33 && horn.volume < .67) {
        volImg.setAttribute('src','./assets/media/icons/volume-level-2.svg');
        slider.setAttribute('value', e.target.value);
        console.log('med');
    }
    if (horn.volume > 0 && horn.volume < .34) {
        volImg.setAttribute('src','./assets/media/icons/volume-level-1.svg');
        slider.setAttribute('value', e.target.value);
        console.log('low');
    }
    if (horn.volume == 0) {
        volImg.setAttribute('src','./assets/media/icons/volume-level-0.svg');
        slider.setAttribute('value', e.target.value);
        console.log('mute');
    }
}

function updateSlide(e) {
    horn.volume = e.target.value / 100;
    console.log(horn.volume);
    volNum.setAttribute('change', horn.volume);

    if (horn.volume > .66) {
        volImg.setAttribute('src','./assets/media/icons/volume-level-3.svg');
        volNum.setAttribute('value', e.target.value);
        console.log('high');
    }
    if (horn.volume > .33 && horn.volume < .67) {
        volImg.setAttribute('src','./assets/media/icons/volume-level-2.svg');
        volNum.setAttribute('value', e.target.value);
        console.log('med');
    }
    if (horn.volume > 0 && horn.volume < .34) {
        volImg.setAttribute('src','./assets/media/icons/volume-level-1.svg');
        volNum.setAttribute('value', e.target.value);
        console.log('low');
    }
    if (horn.volume == 0) {
        volImg.setAttribute('src','./assets/media/icons/volume-level-0.svg');
        volNum.setAttribute('value', e.target.value);
        console.log('mute');
    }
}

document.getElementById('honk-btn').onclick = function() {
    playAudio();
    return false;
}

// Set air horn
document.getElementById('radio-air-horn').onclick = function() {
    document.getElementById('horn-sound').setAttribute('src','./assets/media/audio/air-horn.mp3');
    document.getElementById('sound-image').setAttribute('src','./assets/media/images/air-horn.svg');
}

// Set car horn
document.getElementById('radio-car-horn').onclick = function() {
    document.getElementById('horn-sound').setAttribute('src','./assets/media/audio/car-horn.mp3');
    document.getElementById('sound-image').setAttribute('src','./assets/media/images/car.svg');
}

// Set party horn
document.getElementById('radio-party-horn').onclick = function() {
    document.getElementById('horn-sound').setAttribute('src','./assets/media/audio/party-horn.mp3');
    document.getElementById('sound-image').setAttribute('src','./assets/media/images/party-horn.svg');
}

// Play horn
function playAudio(){
    horn.play();
};