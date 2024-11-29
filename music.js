const playButtons = document.querySelectorAll('.play-btn');
const nextButtons = document.querySelectorAll('.next-btn');
const prevButtons = document.querySelectorAll('.prev-btn');
const progressBars = document.querySelectorAll('.progress-bar');
let currentIndexes = [0, 0, 0];
let isPlaying = [false, false, false];
let intervalIds = [null, null, null];
let songs = [];

// Create Howl instances for each song
songs.push(new Howl({ src: ['song1.mp3'] }));
songs.push(new Howl({ src: ['song2.mp3'] }));
songs.push(new Howl({ src: ['song3.mp3'] }));

function togglePlay(index) {
  if (!isPlaying[index]) {
    songs[index].play();
    playButtons[index].innerHTML = '&#9208;'; // Pause symbol
    intervalIds[index] = setInterval(() => {
      progressBars[index].style.width = `${(songs[index].seek() / songs[index].duration()) * 100}%`;
    }, 100);
  } else {
    songs[index].pause();
    playButtons[index].innerHTML = '&#9654;'; // Play symbol
    clearInterval(intervalIds[index]);
  }
  isPlaying[index] = !isPlaying[index];
}

function nextSong(index) {
  togglePlay(index);
  songs[index].stop();
  currentIndexes[index] = 0;
  progressBars[index].style.width = '0%';
  index = (index + 1) % 3;
  togglePlay(index);
}

function prevSong(index) {
  togglePlay(index);
  songs[index].stop();
  currentIndexes[index] = 0;
  progressBars[index].style.width = '0%';
  index = (index - 1 + 3) % 3;
  togglePlay(index);
}

playButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => togglePlay(index));
});

nextButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => nextSong(index));
});

prevButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => prevSong(index));
});