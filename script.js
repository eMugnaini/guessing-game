let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let guessedNumbers = [];
function checkGuess() {
  const guess = document.getElementById("guess").value;
  if (guessedNumbers.length === 0) {
    document.getElementById("previous-guesses-section").style.display = "block";
  }
  guessedNumbers.unshift(guess);
  document.getElementById("guessList").innerHTML = guessedNumbers
    .map((g) => `<li>${g}</li>`)
    .join("");
  document.getElementById("guess").value = "";
  attempts--;
  let feedbackElement = document.getElementById("feedback");
  if (guess == randomNumber) {
    attempts = 0;
    feedbackElement.innerHTML = "You got it!";
    feedbackElement.style.color = "green";
    document.getElementById("guess").disabled = true;
    document.querySelector("button").disabled = true;
    confetti();
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML =
      "Too low! Try again <br>" + attempts + " attempts left";
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerHTML =
      "Too high! Try again <br> " + attempts + " attempts left";
    feedbackElement.style.color = "red";
  }
  if (attempts == 0 && guess != randomNumber) {
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML =
      "The correct number was " + randomNumber + "<br> Game Over!";
    document.getElementById("guess").disabled = true;
    document.querySelector("button").disabled = true;
  }
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  guessedNumbers = [];
  document.getElementById("guessList").innerHTML = "";
  document.getElementById("guess").value = "";
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("guess").disabled = false;
  document.querySelector("button").disabled = false;
  document.getElementById("previous-guesses-section").style.display = "none";
}

document.getElementById("guess").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});
