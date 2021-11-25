
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);
const LOCAL_STORAGE_KEY = "videoplayer-current-time"
const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);


player.setCurrentTime(currentTime);

player.on('timeupdate', throttle(data => localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds), 1000));