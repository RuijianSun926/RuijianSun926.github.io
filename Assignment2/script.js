document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('custom-video-player');
  var playPauseButton = document.getElementById('play-pause-button');
  var muteUnmuteButton = document.getElementById('mute-unmute-button');
  var decreaseVolumeButton = document.getElementById('decrease-volume-button');
  var increaseVolumeButton = document.getElementById('increase-volume-button');
  var fullscreenButton = document.getElementById('fullscreen-button');
  var replayButton = document.getElementById('replay-button');
  var rewindButton = document.getElementById('rewind-button');
  var forwardButton = document.getElementById('forward-button');
  var progressBarFill = document.getElementById('progress-bar-fill');

//   Toggle video play/pause, and update the button icon
  playPauseButton.addEventListener('click', function () {
      if (video.paused) {
          video.play();
          playPauseButton.innerHTML = '<img id="play-pause-img" src="https://img.icons8.com/ios-glyphs/30/pause--v1.png" alt="Pause Button" width="24" height="24">';
      } else {
          video.pause();
          playPauseButton.innerHTML = '<img id="play-pause-img" src="https://img.icons8.com/ios-glyphs/30/play--v2.png" alt="Play Button" width="24" height="24">';
      }
  });
//   Toggle video mute/unmute, and update the button icon
  muteUnmuteButton.addEventListener('click', function () {
      if (video.muted) {
          video.muted = false;
          muteUnmuteButton.innerHTML = '<img id="mute-unmute-img" src="https://img.icons8.com/ios-glyphs/30/no-audio--v1.png" alt="Mute Button" width="24" height="24">';
      } else {
          video.muted = true;
          muteUnmuteButton.innerHTML = '<img id="mute-unmute-img" src="https://img.icons8.com/ios-glyphs/30/speaker.png" alt="Unmute Button" width="24" height="24">';
      }
  });
// Decrease/Increase the video volume
  decreaseVolumeButton.addEventListener('click', function () {
      video.volume -= 0.1;
  });

  increaseVolumeButton.addEventListener('click', function () {
      video.volume += 0.1;
  });
//   Display the video in fullscreen mode, and added a double-click video fullscreen feature
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
// The replay button resets the video to the beginning, corresponding to the material preparation stage
  replayButton.addEventListener('click', function () {
      video.currentTime = 0; 
      video.play(); 
  });
// The rewind button jumps the video to 30 seconds, corresponding to the start of the making stage
  rewindButton.addEventListener('click', function () {
      video.currentTime = 30; 
  });
// The fast forward button jumps the video to three minutes and 43 seconds, corresponding to the introduction of considerations after the completion of the making
  forwardButton.addEventListener('click', function () {
      video.currentTime = 223; 
  });
// Update the progress bar as the video plays
  video.addEventListener('timeupdate', () => {
      const percentage = (video.currentTime / video.duration) * 100;
      progressBarFill.style.width = percentage + '%';
  });
});
