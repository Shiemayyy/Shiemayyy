const words = ["apple", "banana", "grape", "orange", "peach"];
let secretWord = words[Math.floor(Math.random() * words.length)];
let attemptsLeft = 5;

const messageElement = document.getElementById("message");
const guessInput = document.getElementById("guessInput");
const submitGuessButton = document.getElementById("submitGuess");
const restartGameButton = document.getElementById("restartGame");

function checkGuess() {
    const userGuess = guessInput.value.trim().toLowerCase();

    if (userGuess === "") {
        messageElement.textContent = Incorrect guess. You have ${attemptsLeft} attempts left. Try again!;
        return;
    }

    if (userGuess === secretWord) {
        messageElement.textContent = "Congratulations! You guessed the secret word!";
        document.body.style.backgroundColor = "lightgreen";
        restartGameButton.style.display = "block";
        return;
    }

    attemptsLeft--;

    if (attemptsLeft === 0) {
        messageElement.textContent = Game over! The secret word was '${secretWord}'.;
        document.body.style.backgroundColor = "lightcoral";
        restartGameButton.style.display = "block";
    } else {
        messageElement.textContent = Incorrect guess. You have ${attemptsLeft} attempts left. Try again!;
    }

    guessInput.value = ""; // Clear the input field
}

function restartGame() {
    secretWord = words[Math.floor(Math.random() * words.length)];
    attemptsLeft = 5;
    messageElement.textContent = "";
    guessInput.value = "";
    document.body.style.backgroundColor = "";
    restartGameButton.style.display = "none";
}

submitGuessButton.addEventListener("click", checkGuess);
restartGameButton.addEventListener("click", restartGame);
