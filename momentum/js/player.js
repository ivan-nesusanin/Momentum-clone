import playList from './playList.js';

const audio = new Audio();
const PLAY = document.querySelector('.play');
const playNext = document.querySelector('.play-next');
const playPrev = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list')
let isPlay = false;
let playNum = 0;

// создаем плейлист
for (let i = 0; i < playList.length; i++) {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = playList[i].title;
  playListContainer.append(li);
}

const playItem = document.querySelectorAll('.play-item');

// кнопка play
PLAY.addEventListener('click', playAudio);
function playAudio() {
  audio.src = playList[playNum].src;
  playItem[playNum].classList.add('item-active');
  if (!isPlay) {
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
  togglePlay()
}

// изменение кнопки play
function togglePlay() {
  if (!isPlay) {
    PLAY.classList.add('play');
    PLAY.classList.remove('pause');
  } else {
    PLAY.classList.add('pause');
    PLAY.classList.remove('play');
  }
}

playNext.addEventListener('click', nextTrack);
playPrev.addEventListener('click', prevTrack);

function nextTrack() {
  playItem[playNum].classList.remove('item-active');
  if (playNum < playList.length - 1) {
    playNum++;
  } else {
    playNum = 0;
  }
  isPlay = false;
  playAudio();
}

function prevTrack() {
  playItem[playNum].classList.remove('item-active');
  if (playNum === 0) {
    playNum = playList.length - 1;
  } else {
    playNum--;
  }
  isPlay = false;
  playAudio();
}