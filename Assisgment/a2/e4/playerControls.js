/* DEFINITIONS & SETUP */
let videoElement = document.getElementById("videoElement");
let playButton = document.getElementById("playButton");
let stopButton = document.getElementById("stopButton");
let muteButton = document.getElementById("muteButton");
// Added //
let fullScreenButton = document.getElementById("fullScreenButton");
let progressBar = document.getElementById("progressBar");

// next we remove the controls attribute - we do this with JS rather than just not including it in the HTML tag as a fallback
// this way if the JS doesn't load for whatever reason the player will have the default built in controls
videoElement.removeAttribute("controls");
// then if the default controls are removed we can show our custom controls - we want to do this via JS so that if the JS doesn't
// load then they won't show
document.getElementById("controlsWrapper").style.display = "flex";

// then we listen for the loadedmetadata event to fire which means we'll be able to access exactly how long the piece of media is
// i'm using an arrow function here that updates the progress element's max attribute with the duration of the media
// this way when it comes to setting the progress bars value the number matches a percentage of the total duration
videoElement.addEventListener('loadedmetadata', () => {
  progressBar.setAttribute('max', videoElement.duration);
});

// some mobile devices won't fire a loadedmetadata event so we need a fallback to make sure the attribute is set in these cases - we 
// can do this by also running a check whenever playback starts by using the playing event
videoElement.addEventListener("playing", () => {
  // we can then double check if the attribute has already been set - if not then set it here - ! inside of an if statement flips the 
  // truth of what we're checking for - so (progressBar.getAttribute('max')) would check if there's a value and 
  // (!progressBar.getAttribute('max')) checks if there is no value - ie false
  if (!progressBar.getAttribute('max')){
    progressBar.setAttribute('max', videoElement.duration);
  }
});

/* LOADING */
videoElement.addEventListener("waiting", () => {
  progressBar.classList.add("timeline-loading");
});
videoElement.addEventListener("canplay", () => {
  progressBar.classList.remove("timeline-loading");
});

/* MEDIA FINSIHED */
videoElement.addEventListener("ended", () => {
  playButton.style.backgroundImage = "url('./icons/play.svg')";
});

/* PLAY/PAUSE */
function playPause(){
  if (videoElement.paused || videoElement.ended) {
    videoElement.play();
    playButton.style.backgroundImage = "url('./icons/pause.svg')";
    // Added //
    document.getElementById("videoPlayOverlay").style.display = "none";
  } else {
    videoElement.pause();
    playButton.style.backgroundImage = "url('./icons/play.svg')";
    // Added //
    document.getElementById("videoPlayOverlay").style.display = "block";
  }
}

playButton.addEventListener('click', playPause);

videoElement.addEventListener('click', playPause);

/* TIMELINE */
videoElement.addEventListener('timeupdate', () => {
  progressBar.value = videoElement.currentTime;
});


function scrubToTime(e){
  // this statement has a lot going on so let's step through each part:
  // the first thing we want to work out is the distance between the left side of the progress bar and the mouses current position - if we were just building 
  // an interaction to work when the mouse is over the bar we could take this from the event, however as we want this to also work when we've held the mouse 
  // down and moved it somewhere else on the page we need to work this out manually
  // e.clientX is the cursors current distance from the left edge of the page
  // we then want to minus (progressBar.getBoundingClientRect().left + window.scrollX) from this distance to account for any gap between the left edge of the 
  // page and the start of the progress bar
  // videoElement.currentTime is the current position in the media file - we are setting it here to change the playback time
  // we then need to find a normalised 0-1 value based on how far along the bar the cursor is - the idea is that if i click the left most side it should return 0
  // and if i click the right most side it should return 1 - we get this value by dividing x by the total width of the progressBar
  // the value is then fed into our clampZeroOne() function - this is accounting for if our mouse is further left or further right than the ends of the progress bar
  // it works by essentially making the value always equal 1 if it is over 1 or always making it 0 if under 0 - this is commonly called a clamp, we're only allowing
  // a value to be in a certain range
  // finally we're using this clamped value to multiply with total duration of our video thus working out where we should scrub to
  let x = e.clientX - (progressBar.getBoundingClientRect().left + window.scrollX);
  videoElement.currentTime = clampZeroOne(x / progressBar.offsetWidth) * videoElement.duration;
}

// the click event fires only if the user presses the mouse down and then releases it on the same element. we can allow for a wider range of interactions by
// further breaking this down this into its discrete parts and listening to both the mousedown and mouseup events seperately

progressBar.addEventListener('mousedown', scrubToTime);
progressBar.addEventListener('mousedown', (e) => {
  // the behaviour here is to listen to the mousemove event (fired when the user moves their mouse) when the click is held down but then to stop listening to that 
  // event when the mouse click is released
  window.addEventListener('mousemove', scrubToTime);
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', scrubToTime);
  });
});

/* Mute/Unmute */
function muteUnmute(){
  if(videoElement.muted){
    videoElement.muted = false;
    muteButton.style.backgroundImage = "url('./icons/mute.svg')";
  } else {
    videoElement.muted = true;
    muteButton.style.backgroundImage = "url('./icons/unmute.svg')";
  }
}

muteButton.addEventListener("click", muteUnmute);

/* Added code */
/* Full screen */
function fullScreen(){
    videoElement.requestFullscreen();
  }

fullScreenButton.addEventListener("click", fullScreen);

/* Added Code */
/* Background colour */
/* The code for the backgound is now visible, just like the overlay  */
function backgroundColourChange(){
  document.getElementById("background").style.display = "block";
}

/* HELPER FUNCTIONS */
function clampZeroOne(input){
  return Math.min(Math.max(input, 0), 1);
}

function logEvent(e){
  console.log(e);
}

