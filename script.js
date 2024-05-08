// Pobiera wszystkie komórki planszy
const cells = document.querySelectorAll('[data-cell]');
// Pobiera element wyświetlający informację, czyja jest teraz tura
const turnDisplay = document.getElementById('turnDisplay');
let circleTurn; // Zmienna przechowująca informację, czy tura należy do gracza grającego "O"
let gameMode = ""; // Zmienna przechowująca tryb gry: "friend" lub "computer"

// Dodanie obsługi kliknięcia dla przycisku gry z przyjacielem
document.getElementById('playWithFriend').addEventListener('click', () => setupGame("friend"));
// Dodanie obsługi kliknięcia dla przycisku gry z komputerem
document.getElementById('playWithComputer').addEventListener('click', () => setupGame("computer"));
// Dodanie obsługi kliknięcia dla przycisku wyjścia z gry
document.getElementById('exitGameButton').addEventListener('click', () => {
    document.querySelector('.modal').classList.add('hide');
    setTimeout(() => window.electronAPI.quitApp(), 500); // Czeka na zakończenie animacji zanikania
});
// Dodanie obsługi kliknięcia dla przycisku pokazującego informacje o twórcy
document.getElementById('showCreatorInfo').addEventListener('click', () => {
    document.getElementById('creatorInfoModal').style.display = 'flex';
});

// Dodanie obsługi kliknięcia dla przycisku zamykającego informacje o twórcy
document.getElementById('closeCreatorInfo').addEventListener('click', () => {
    document.getElementById('creatorInfoModal').classList.add('hide');
    setTimeout(() => {
        document.getElementById('creatorInfoModal').style.display = 'none';
        document.getElementById('creatorInfoModal').classList.remove('hide');
    }, 500); // Czeka na zakończenie animacji zanikania
});

// Funkcja przygotowująca grę
function setupGame(mode) {
    circleTurn = false; // Zaczyna gracz X
    gameMode = mode; // Ustawia tryb gry
    document.querySelector('.modal').style.display = 'none'; // Ukrywa modal
    document.getElementById('gameBoard').style.display = 'flex'; // Pokazuje planszę gry
    cells.forEach(cell => {
        cell.classList.remove('x', 'o'); // Czyści komórki
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true }); // Dodaje obserwatory zdarzeń na komórki
    });
    updateTurnDisplay(); // Aktualizuje wyświetlacz tury
}

// Obsługuje kliknięcia na komórki
function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? 'o' : 'x'; // Ustala klasę na podstawie tury
    placeMark(cell, currentClass); // Umieszcza znak w komórce
    if (checkWin(currentClass)) {
        endGame(false); // Sprawdza warunek wygranej
    } else if (isDraw()) {
        endGame(true); // Sprawdza warunek remisu
    } else {
        swapTurns(); // Zmienia turę
        updateTurnDisplay(); // Aktualizuje wyświetlacz tury
        if (gameMode === "computer" && circleTurn) {
            computerMove(); // Ruch komputera, jeśli tryb gry to gra z komputerem
        }
    }
}

// Umieszcza znak w wybranej komórce
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

// Zmienia gracza mającego turę
function swapTurns() {
    circleTurn = !circleTurn;
}

// Aktualizuje wyświetlacz tury
function updateTurnDisplay() {
    if (gameMode === "friend") {
        turnDisplay.textContent = `Ruch: Gracz ${circleTurn ? '2' : '1'}`;
    } else {
        turnDisplay.textContent = `Ruch: ${circleTurn ? 'Komputer' : 'Gracz'}`;
    }
}

// Sprawdza, czy jest wygrana
function checkWin(currentClass) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
}

// Sprawdza, czy jest remis
function isDraw() {
    return [...cells].every(cell => cell.classList.contains('x') || cell.classList.contains('o'));
}

// Kończy grę
function endGame(draw) {
    let message = '';
    if (draw) {
        message = 'Remis!';
    } else {
        const winner = circleTurn ? (gameMode === "friend" ? 'Gracz 2' : 'Komputer') : (gameMode === "friend" ? 'Gracz 1' : 'Gracz');
        message = `Wygrał ${winner}!`;
    }
    
    document.getElementById('gameOverMessage').textContent = message;
    document.getElementById('gameOverModal').style.display = 'flex';
    document.getElementById('gameBoard').style.display = 'none';
}

// Restartuje grę
document.getElementById('restartButton').addEventListener('click', () => {
    document.getElementById('gameOverModal').classList.add('hide');
    setTimeout(() => {
        document.getElementById('gameOverModal').style.display = 'none';
        setupGame(gameMode);
    }, 500); // Czeka na zakończenie animacji zanikania
});

// Wraca do menu głównego
document.getElementById('backToMenuButton').addEventListener('click', () => {
    document.getElementById('gameOverModal').classList.add('hide');
    setTimeout(() => {
        document.getElementById('gameOverModal').style.display = 'none';
        document.querySelector('.modal').style.display = 'flex';
        document.querySelector('.modal').classList.remove('hide');
    }, 500); // Czeka na zakończenie animacji zanikania
});

// Ruch komputera
function computerMove() {
    const availableCells = Array.from(cells).filter(cell => !cell.classList.contains('x') && !cell.classList.contains('o'));
    if (availableCells.length > 0) {
        setTimeout(() => {
            const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
            randomCell.click();
        }, 800); // Czeka 800 ms przed wykonaniem ruchu
    }
}
