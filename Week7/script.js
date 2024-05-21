const airportAudio = document.querySelector("#airport-audio")
console.log(airportAudio);

const playBUtton = document.querySelector("#play-button");
console.log(playBUtton)

playBUtton.addEventListener("click",palyAirportAudio)

function palyAirportAudio() {
    airportAudio.play();
}


const pauseBUtton = document.querySelector("#pause-button");
console.log(pauseBUtton)

pauseBUtton.addEventListener("click",pauseAirportAudio)

function pauseAirportAudio() {
    airportAudio.pause();
}

const popButton = document.querySelector('#pop-button');
console.log(popButton)

const popSound = document.querySelector('#pop-sound');

popButton.addEventListener("click", popIt);

function popIt(){
    popSound.play();
}