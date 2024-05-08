// Importowanie modułów 'contextBridge' i 'ipcRenderer' z pakietu 'electron'.
const { contextBridge, ipcRenderer } = require('electron');

// 'contextBridge' pozwala bezpiecznie eksponować API między kontekstami izolowanymi w Electron.
// Dzięki temu główne API systemu nie jest bezpośrednio dostępne w renderze.
contextBridge.exposeInMainWorld('electronAPI', {
    // Definicja funkcji 'quitApp', która wywołuje 'send' na obiekcie 'ipcRenderer'.
    // 'ipcRenderer' umożliwia asynchroniczne komunikowanie się z głównym procesem Electrona.
    quitApp: () => ipcRenderer.send('quit-app')
    // 'quit-app' to niestandardowe zdarzenie zdefiniowane w głównym procesie Electrona,
    // które jest nasłuchiwane, aby odpowiednio zareagować, np. zamknąć aplikację.
});
