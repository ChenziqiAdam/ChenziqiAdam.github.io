const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

const handleCellClick = (e) => {
    const index = e.target.getAttribute('data-index');

    if (board[index] !== '' || !isGameActive) return;

    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `Player ${currentPlayer}'s turn`; // Update turn text
    checkWinner();
};

const checkWinner = () => {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
	let winnerPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `${winnerPlayer} Wins!`;
        isGameActive = false;
        return;
    }

    if (!board.includes('')) {
        statusText.textContent = `It's a Draw!`;
        isGameActive = false;
    }
};

const restartGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    statusText.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => (cell.textContent = ''));
};

// Initialize the game
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);

// Set initial status text
statusText.textContent = `Player ${currentPlayer}'s turn`;
