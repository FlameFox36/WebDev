// Имитация базы данных книг
export const fetchBooks = () => {
  return new Promise((resolve) => {
    // Имитируем задержку сервера (1 секунда)
    setTimeout(() => {
      const books = [
        { id: 1, title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967, isAvailable: true, genre: "Роман" },
        { id: 2, title: "Преступление и наказание", author: "Фёдор Достоевский", year: 1866, isAvailable: false, genre: "Роман" },
        { id: 3, title: "1984", author: "Джордж Оруэлл", year: 1949, isAvailable: true, genre: "Антиутопия" },
        { id: 4, title: "Маленький принц", author: "Антуан де Сент-Экзюпери", year: 1943, isAvailable: false, genre: "Сказка" },
        { id: 5, title: "Война и мир", author: "Лев Толстой", year: 1869, isAvailable: true, genre: "Эпопея" },
        { id: 6, title: "Гарри Поттер и философский камень", author: "Дж.К. Роулинг", year: 1997, isAvailable: true, genre: "Фэнтези" },
        { id: 7, title: "Сто лет одиночества", author: "Габриэль Гарсиа Маркес", year: 1967, isAvailable: false, genre: "Магический реализм" },
        { id: 8, title: "Анна Каренина", author: "Лев Толстой", year: 1877, isAvailable: true, genre: "Роман" },
        { id: 9, title: "Евгений Онегин", author: "Александр Пушкин", year: 1833, isAvailable: false, genre: "Поэма" },
        { id: 10, title: "Дюна", author: "Фрэнк Герберт", year: 1965, isAvailable: true, genre: "Научная фантастика" },
        { id: 11, title: "Мёртвые души", author: "Николай Гоголь", year: 1842, isAvailable: true, genre: "Поэма" },
        { id: 12, title: "Тихий Дон", author: "Михаил Шолохов", year: 1940, isAvailable: false, genre: "Роман" }
      ];
      resolve(books);
    }, 1000);
  });
};