function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function block() {
  let text = document.getElementById('loading-text');
  let block = document.getElementById('blocker');
  let btnReload = document.getElementById('btn-reload')
  let timeout = 100;
  let isPlaying = false;
  btnReload.addEventListener('click', playMusic);

  if (localStorage.getItem('reload')) {
  	text.innerHTML = 'Ok, thanks, should be working now';
  	await sleep(timeout);
  	block.remove();
  	return;
  }

  await sleep(timeout);
  text.innerHTML = 'Loading...';
  await sleep(timeout);
  text.innerHTML = "Just one more second and that's it";
  await sleep(timeout);
  text.innerHTML = "Almost done, too many people are visiting this page at the moment";
  await sleep(timeout);
  text.innerHTML = "One little png and that's all, I swear";
  await sleep(timeout);
  text.innerHTML = "Sorry, Mike, it was working yesterday";
  await sleep(timeout);
  text.innerHTML = "Google PageSpeed gave me 99";
  await sleep(timeout);
  text.innerHTML = "Somebody, click Reload!!!";
  btnReload.style.display = 'block';
}

async function checkLocalStorage({ text, timeout, block }) {
  if (localStorage.getItem('reload')) {
  	text.innerHTML = 'Ok, thanks, should be working now';
  	await sleep(timeout);
  	block.remove();
  	return;
  }
}

function playMusic() {
  console.log('trigger')
  localStorage.setItem('reload', 1);
  let audio = document.getElementById('audio');
  if (audio.paused) {
    audio.currentTime = 120;
    audio.play();
  }
}

block();