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
  showCodecMessage("A contact section or contact us section is a designated area on a website or other communication platform that provides users with various ways to connect with a business or organization. It offers direct communication channels like phone numbers, email addresses, physical addresses, or online contact forms, making it easy for users to reach out for inquiries, support, or assistance. ");
});

document.getElementById('codec').addEventListener('click', () => {
  document.getElementById('codec').style.display = 'none';
});
