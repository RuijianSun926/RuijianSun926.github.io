document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('custom-video-player');
  var playPauseButton = document.getElementById('play-pause-button');
  var muteUnmuteButton = document.getElementById('mute-unmute-button');
  var decreaseVolumeButton = document.getElementById('decrease-volume-button');
  var increaseVolumeButton = document.getElementById('increase-volume-button');
  var fullscreenButton = document.getElementById('fullscreen-button');
  var replayButton = document.getElementById('replay-button');

  playPauseButton.addEventListener('click', function () {
      if (video.paused) {
          video.play();
          playPauseButton.innerHTML = '<img id="play-pause-img" src="https://img.icons8.com/ios-glyphs/30/pause--v1.png" alt="Pause Button" width="24" height="24">';
      } else {
          video.pause();
          playPauseButton.innerHTML = '<img id="play-pause-img" src="https://img.icons8.com/ios-glyphs/30/play--v2.png" alt="Play Button" width="24" height="24">';
      }
  });

  muteUnmuteButton.addEventListener('click', function () {
      if (video.muted) {
          video.muted = false;
          muteUnmuteButton.innerHTML = '<img id="mute-unmute-img" src="https://img.icons8.com/ios-glyphs/30/no-audio--v1.png" alt="Mute Button" width="24" height="24">';
      } else {
          video.muted = true;
          muteUnmuteButton.innerHTML = '<img id="mute-unmute-img" src="https://img.icons8.com/ios-glyphs/30/speaker.png" alt="Unmute Button" width="24" height="24">';
      }
  });

  decreaseVolumeButton.addEventListener('click', function () {
      video.volume -= 0.1;
  });

  increaseVolumeButton.addEventListener('click', function () {
      video.volume += 0.1;
  });

  fullscreenButton.addEventListener('click', function () {
      if (video.requestFullscreen) {
          video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { 
          video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
      }
  });

  replayButton.addEventListener('click', function () {
      video.currentTime = 0; 
      video.play(); 
  });

});
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('custom-video-player');
  var rewindButton = document.getElementById('rewind-button');
  var forwardButton = document.getElementById('forward-button');

  rewindButton.addEventListener('click', function () {
      video.currentTime = 30; 
  });

  forwardButton.addEventListener('click', function () {
      video.currentTime = 223; 
  });
});
const video = document.getElementById('custom-video-player');
const progressBarFill = document.getElementById('progress-bar-fill');

video.addEventListener('timeupdate', () => {
const percentage = (video.currentTime / video.duration) * 100;
progressBarFill.style.width = percentage + '%';
});