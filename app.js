//Get elements needed from the HTML
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const overlay = document.getElementById("overlay");
const start = document.querySelector(".btn__reset");
const winLose = document.querySelector("ul");
const h3 = document.createElement("h3");
const ul = document.querySelector("ul");
//Counter for missed attempts
let missed = 0;

//Event listener to Start Game
start.addEventListener("click", () => {
  overlay.style.display = "none";
});

//Phrases for game
let phrases = [
  "may the force be with you",
  "houston we have a problem",
  "i am your father",
  "just keep swimming",
  "bond james bond",
];

//Create a getRandomPhraseAsArray function
function getRandomPhraseAsArray(arr) {
  const phraseIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[phraseIndex];
  const splitPhrase = randomPhrase.split("");
  return splitPhrase;
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
//console.log(phraseArray);

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
  checkWin();
});
//checkWin function to see if they won
function checkWin() {
  const letters = document.querySelectorAll(".letter");
  const shows = document.querySelectorAll(".show");
  if (shows.length === letters.length) {
    overlay.style.display = "flex";
    overlay.className = "win";

    start.textContent = "Restart?";
    overlay.appendChild(h3);
    h3.textContent = "You Won";
  } else if (missed > 4) {
    overlay.style.display = "flex";
    overlay.className = "lose";

    start.textContent = "Try Again?";
    overlay.appendChild(h3);
    h3.textContent = "You Lose";
  }
  resetGame();
}

// Reset Game
function resetGame() {
  start.addEventListener("click", (e) => {
    ul.requestFullscreen.display = "none";
    location.reload();
  });
}
