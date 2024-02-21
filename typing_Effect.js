const text = "Emmanuel";
const typingSpan = document.getElementById('type-text');
let index = 0;

function typeLetter() {
  if (index < text.length) {
    typingSpan.textContent += text[index];
    index++;
    setTimeout(typeLetter, 200); // Delay between each letter
  }
}

// Start typing effect after a 1-second delay
setTimeout(typeLetter, 1000);
