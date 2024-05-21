const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseButton.addEventListener("click", toggleVideoPlayback);

function toggleVideoPlayback() {
  if(myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.play();
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

//--------------------------------------------------------------

//The following code is for the muting function of a button

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);
// myVideo.addEventListener("click", toggleSound);
function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteButton.style.backgroundColor = "#d5cea3";
    myVideo.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "#77745d";
    myVideo.muted = true;
  }
}

//--------------------------------------------------------------

//The following code is to show the progress of video playback

myVideo.addEventListener("timeupdate", updateProgressBar);

const progressBarFill = document.querySelector("#progress-bar-fill");
console.log(progressBarFill);

function updateProgressBar() {
    const progress = (myVideo.currentTime / myVideo.duration ) * 100;
    progressBarFill.style.width = progress + "%";
    console.log(progress);
}

//--------------------------------------------------------------

//The following code is to allow timestamps for the video

const step1Button = document.querySelector("#step-1-button");
console.log(step1Button);
step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
    myVideo.currentTime = 16.0;
}

const step2Button = document.querySelector("#step-2-button");
console.log(step2Button);
step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
    myVideo.currentTime = 43.0;
}

//--------------------------------------------------------------

//The following code is to allow full screen of the video

myVideo.addEventListener("dblclick", goFullScreen);

const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullScreen);

function goFullScreen() {
  if(!document.fullScreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}bb