// Задание 1
// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.

// Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }
// Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.

// Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:

// Название альбома - Исполнитель (Год выпуска)

const musicCollection = {
  musicAlbums: [
    { title: "Boi prodolzhaetsa", artist: "Ariya", year: "1986" },
    { title: "Kukla kolduna", artist: "Korol i shut", year: "2001" },
    { title: "Gloves of metal", artist: "Manowar", year: "1985" },
  ],
  [Symbol.iterator]() {
    this.index = 0;
    return this;
  },
  next() {
    return this.index < this.musicAlbums.length
      ? { done: false, value: this.musicAlbums[this.index++] }
      : { done: true };
  },
};
for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
