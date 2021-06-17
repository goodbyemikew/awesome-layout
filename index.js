var timeout;
var delay = 5000;
var contentContainer = document.querySelector('.body');
var text = document.getElementById('loading-text');
var blockElement = document.getElementById('blocker');
var btnReload = document.getElementById('btn-reload');

function sleep(ms) {
  timeout = new Promise((resolve) => setTimeout(resolve, ms));
  return timeout;
}

async function block() {
  var isSecondLoad = localStorage.getItem('isSecondLoad');
  checkLocalStorage();

  if (!isSecondLoad) {
    await sleep(delay);
    text.innerHTML = 'Loading...';
    await sleep(delay);
    text.innerHTML = "Just one more second and that's it";
    await sleep(delay);
    text.innerHTML = 'Almost done, too many people are visiting this page at the moment';
    await sleep(delay);
    text.innerHTML = "One little png and that's all, I swear";
    await sleep(delay);
    text.innerHTML = 'Sorry, Mike, it was working yesterday';
    await sleep(delay);
    text.innerHTML = 'Google PageSpeed gave me 99';
    await sleep(delay);
    text.innerHTML = 'Somebody, click Reload!!!';
    btnReload.style.display = 'block';
  }
}

async function checkLocalStorage() {
  var reloadStorage = localStorage.getItem('reload');
  var isSecondLoad = localStorage.getItem('isSecondLoad');

  if (reloadStorage) {
    if (isSecondLoad) {
      clearTimeout(timeout);
      text.innerHTML = `Ooops something went wrong.<br>
        These devs can't do one thing right!<br>
        Click Reload now!`;
      btnReload.style.display = 'block';
      return;
    }
    return { reloadStorage, isSecondLoad };
  }
}

function randomChatBoxPosition() {
  var boxes = document.getElementsByClassName('chat-box');
  var container = document.getElementById('chat-boxes');
  var containerWidth = Math.round(container.getBoundingClientRect().width);
  var containterHeight = Math.round(container.getBoundingClientRect().height);

  for (var i = 0; i < boxes.length; i++) {
    var currentBox = boxes[i];
    var boxWidth = Math.round(currentBox.getBoundingClientRect().width);
    var boxHeight = Math.round(currentBox.getBoundingClientRect().height);

    randomTop = getRandomNumber(0, containterHeight - boxHeight);
    randomLeft = getRandomNumber(0, containerWidth - boxWidth);

    currentBox.style.top = Math.round(randomTop) + 'px';
    currentBox.style.left = Math.round(randomLeft) + 'px';
  }
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function playMusic() {
  var audio = document.getElementById('audio');
  var source = document.querySelector('audio source');

  source.src = './assets/Rick_Astley_Never_Gonna_Give_You_Up.mp3';
  audio.load();
  audio.play();
}

function showPage() {
  var password = prompt('Input ticket number to enter FE war area');

  if (password.toLowerCase() === 'gbm-618') {
    localStorage.setItem('reload', 1);
    localStorage.setItem('isSecondLoad', 1);

    blockElement.remove();
    contentContainer.style.display = 'block';
    playMusic();
    randomChatBoxPosition();
  }
}

block();
btnReload.addEventListener('click', showPage);
