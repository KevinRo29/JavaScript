// Set choices
const choices = ["rock", "paper", "scissors"];

// Add event listeners to buttons
document.querySelectorAll(".choice-btn").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id; // Get id of clicked button
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Get random choice from choices array
    const result = determineWinner(playerChoice, computerChoice); // Determine winner
    displayResult(playerChoice, computerChoice, result); // Display result
  });
});

// Determine winner
function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Display result
function displayResult(playerChoice, computerChoice, result) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>You chose <strong>${playerChoice}</strong>.</p>
    <p>Computer chose <strong>${computerChoice}</strong>.</p>
    <p><strong>${result}</strong></p>
  `;
}