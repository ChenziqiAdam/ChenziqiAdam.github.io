const canvas = document.getElementById('gomokuCanvas');
const ctx = canvas.getContext('2d');
const size = 15; // 15x15 board
const cellSize = 400 / size;
let board = Array(size).fill().map(() => Array(size).fill(''));
let currentPlayer = 'black'; // 'black' or 'white'
let gameOver = false;

// Draw board grid
function drawBoard() {
    for (let i = 0; i <= size; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, 400);
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(400, i * cellSize);
        ctx.stroke();
    }
}

// Draw pieces
function drawPiece(x, y, color) {
    ctx.beginPath();
    ctx.arc(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, cellSize / 3, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

// Check for winner
function checkWinner(x, y, color) {
    let directions = [
        [[0, 1], [0, -1]], // Horizontal
        [[1, 0], [-1, 0]], // Vertical
        [[1, 1], [-1, -1]], // Diagonal \
        [[1, -1], [-1, 1]]  // Diagonal /
    ];

    for (let [dir1, dir2] of directions) {
        let count = 1;
        for (let [dx, dy] of [dir1, dir2]) {
            for (let i = 1; i < 5; i++) {
                let nx = x + dx * i;
                let ny = y + dy * i;
                if (nx >= 0 && nx < size && ny >= 0 && ny < size && board[nx][ny] === color) {
                    count++;
                } else {
                    break;
                }
            }
        }
        if (count >= 5) {
            gameOver = true;
            document.getElementById('gomokuStatus').textContent = `${color === 'black' ? 'Player 1' : 'Player 2'} wins!`;
            return true;
        }
    }
    return false;
}

// Handle canvas click
canvas.addEventListener('click', (e) => {
    if (gameOver) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / cellSize);
    const y = Math.floor((e.clientY - rect.top) / cellSize);

    if (!board[x][y]) {
        board[x][y] = currentPlayer;
        drawPiece(x, y, currentPlayer);

        if (checkWinner(x, y, currentPlayer)) {
            return;
        }

        currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
        document.getElementById('gomokuStatus').textContent = `${currentPlayer === 'black' ? 'Player 1' : 'Player 2'}'s turn (${currentPlayer === 'black' ? 'Black' : 'White'})`;
    }
});

// Restart game
document.getElementById('restart').addEventListener('click', () => {
    board = Array(size).fill().map(() => Array(size).fill(''));
    currentPlayer = 'black';
    gameOver = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    document.getElementById('gomokuStatus').textContent = "Player 1's turn (Black)";
});

// Draw the initial board
drawBoard();
