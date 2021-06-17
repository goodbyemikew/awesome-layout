var timeout;
var delay = 5000;
var contentContainer = document.querySelector('.body');
var text = document.getElementById('loading-text');
var blockElement = document.getElementById('blocker');
var btnReload = document.getElementById('btn-reload');
var acceptCookieElement = document.querySelector('.accept-cookie');
var btnAcceptCookie = document.querySelector('.accept-cookie button');

var messages = [
  {
    name: "The soup guy",
    text: "All the best wishes to your next chapter. We'll be catching up over some TKO-flavored beers.",
  },
  {
    name: "The guy who's taller than you",
    text: "It took almost 2 years for you to wear me down but I purchased my first Apple product because of you. Next I'll be buying those creepy tracking keyrings. \n All the best in the next job, mate. Keep in touch.",
  },
  {
    name: "ʕ •ᴥ•ʔ ",
    text: "All the best in your next adventures. I'll be there wishing for another colleague to be aware of obscure cartoons about Bear roomates.",
  },
  {
    name: "MattM",
    text: "Hey Mike, thanks for everything. It was great working with you and see you grow from managing a small team and growing them into a really big one! Congrats on all your success here and best of luck in whatever you choose to do.\n Come back and say hi sometime!",
  },
  {
    name: "JennyT",
    text: "Hello Mike! Thank you for being such a nice hiring manager :) I have definitely learned a lot from you. Wishing you the very best with the exciting adventure ahead!",
  },
  {
    name: "Keith",
    text: "Hey Mike, wishing you all the best at your next stop! I'll always remember your story about the factory-like Korean 'wedding halls' and how you're not the biggest fan of Kimchi (iirc - which is a shame!). \n Will also miss you at our basketball games and always wonder what a band with Taco, me and you on bass would sound like. Take care! ",
  },
  {
    name: "The German guy",
    text: "Hi Mike, all the best for your next steps! Won't forget the interesting conversations over lunch, also, won't remember that pub crawl! Take care, hope to meet you again!",
  },
  {
    name: "Taco",
    text: "Hey Mike, all the best with your next adventure! It was a pleasure seeing you shrug and hearing you say 'not bad', in reply to my question every morning.\n Anyway, it's been great working with you! \n Let's catch up soon.",
  },
  {
    name: "Emma",
    text: "It was awesome to have you join frontend, you made a huge impact, and so patiently explained so many tech-y things to me!!! \n Continue to kick butt at your next job!",
  },
  {
    name: "LauraR",
    text: "Mike, I wish you all the best in your next adventure! Also, I want to apologize for any headaches this so called 'Fluffernutter' project may have given you. \n You've risen to the occasion and I'm sure you will continue to do so in your next job. ",
  },
  {
    name: "AlexF",
    text: "Hey Mike, all the best for your journey! It's been a pleasure working with you. Thank you for handling all the SEO requests so well and being an awesome colleague.",
  },
  {
    name: "Weining",
    text: "Hi Mike, it was a pleasure to work with you. Thank you for the guidance and support and best wishes in the next step of your career!",
  },
  {
    name: "Vanessa",
    text: "Thanks for beign a great colleague and nice person to talk to about infant/toddler sleep woes.\n You'll be missed. All the best.",
  },
  {
    name: "BenG",
    text: "Mike it's been a real pleasure to work with you. Thank you so much for working with SIM on our ad hoc projects. \n Thank you so much for your help or roast chicken and wishing you all the best! \n Hope you have more great summer weekends - chilling at the pool with your kids.",
  },
  {
    name: "AliceR",
    text: "It was a delight to get to work with you Mike, and I'll never forget you ruining my Christmas staycation by telling me it must be quarantine hotel.\n Good luck in your next adventures!",
  },
  {
    name: "Remi",
    text: "All the best to you Mike! It was great working with you, playing basketball with you and chantting with you. You've always have an interesting story to tell! \n Hope you continue to enjoy Hong Kong or wherever life takes you next!",
  },
  {
    name: "Ceinwen",
    text: "Best of luck in your new adventures, Mike! I always enjoyed our lunch chats, and hearing about your weekend family expeditions. \n Stay cool (⌐■_■)  화이팅!",
  },
  {
    name: "Rosalie",
    text: "It was lovely to work with you these past few years. I wish the best to you and your gorgeous family :)",
  },
  {
    name: "AliceL",
    text: "Thank you for being such a nice colleague! I've really enjoyed our chats about things to do in HK and how our past weekends has been. \n Hope the new position brings you much happiness and fullfillment! \n All the best to you and your lovely family!",
  },
  {
    name: "Ritu",
    text: "All the best, Mike! It was lovely to work with you :)",
  },
  {
    name: "Nianne",
    text: "Thanks for being our FE Lead, Mike. Learnt a lot from you and you have made our team grow so much over the past year. \n Happy you got to join this family. Wish you all the best in your next adventure.",
  },
  {
    name: "Chloe",
    text: "It was nice working with you for the past few months. I learnt a lot form you. Thanks for guiding me along the journey and I wish you all the best in your future endeavours!",
  },
  {
    name: "Shiven",
    text: "Hey Mike, it was great working with you over the last few months. Unfortunate that it was such a short period of time. Best of luck for your new job and all your endeavours!",
  },
  {
    name: "Varona",
    text: "It was great to work with you. Wish you all the best for your next adventure!",
  },
  {
    name: "The xv_email guy",
    text: "Grateful that we have a chance to work together in the same CHAPTER. \n Leading us to the next level! Good luck and great success on the next journey!",
  },
  {
    name: "Kelly",
    text: "Thank you for being such an amazing manager and teaching me so much. I will definetely miss bothering you with a bajillion questions. \n Please continue to send TV shows and movie recommendations so I can add it to my never-ending list (and maybe create a React app for it someday, idk). \n Best of luck with your next role!",
  },
  {
    name: "DaveT",
    text: "How can you leave us without seeing the Super Hero come to fruition? \n Good luck and godspeed, man! You'll be missed.",
  },
  {
    name: "The one who shall not pass(in HK)",
    text: "Heya!!! What a year it has been! And I have you to thank for beign super understandable and a source of encouragement. I'm super proud to be part of this team, the team you helped build and shape! Be proud of yourself and of your work always! \n Congrats on the new job and good luck finding coworkers as awesome as us. ;)",
  },
]

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
  if (audio.paused) {
    audio.loop = true
    audio.play();
  }
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

    setTimeout(function () {
      acceptCookieElement.classList.remove('slide-out');
    }, 3000);
  }
}

function createMessages() {
  const containerMsg = document.getElementById('chat-boxes');
  for (let i = 0; i < messages.length; i++) {
    const msgBox = document.createElement('div');
    msgBox.classList = 'chat-box animated-chat tada';
    msgBox.addEventListener('click', () => showMessage(i));
    msgBox.textContent = `Message from ${messages[i].name}`;
    containerMsg.appendChild(msgBox);
  }
}

function showMessage(numb) {
  var msg = messages[numb];
  alert(`\n ${msg.name}: \n\n ${msg.text}`);
}

createMessages();
block();
btnReload.addEventListener('click', showPage);
btnAcceptCookie.addEventListener('click', function () {
  const availableEvents = ['slide-out', 'fade-out', 'slide-up', 'slide-right', 'zoom-out', 'slide-corner'];
  const randomEventIndex = Math.floor(Math.random() * availableEvents.length);

  acceptCookieElement.classList.add(availableEvents[randomEventIndex]);

  setTimeout(function () {
    acceptCookieElement.classList.remove(availableEvents[randomEventIndex]);
  }, 1500);
});
