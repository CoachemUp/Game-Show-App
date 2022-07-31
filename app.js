//Get elements needed from the HTML
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const overlay = document.getElementById("overlay");
const start = document.querySelector(".btn__reset");

//Counter for missed attempts
let missed = 0;

//Event listener to Start Game
start.addEventListener("click", () => {
  overlay.style.display = "none";
});

//Phrases for game
const phrases = [
  "May the Force be with you",
  "Houston we have a problem",
  "I am your father",
  "Just keep swimming",
  "Bond James Bond"
];

function getRandomPhraseAsArray(arr) {
  const phraseIndex = Math.floor(Math.random() * phrases.lenth);
  const randomPhrase = phrases[phraseIndex];
  const splitPhrase = randomPhrase.split('');
  return splitPhrase;
}

const phraseArray = getRandomPhraseAsArray(phrases);

