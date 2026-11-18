// Урок 07: переменные, числа, строки, шаблонные строки
// Задача: описать трек переменными и показать его на странице

// TODO 1: объяви переменные songTitle (строка), artist (строка), year (число)
// Пример идей: "Yesterday", "The Beatles", 1965
let songTitle = "Непроизошло";
let artist = "ZOLOTO";
let year = 2022;
// TODO 2: объяви const genre — жанр, который не будешь менять
const genre = "Инди-поп";

const duration = "3:17"
// TODO 3: собери шаблонную строку cardText с ${songTitle}, ${artist}, ${year}, ${genre}
let cardText = `🎵 ${songTitle}
Исполнитель: ${artist}
Год: ${year}
Жанр: ${genre}
длительность: ${duration}
`;
// TODO 4: по клику на кнопку запиши данные в элементы страницы
document.getElementById("show-btn").addEventListener("click", function () {
  // Подсказка:
   document.getElementById("title").textContent = songTitle;
   document.getElementById("artist").textContent = artist;
  document.getElementById("card-text").textContent = cardText;

 
});
