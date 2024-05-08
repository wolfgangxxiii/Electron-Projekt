// Importowanie niezbędnych modułów z pakietu Electron oraz modułu path do obsługi ścieżek plików.
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Funkcja tworząca nowe okno przeglądarki.
function createWindow() {
    // Inicjalizacja nowego okna przeglądarki z określonymi opcjami.
    const win = new BrowserWindow({
        width: 800, // Szerokość okna
        height: 600, // Wysokość okna
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Ścieżka do skryptu preload, który ładuje się przed resztą stron
            nodeIntegration: false, // Wyłączenie integracji Node.js w renderowaniu procesów dla bezpieczeństwa
            contextIsolation: true // Izolacja kontekstu, zapobiega eksponowaniu funkcji Node.js bezpośrednio do stron
        }
    });

    // Wczytywanie pliku HTML jako interfejsu użytkownika aplikacji.
    win.loadFile('index.html');
}

// Gdy aplikacja jest gotowa, inicjuje tworzenie okna.
app.whenReady().then(createWindow);

// Obsługa zamknięcia wszystkich okien w aplikacji, nie dotyczy macOS (Darwin).
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit(); // Na macOS aplikacje często pozostają aktywne do momentu wyjścia przez użytkownika
});

// Reaktywacja aplikacji po jej zamknięciu, tylko jeśli nie ma otwartych okien (macOS).
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// Nasłuchiwanie na komendę 'quit-app' wysłaną przez proces renderowania, aby zamknąć aplikację.
ipcMain.on('quit-app', () => {
    app.quit(); // Zamyka aplikację
});
