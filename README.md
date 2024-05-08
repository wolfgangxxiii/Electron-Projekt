Projekt gry "Kółko i krzyżyk" oparty na technologii Electron to aplikacja desktopowa oraz urządzenia mobilne.

Opis projektu:
1.	Technologia: Projekt wykorzystuje technologię Electron, która pozwala na tworzenie aplikacji desktopowych przy użyciu języków webowych takich jak HTML, CSS i JavaScript.
2.	Funkcje: Aplikacja umożliwia grę w "Kółko i krzyżyk" w dwóch trybach: z przyjacielem oraz z komputerem. Gracze mogą wybierać między tymi dwoma trybami na początku gry.
3.	Interfejs użytkownika: Interfejs aplikacji składa się z prostego menu startowego, gdzie użytkownik może wybrać tryb gry, oraz z głównego ekranu gry, gdzie znajduje się plansza do gry oraz wyświetlane są informacje o aktualnym ruchu i stanie gry.
4.	Rozgrywka: Gracze wykonują ruchy na planszy poprzez kliknięcie w wybrane pole. Aplikacja sprawdza, czy któryś z graczy wygrał, czy też jest remis, po czym wyświetla odpowiedni komunikat końcowy.
5.	Komputerowy przeciwnik: W trybie gry z komputerem, aplikacja implementuje prostą sztuczną inteligencję, która wykonuje ruchy w imieniu komputera. Ruchy komputera są losowane spośród dostępnych pól na planszy.
6.	Stylizacja: Projekt posiada również odpowiednio zaprojektowany interfejs graficzny przy użyciu arkuszy stylów CSS, aby zapewnić przyjemne doświadczenie użytkownika.

Instrukcja instalacji lub użycia:

1.	Pobierz pliki:
index.html, 
index.js, 
package.json, 
package-lock.json, 
preload.js, 
script.js, 
style.css.

2.	Zainstaluj zależności: W folderze projektu, gdzie znajdują się pobrane pliki, otworzyć terminal i wykonać polecenie "npm install", aby zainstalować zależności projektu.

3.	Uruchomienie aplikacji: Po zakończeniu instalacji zależności, należy wprowadzić polecenie "npm start" w terminalu. Spowoduje to uruchomienie aplikacji Electron i wyświetlenie gry w oknie aplikacji.
   
Po wykonaniu tych kroków gra powinna się uruchomić w aplikacji Electron na komputerze osoby drugiej. Jeśli pojawią się jakiekolwiek błędy lub problemy, warto sprawdzić konsolę deweloperską, aby zidentyfikować i naprawić ewentualne problemy.
