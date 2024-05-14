const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseButton.addEventListener("click", toggleVideoPlayback);

function toggleVideoPlayback() {
  if(myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.play();
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  }
}


//--------------------------------------------------------------
// the flowing code allows me to muute or unmute video on click of a button

const muteumnumtebutton = document.querySelector("#mute-umnumte-button");
console.log(playPauseImg);

muteumnumtebutton,addEventListener("click", toggleSound);

function toggleSound() {
    if (myVideo.muted) {
        muvideo.muted = false;
    } else {
        muteumnumtebutton,style.backgroundColor = "red"
        myVideo.muted = true
    }
} ``