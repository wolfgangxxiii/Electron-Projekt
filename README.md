<div align="center">

# 🎮 Tic-Tac-Toe · Electron

**Kółko i krzyżyk w oknie aplikacji — zagraj ze znajomym albo z komputerem.**

![Electron](https://img.shields.io/badge/Electron-15-47848F?style=flat-square&logo=electron&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML + CSS](https://img.shields.io/badge/HTML%20%2B%20CSS-334155?style=flat-square)
![Status](https://img.shields.io/badge/Typ-Desktop%20%2B%20Web-2563EB?style=flat-square)

[🌐 Demo online](https://electron-projekt.netlify.app/) · [⚡ Uruchomienie](#-uruchomienie) · [🧩 Kod](#-struktura-projektu)

</div>

---

## ✨ Funkcje

| 👥 Gra lokalna | 🤖 Gra z komputerem | 🏁 Wynik |
| :--- | :--- | :--- |
| Dwie osoby na jednej planszy 3 × 3 | Komputer wykonuje losowe ruchy | Wykrywanie trzech znaków w linii i remisu |

- Wybór trybu w menu głównym.
- Komunikat o zakończeniu partii.
- Ponowna rozgrywka lub powrót do menu.
- Interfejs zbudowany w HTML, CSS i JavaScript.

> Sztuczna inteligencja **nie analizuje strategii** — losuje jedno z dostępnych pól.

## ⚡ Uruchomienie

Wymagane: **Node.js i npm**. Aplikacja wykorzystuje Electron zdefiniowany w `package.json`.

~~~bash
git clone https://github.com/wolfgangxxiii/Electron-Projekt.git
cd Electron-Projekt
npm ci
npm start
~~~

Jeśli chcesz obejrzeć interfejs w przeglądarce, skorzystaj z [wersji demonstracyjnej na Netlify](https://electron-projekt.netlify.app/). Niektóre operacje desktopowe (np. zamknięcie okna przez API Electron) wymagają uruchomienia w Electronie.

## 🧩 Struktura projektu

| Plik | Rola |
| :--- | :--- |
| [`index.js`](index.js) | Proces główny Electron i okno aplikacji |
| [`preload.js`](preload.js) | Bezpieczny pomost do wybranych funkcji desktopowych |
| [`index.html`](index.html) | Elementy interfejsu |
| [`script.js`](script.js) | Zasady rozgrywki i ruch komputera |
| [`style.css`](style.css) | Styl i animacje interfejsu |
| [`package.json`](package.json) | Zależności i polecenie `npm start` |

## 🛠️ Pomysły na rozwój

- [ ] Bardziej wymagający przeciwnik (np. minimax)
- [ ] Zapisywanie statystyk i serii zwycięstw
- [ ] Dodatkowe motywy graficzne

## 📄 Licencja i autor

Projekt: **Szymon Piotr Bławat** · [GitHub](https://github.com/wolfgangxxiii).

**Uwaga dotycząca licencji:** [`LICENSE.txt`](LICENSE.txt) zawiera Apache 2.0, natomiast `package.json` deklaruje MIT. Te oznaczenia wymagają ujednolicenia przez autora.
