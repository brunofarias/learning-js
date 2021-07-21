document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
  let song = document.querySelector('#input').value;

  if (song !== '') {
    let songArray = song.toLowerCase().split('').filter(str => /\S/.test(str))
    playComposition(songArray);
  }
})


function playSound(keyPress) {
  let audioElement = document.querySelector(`#s_${keyPress}`);
  let keyElement = document.querySelector(`div[data-key="${keyPress}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add('active');

    setTimeout(() => {
      keyElement.classList.remove('active');
    }, 300)
  }
}

function playComposition(songArray) {
  let start = 0;

  songArray.map(str => {
    setTimeout(() => {
      playSound((`key${str}`))
    }, start);

    start += 250;    
  })
}
