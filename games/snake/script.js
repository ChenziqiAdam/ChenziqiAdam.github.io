const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreText = document.getElementById('score');
const restartButton = document.getElementById('restart');

let snake, food, direction, score, gameInterval;

// Initialize Game State
function resetGame() {
    snake = [
        { x: 160, y: 160 },
        { x: 140, y: 160 },
        { x: 120, y: 160 }
    ];
    food = { x: getRandomCoordinate(), y: getRandomCoordinate() };
    direction = { x: 20, y: 0 };
    score = 0;
    scoreText.textContent = 'Score: ' + score;
    clearInterval(gameInterval);
}

// Draw Game Board
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    moveSnake();
    if (checkCollision()) {
	endGame();
	return;
    }

    // Draw Snake
    snake.forEach(segment => {
        ctx.fillStyle = 'lime';
        ctx.fillRect(segment.x, segment.y, 20, 20);
    });

    // Draw Food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 20, 20);
}

// Move Snake
function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);

    // Check if snake eats food
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreText.textContent = 'Score: ' + score;
        food = { x: getRandomCoordinate(), y: getRandomCoordinate() };
    } else {
        snake.pop(); // Remove tail if no food eaten
    }
}

// Check Collisions
function checkCollision() {
    // Check walls
    if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height) {
	return true;
    }

    // Check self collision
    for (let i = 4; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
	    return true;
        }
    }

    return false;
}

// Randomize Food Coordinates
function getRandomCoordinate() {
    return Math.floor(Math.random() * (canvas.width / 20)) * 20;
}

// Handle End of Game
function endGame() {
    clearInterval(gameInterval);
    alert('Game Over! Your final score is ' + score);
}

// Start Game
function startGame() {
    resetGame();
    gameInterval = setInterval(drawGame, 100);
}

// Restart Game
function restartGame() {
    resetGame();
    startGame();
}

// Handle Arrow Key Presses
document.addEventListener('keydown', (event) => {
    const keyPressed = event.key;

    switch (keyPressed) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -20 };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 20 };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -20, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 20, y: 0 };
            break;
    }
});

// Button Event Listeners
restartButton.addEventListener('click', restartGame);
