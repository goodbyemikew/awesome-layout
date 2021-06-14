function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function block() {
  var text = document.getElementById('loading-text');
  var block = document.getElementById('blocker');
  if(localStorage.getItem('reload')) {
  	text.innerHTML = 'Ok, thanks, should be working now';
  	await sleep(5000);
  	block.remove();
  	return;
  }

  await sleep(5000);
  text.innerHTML = 'Loading...';
  await sleep(5000);
  text.innerHTML = "Just one more second and that's it";
  await sleep(5000);
  text.innerHTML = "Almost done, too many people are visiting this page at the moment";
  await sleep(5000);
  text.innerHTML = "One little png and that's all, I swear";
  await sleep(5000);
  text.innerHTML = "Sorry, Mike, it was working yesterday";
  await sleep(5000);
  text.innerHTML = "Google PageSpeed gave me 99";
  await sleep(5000);
  text.innerHTML = "Somebody, click Reload!!!";

  localStorage.setItem('reload', 1);
}

block();