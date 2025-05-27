// script.js
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const alert = document.getElementById('alertSound');
    alert.currentTime = 0;
    alert.play();
  });
});

// script.js
function showCodecMessage(message) {
  const codec = document.getElementById('codec');
  const text = document.getElementById('codecText');
  const blip = document.getElementById('blip');
  codec.style.display = 'flex';
  text.textContent = '';

  let i = 0;
  function typeChar() {
    if (i < message.length) {
      text.textContent += message[i];
      if (blip) {
        blip.currentTime = 0;
        blip.play();
      }
      i++;
      setTimeout(typeChar, 40);
    }
  }

  typeChar();
}

// Trigger the codec call (on load or button click)
window.addEventListener('load', () => {
  showCodecMessage("War He Sung Is Toil And Trouble, Honor But An Empty Bubble - John Dryden (Handel's Alexander's Feast)");
});

document.getElementById('codec').addEventListener('click', () => {
  document.getElementById('codec').style.display = 'none';
});
