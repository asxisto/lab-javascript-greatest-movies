// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = arr => {
  return arr.map(function (value) {
    return value.director;
  });
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = movies => {
  return movies.filter(value => {
    return value.director === 'Steven Spielberg' && value.genre.indexOf('Drama') !== -1;
  }).length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = array => {
  if (!array.length) {
    return 0;
  } else {
    let average = [...array];
    let rates = 0;
    let movies = 0;
    rates = average
      .filter(value => typeof value.rate === 'number')
      .reduce((acc, value) => acc + value.rate, 0);
    movies = average.filter(value => typeof value.rate === 'number').length;

    return Math.round((rates / movies) * 100) / 100;
  }
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = array => {
  if (!array.length) {
    return 0;
  } else {
    let drama = [...array];
    let rates = drama
      .filter(value => value.genre.indexOf('Drama') >= 0)
      .reduce((acc, value) => acc + value.rate, 0);
    let movies = drama.filter(value => value.genre.indexOf('Drama') >= 0).length;
    return movies > 0 ? Math.round((rates / movies) * 100) / 100 : 0;
  }
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = array => {
  let ordered = [...array];
  return ordered.sort((a, b) =>
    a.year > b.year ? 1 : a.year < b.year ? -1 : a.title > b.title ? 1 : -1
  );
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = array => {
  let abc = [...array];
  return abc
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map(value => value.title)
    .slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
