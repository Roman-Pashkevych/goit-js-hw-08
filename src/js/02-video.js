
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


// const vimeoPlayer = document.querySelector('#vimeo-player');
// const player = new Player(vimeoPlayer);
// const LOCAL_STORAGE_KEY = "videoplayer-current-time"
// const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);


// player.setCurrentTime(currentTime);

// player.on('timeupdate', throttle(data => localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds), 1000));
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

if (localStorage.getItem(CURRENT_TIME_KEY)) {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY));
}

const onPlay = e => {
    player
        .getCurrentTime()
        .then(function (seconds) {
            localStorage.setItem(CURRENT_TIME_KEY, seconds);
        })
        .catch(function (error) {
            console.log(error.name);
            console.log(error.message);
        });
};

const throttled = throttle(onPlay, 1000);

player.on('timeupdate', throttled);