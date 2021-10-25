import playList from './playList.js';

const audio = new Audio();
const PLAY = document.querySelector('.play');
const playNext = document.querySelector('.play-next');
const playPrev = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list')
let isPlay = false;
let playNum = 0;
// const for ADVANCE PLAYER
const volumeBar = document.querySelector('.volume-bar');
const volume = document.querySelector('.volume');
const progressBar = document.querySelector('.progress-bar');
const trackName = document.querySelector('.track-name');
let current = document.querySelector('.current-time');
const duration = document.querySelector('.duration');
const progress = document.querySelector('.progress-container');

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
  playItem[playNum].classList.add('item-active');         //выделение активного трека
  trackName.textContent = playItem[playNum].innerHTML;    //вывод названия трека над прогресс-баром
  duration.textContent = playList[playNum].duration;      //общая продолжительность трека
  if (!isPlay) {
    audio.play();
    isPlay = true;
    audio.currentTime;
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

// ADVANCE PLAYER

// VOLUME AND MUTE
volumeBar.addEventListener('change', handleRageUpdate);
volumeBar.addEventListener('mousemove', handleRageUpdate);
volumeBar.addEventListener('mousemove', handleMute);

function handleRageUpdate() {
  audio[this.name] = this.value;
}

function handleMute() {
  if (volumeBar.value === '0') {
    volume.classList.add('mute');
    volume.classList.remove('volume');
  } else {
    volume.classList.add('volume');
    volume.classList.remove('mute');
  }
}

volume.addEventListener('click', doMute);

function doMute() {
  if (audio.muted) {
    audio.muted = false;
    volume.classList.add('volume');
    volume.classList.remove('mute');
  } else {
    audio.muted = true;
    volume.classList.add('mute');
    volume.classList.remove('volume');
  }
}

// PROGRESS-BAR

audio.addEventListener('timeupdate', moveAudioProgress);
progressBar.addEventListener('click', rewindProgress);

function moveAudioProgress() {
  progressBar.value = (audio.currentTime / audio.duration) * 100;
  let minutes = Math.floor(audio.currentTime / 60);
  let seconds = Math.floor(audio.currentTime % 60);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  current.textContent = `${minutes}:${seconds}`;
  if (audio.currentTime === audio.duration) {
    playItem[playNum].classList.remove('item-active');
    playNum++;
    isPlay = false;
    playAudio();
  }
}

function rewindProgress(event) {
  audio.currentTime = (event.offsetX / progress.offsetWidth) * audio.duration;
}
