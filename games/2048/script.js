const gameBoard = document.getElementById('gameBoard');
const scoreElement = document.getElementById('score');
let score = 0;
let size = 4;
let board = [];

// Initialize the game
function initializeBoard() {
    board = Array(size).fill().map(() => Array(size).fill(0));
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    generateTile();
    generateTile();
    drawBoard();
}

// Generate a random tile (2 or 4)
function generateTile() {
    let emptyCells = [];
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (board[i][j] === 0) {
                emptyCells.push({ x: i, y: j });
            }
        }
    }
    if (emptyCells.length === 0) return;
    let { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[x][y] = Math.random() < 0.9 ? 2 : 4;
}

// Draw the game board
function drawBoard() {
    gameBoard.innerHTML = '';
    board.forEach(row => {
        row.forEach(tile => {
            const tileDiv = document.createElement('div');
            tileDiv.className = 'tile';
            tileDiv.textContent = tile === 0 ? '' : tile;
            tileDiv.dataset.value = tile;
            gameBoard.appendChild(tileDiv);
        });
    });
}

// Move and merge tiles based on direction
function move(direction) {
    let moved = false;
    let merged = false;

    switch (direction) {
        case 'left':
            for (let row = 0; row < size; row++) {
                let newRow = board[row].filter(tile => tile !== 0);
                for (let i = 0; i < newRow.length - 1; i++) {
                    if (!merged) {
                        if (newRow[i] === newRow[i + 1]) {
                            newRow[i] *= 2;
                            score += newRow[i];
                            newRow.splice(i + 1, 1);
                            newRow.push(0);
                            merged = true;
                        }
                    }
                }
                merged = false;
                while (newRow.length < size) newRow.push(0);
                if (newRow.join('') !== board[row].join('')) moved = true;
                board[row] = newRow;
            }
            break;

        case 'right':
            for (let row = 0; row < size; row++) {
                let newRow = board[row].filter(tile => tile !== 0);
                for (let i = newRow.length - 1; i > 0; i--) {
                    if (!merged) {
                        if (newRow[i] === newRow[i - 1]) {
                            newRow[i] *= 2;
                            score += newRow[i];
                            newRow.splice(i - 1, 1);
                            newRow.unshift(0);
                            merged = true;
                        }
                    }
                }
                merged = false;
                while (newRow.length < size) newRow.unshift(0);
                if (newRow.join('') !== board[row].join('')) moved = true;
                board[row] = newRow;
            }
            break;

        case 'up':
            for (let col = 0; col < size; col++) {
                let newCol = [];
                for (let row = 0; row < size; row++) {
                    if (board[row][col] !== 0) newCol.push(board[row][col]);
                }
                for (let i = 0; i < newCol.length - 1; i++) {
                    if (!merged) {
                        if (newCol[i] === newCol[i + 1]) {
                            newCol[i] *= 2;
                            score += newCol[i];
                            newCol.splice(i + 1, 1);
                            newCol.push(0);
                            merged = true;
                        }
                    }
                }
                merged = false;
                while (newCol.length < size) newCol.push(0);
                for (let row = 0; row < size; row++) {
                    if (board[row][col] !== newCol[row]) moved = true;
                    board[row][col] = newCol[row];
                }
            }
            break;

        case 'down':
            for (let col = 0; col < size; col++) {
                let newCol = [];
                for (let row = 0; row < size; row++) {
                    if (board[row][col] !== 0) newCol.push(board[row][col]);
                }
                for (let i = newCol.length - 1; i > 0; i--) {
                    if (!merged) {
                        if (newCol[i] === newCol[i - 1]) {
                            newCol[i] *= 2;
                            score += newCol[i];
                            newCol.splice(i - 1, 1);
                            newCol.unshift(0);
                            merged = true;
                        }
                    }
                }
                merged = false;
                while (newCol.length < size) newCol.unshift(0);
                for (let row = 0; row < size; row++) {
                    if (board[row][col] !== newCol[row]) moved = true;
                    board[row][col] = newCol[row];
                }
            }
            break;
    }

    if (moved) {
        generateTile();
        drawBoard();
        scoreElement.textContent = `Score: ${score}`;
    } else {
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (board[row][col] === 2048) {
                    alert(`You won! Your score is: ${score}.`);
                    return;
                }
                if (board[row][col] === 0) return;
            }
        }
        alert(`Game over! Your score is: ${score}.`);
    }
}

// Add event listeners for key presses (up, down, left, right)
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            move('up');
            break;
        case 'ArrowDown':
            move('down');
            break;
        case 'ArrowLeft':
            move('left');
            break;
        case 'ArrowRight':
            move('right');
            break;
    }
});

// Restart the game
document.getElementById('restart').addEventListener('click', initializeBoard);

// Initialize the game on page load
initializeBoard();
