const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const paddleWidth = 10;
const paddleHeight = 100;
let player1Y = canvas.height / 2 - paddleHeight / 2;
let player2Y = canvas.height / 2 - paddleHeight / 2;
const paddleSpeed = 8; // Aumentamos la velocidad de la barra

const ballSize = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;

function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw paddles
  ctx.fillStyle = 'black';
  ctx.fillRect(0, player1Y, paddleWidth, paddleHeight);
  ctx.fillRect(canvas.width - paddleWidth, player2Y, paddleWidth, paddleHeight);

  // Draw ball
  ctx.fillRect(ballX - ballSize / 2, ballY - ballSize / 2, ballSize, ballSize);

  // Update ball position
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Ball collision with top and bottom walls
  if (ballY - ballSize / 2 < 0 || ballY + ballSize / 2 > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }

  // Ball collision with paddles
  if (
    (ballX - ballSize / 2 <= paddleWidth && ballY >= player1Y && ballY <= player1Y + paddleHeight) ||
    (ballX + ballSize / 2 >= canvas.width - paddleWidth && ballY >= player2Y && ballY <= player2Y + paddleHeight)
  ) {
    ballSpeedX = -ballSpeedX;
  }

  // Request animation frame
  requestAnimationFrame(draw);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'w' && player1Y > 0) {
    player1Y -= paddleSpeed;
  } else if (e.key === 's' && player1Y < canvas.height - paddleHeight) {
    player1Y += paddleSpeed;
  }

  if (e.key === 'ArrowUp' && player2Y > 0) {
    player2Y -= paddleSpeed;
  } else if (e.key === 'ArrowDown' && player2Y < canvas.height - paddleHeight) {
    player2Y += paddleSpeed;
  }
});

draw();
