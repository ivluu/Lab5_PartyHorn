var horn = document.getElementById('horn-sound');
var img = document.getElementById('sound-image');
var vol = document.getElementById('volume-number');
var slider = document.getElementById('volume-slider');

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