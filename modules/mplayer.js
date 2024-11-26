//* https://developers.google.com/youtube/iframe_api_reference#Events 

let playlist = [
    "PnYE9FdzL1U",
];

let nextSong = 0;
let player = null;

// This is called automatically by the YouTube API after it has loaded
function onYouTubeIframeAPIReady() {
    play();
}

// Called after API loads and when a radio button is pressed
function play() {

    if (player == null) {
        player = new YT.Player('video_player', {

            autoplay: '1',
            videoId: playlist[nextSong],
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
    else {
        player.cueVideoById(playlist[nextSong]);
    }
    nextSong = (nextSong + 1) % playlist.length;

    return false;
}

// Called when the API signals a video is ready
var onPlayerReady = function (event) {
    event.target.playVideo();
};

// Called when the API signals the state of a video has changed
var onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.CUED) {
        event.target.playVideo();
    }

    else if (event.data == YT.PlayerState.ENDED) {
        play();
    }
};