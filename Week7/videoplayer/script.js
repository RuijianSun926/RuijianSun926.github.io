const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPausebuyyon = document.querySelector("#play-pause-button");
console.log(playPauseButon);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseButon);

playPauseButton.addEventListener("click", playPauseVideo);

function playPauseVideo()
{
    if(myVideo,paused || myVideo.ended){
        playPauseImg.scr="https://img.icons8.com/ios-glyphs/30/play--v1.png"
        myVideo.play();
    }else{
        playPauseImg.scr="https://img.icons8.com/ios-glyphs/30/play--v1.png"
        myVideo.play();
    }
    
}