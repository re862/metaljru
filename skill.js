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
  showCodecMessage("Skill-set sections in websites help you showcase your skills in a creative way. An attractive and well-thought-out skill section on a website creates a lasting impression on the visitor and can increase conversions for portfolio or service websites. Skill sets section for websites can be expressed either in the form of percentage or simple horizontal bars.");
});

document.getElementById('codec').addEventListener('click', () => {
  document.getElementById('codec').style.display = 'none';
});
