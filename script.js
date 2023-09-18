import sentences from './script.js';

const randomSentenceButton = document.getElementById('randomSentenceButton');
const randomSentenceDisplay = document.getElementById('randomSentence');

randomSentenceButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const randomSentence = sentences[randomIndex];
  randomSentenceDisplay.innerText = randomSentence;
});
