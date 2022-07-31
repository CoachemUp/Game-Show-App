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
let phrases = [
  "May the Force be with you",
  "Houston we have a problem",
  "I am your father",
  "Just keep swimming",
  "Bond James Bond",
];

function getRandomPhraseAsArray(arr) {
  const phraseIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[phraseIndex];
  const splitPhrase = randomPhrase.split("");
  return splitPhrase;
}

const phraseArray = getRandomPhraseAsArray(phrases);

console.log(phraseArray)




//Set the game display
function addPhraseToDisplay(arr) {
  for (let i = 0; i < phraseArray.length; i++) {
    const li = phraseArray[i];
    const liPhrase = document.createElement("li");
    liPhrase.textContent = li;
    const ul = document.querySelector("#phrase ul");
    ul.appendChild(liPhrase);

    if (li !== " ") {
      liPhrase.classList.add("letter");
    } else if (li === " ") {
      liPhrase.classList.add("space");
    }
  }
}

//Check letter function
function checkLetter(guess) {
  const correct = phraseArray.includes(guess);

  if (correct === true) {
    for (let i = 0; i < phraseArray.length; i++)
      if (phraseArray[i] === guess) {
        document.querySelectorAll("li")[i].classList.add("show");
      }
  } else {
    const attempts = document.querySelectorAll("img");
    attempts[missed].src = "images/lostHeart.png";
    missed++;
  }
}

//Event listener for Attempts
qwerty.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.className != "chosen") {
    const btn = e.target;
    btn.disabled = true;
    btn.className = "chosen";
    const letterCheck = e.target.textContent;
    const letterFound = checkLetter(letterCheck);
  }
});
